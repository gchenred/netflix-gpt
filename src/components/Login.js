import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg"></img>
      </div>

      <form className="w-3/12 p-12 absolute my-36 bg-black/80 mx-auto left-0 right-0 text-white rounded-lg">
        <h1 className="text-3xl font-bold py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="First Name"
            className="p-4 my-4 bg-gray-700 w-full text-base"
          ></input>
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 bg-gray-700 w-full text-base"
        ></input>
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 bg-gray-700 w-full text-base"
        ></input>
        <button className="p-4 my-6 w-full text-lg bg-red-700 rounded-lg">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignIn ? "New to netflix ?  Sign Up" : "Already a user ?  Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
