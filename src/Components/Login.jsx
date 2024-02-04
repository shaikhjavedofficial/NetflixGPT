import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div>
        <img
          className="absolute"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_small.jpg"
          alt="image"
        />
      </div>
      <form className="p-12 bg-black absolute w-3/12 my-24 right-0 mx-auto left-0 text-white bg-opacity-80">
        <h1 className="font-bold text-3xl p-4">{isSignInForm?"Sign In":"Sign Up"}</h1>
        <input
          type="text"
          className="p-4 my-4 w-full bg-gray-800"
          placeholder="Email or Phone Number"
        />
        <input
          type="password"
          className="p-4 my-4 w-full bg-gray-800"
          placeholder="Password"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          Sign in
        </button>
        <p>
          New to Netflix? <p onClick={toggleSignInForm}>Sign up now.</p>{" "}
        </p>
      </form>
    </div>
  );
};
export default Login;
