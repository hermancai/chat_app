import React from "react";
import { auth, provider, popUpSignIn } from "../firebase";
import { ChatIcon } from "@heroicons/react/outline";

function Login() {
  const signIn = (e) => {
    e.preventDefault();

    popUpSignIn(auth, provider).catch((error) => alert(error.message));
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-700">
      <div className="flex flex-col bg-gray-800 rounded-lg p-8 justify-center items-center text-white gap-3">
        <ChatIcon className="h-36" />
        <h1 className="text-xl font-bold">ChatApp</h1>
        <div type="submit" onClick={signIn} className="rounded bg-gray-700 p-3 cursor-pointer text-sm">
          Sign in with Google
        </div>
      </div>
    </div>
  );
}

export default Login;
