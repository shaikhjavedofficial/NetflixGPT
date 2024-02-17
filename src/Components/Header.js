import React from "react";
import { useNavigate } from "react-router";
import { signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useSelector } from "react-redux";
const Header = () => {
  const navigate = useNavigate();
  const selector = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        alt="logo"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      />
      {selector && <div className="flex p-2">
        <img alt="userIcon" className="w-12 h-12" src={selector?.photoURL} />
        <button onClick={handleSignOut} className="text-white font-bold">
          Sign Out
        </button>
      </div>}
    </div>
  );
};
export default Header;
