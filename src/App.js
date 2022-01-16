import React from "react";
import Home from "./components/Home";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Login from "./components/Login";

function App() {
  const [user] = useAuthState(auth);

  return <div>{!user ? <Login /> : <Home />}</div>;
}

export default App;
