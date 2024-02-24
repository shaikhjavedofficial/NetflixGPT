import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../Utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";
import { AVATAR } from "../Utils/constants";
// "https://avatars.githubusercontent.com/u/60027240?v=4"
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);
  const dispatch = useDispatch();
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handleButtonClick = () => {
    const email = emailRef?.current?.value;
    const password = passwordRef?.current?.value;
    const name = nameRef?.current?.value;
    //validate
    const res = checkValidData(email, password, name);
    setErrorMsg(res);
    if (res) return;
    //create user or sign in
    if (!isSignInForm) {
      // sign up
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: nameRef?.current?.value,
            photoURL: AVATAR,
          })
            .then(() => {
              // Profile updated!
              // ...
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName, photoURL }));
            })
            .catch((error) => {
              // An error occurred
              // ...
              setErrorMsg(error.Message);
            });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage);
        });
    }
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
            ref={nameRef}
          />
        )}
        <input
          ref={emailRef}
          type="text"
          className="p-4 my-4 w-full bg-gray-800"
          placeholder="Email or Phone Number"
        />
        {/* <p className="text-red-500">{errorMsg}</p> */}
        <input
          ref={passwordRef}
          type="password"
          className="p-4 my-4 w-full bg-gray-800"
          placeholder="Password"
        />
        <p className="text-red-500">{errorMsg}</p>
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
