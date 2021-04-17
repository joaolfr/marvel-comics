import React from "react";
import { logOut } from "../../redux/user/userSlice";
import { useSelector, useDispatch } from "react-redux";

const Navbar = ({ email }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <span>NAVBAR</span>
      <span>{email}</span>
      <button
        onClick={() => (
          dispatch(logOut()), localStorage.removeItem("accessToken")
        )}
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
