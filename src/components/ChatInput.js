import React from "react";
import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { PencilIcon } from "@heroicons/react/outline";

function ChatInput({ channelName, channelId, chatRef }) {
  const [user] = useAuthState(auth);
  const [input, setInput] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    if (!channelId || !input.trim()) {
      return;
    }

    await addDoc(collection(db, "channels", channelId, "messages"), {
      user: user.displayName,
      userImage: user.photoURL,
      userUID: user.uid,
      message: input,
      timestamp: serverTimestamp(),
    });

    setInput("");
    chatRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex p-1 bg-white border-solid border-2 border-gray-500 rounded mt-auto bottom-4">
      <form className="flex grow">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={channelName ? `Message ${channelName}` : "Select a channel to send a message"}
          className="p-3 grow outline-none"
          rows={2}
        />
        <button type="submit" onClick={sendMessage} className="m-2 p-2 rounded bg-transparent hover:bg-gray-300">
          <PencilIcon className="h-7 text-gray-800" />
        </button>
      </form>
    </div>
  );
}

export default ChatInput;
