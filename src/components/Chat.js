import React from "react";
import { useSelector } from "react-redux";
import { selectRoomId } from "../features/appSlice";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import { query, orderBy, doc, collection } from "firebase/firestore";
import ChatInput from "./ChatInput";
import Message from "./Message";
import { useRef, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

function Chat() {
  const chatRef = useRef(null);
  const roomId = useSelector(selectRoomId);
  const [roomDetails] = useDocument(roomId && doc(db, "channels", roomId));
  const [roomMessages, loading] = useCollection(
    roomId && query(collection(db, "channels", roomId, "messages"), orderBy("timestamp"))
  );
  const [currentUser] = useAuthState(auth);

  useEffect(() => {
    chatRef?.current?.scrollIntoView({ behavior: "smooth" });
  }, [roomId, loading]);

  return (
    <div className="flex justify-center w-full pt-[70px] min-h-screen">
      <div className="w-[90%] md:w-[60%] flex flex-col justify-center p-5">
        {roomId && roomMessages ? (
          <>
            <div className="flex flex-col divide-y divide-solid">
              {roomMessages?.docs.map((doc) => {
                const { user, userImage, userUID, message, timestamp } = doc.data();
                return (
                  <Message
                    key={doc.id}
                    id={doc.id}
                    message={message}
                    timestamp={timestamp}
                    user={user}
                    userImage={userImage}
                    belongsToCurrentUser={userUID === currentUser.uid}
                    channelId={roomId}
                  />
                );
              })}
              <div ref={chatRef} />
            </div>
            <ChatInput chatRef={chatRef} channelName={roomDetails?.data().name} channelId={roomId} />
          </>
        ) : null}
      </div>
    </div>
  );
}

export default Chat;
