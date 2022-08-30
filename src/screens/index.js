import React from "react";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import LoginForm from "../components/LoginForm";
import CollegeList from "../components/colleges/CollegeList";
import "./Login.css";

/**
 * First page of the application that displays different content based on the state
 * of the user, "isAuth" (signed-in/signed-out)
 * @returns
 */
function Login() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div>
      {isAuth && (
        //Components displayed when user is signed-in
        <div>
          <Navbar navItem1='Wishlist' navLink1='/wishlist' navItem2='Logout' />

          <CollegeList />
        </div>
      )}

      {!isAuth && (
        //Components displayed when user is signed-out
        <div className='login-bg'>
          <Navbar navLink1='/wishlist' />
          <LoginForm />
        </div>
      )}
    </div>
  );
}

export default Login;
