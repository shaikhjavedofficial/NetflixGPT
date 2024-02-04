import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../Utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handleButtonClick = () => {
    //validate
    const res = checkValidData(emailRef?.current.value, passwordRef?.current.value);
    console.log(passwordRef.current.value);
    console.log(res);
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
      <form
        onSubmit={(e) => e.preventDefault()}
        className="p-12 bg-black absolute w-3/12 my-24 right-0 mx-auto left-0 text-white bg-opacity-80"
      >
        <h1 className="font-bold text-3xl p-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            className="p-4 my-4 w-full bg-gray-800"
            placeholder="Full Name"
          />
        )}
        <input
          ref={emailRef}
          type="text"
          className="p-4 my-4 w-full bg-gray-800"
          placeholder="Email or Phone Number"
        />
        <input
          ref={passwordRef}
          type="password"
          className="p-4 my-4 w-full bg-gray-800"
          placeholder="Password"
        />
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign in" : "Sing Up"}
        </button>
        {isSignInForm ? <p>New to Netflix?</p> : <p>Already Registered?</p>}
        <a className="cursor-pointer " onClick={toggleSignInForm}>
          {isSignInForm ? <u>Sign up now.</u> : <u>Sign In now.</u>}
        </a>
      </form>
    </div>
  );
};
export default Login;
