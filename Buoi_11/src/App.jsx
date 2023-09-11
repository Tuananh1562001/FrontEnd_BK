import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <div
      className="
        flex 
        h-full
        flex-col 
        justify-center 
        py-12 
        bg-gray-100
        sm:mx-auto
      "
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2
          className="
            mt-6  
            text-center 
            text-3xl 
            font-bold 
            tracking-tight 
            text-gray-900
          "
        >
          Sign in to your account
        </h2>
      </div>
      <label htmlFor="">Username</label>
      <input type="text" id="username" name="username" />
      <label htmlFor="">Password</label>
      <input type="text" id="password" name="password" />
      <button className="pt-4 bg-red-500" type="submit">
        LOGIN
      </button>
    </div>
  );
}

export default App;
