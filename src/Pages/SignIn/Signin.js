import React, { useState } from "react";
import "./Signin.css";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
export default function Signin() {
  const [loginData, setLoginData] = useState("");
  const navigate = useNavigate();

  const loginDataHandler = (event) => [setLoginData(event.target.value)];

  const login = () => {
    alert(loginData);
    let email = localStorage.getItem("email");
    let phone = localStorage.getItem("phone");

    if (loginData == (email || phone)) {
      navigate("/home");
    } else {
      alert("login failed");
    }
  };
  return (
    <div className="main-cntr">
     <Header/>
      <div className="signup-container">
        <div className="signup-form">
          <h3 className="head-text">Sign in</h3>
          <span className="label-text">Email or Phone</span>
          <input className="inp-field" onChange={loginDataHandler} />

          <div className="btn-signin-contr">
            <button className="btn" onClick={login}>
              Continue
            </button>
          </div>
          {/* <hr className='hr-line' /> */}
          <div className="first-group">
            <p>
              By continuing, you agree to Amazon's{" "}
              <span className="link-text-signIn">Conditions of Use</span> and{" "}
              <span className="link-text-signIn">Privacy Notice.</span>
            </p>
          </div>

          <div className="second-sin-group">
            <span className="normal-text">Need help?</span>
            <span className="normal-text">Forgot Password</span>
            <span className="normal-text">Other issues with Sign-In</span>
          </div>
        </div>
      </div>

      <div  style={{ width:"22%"}}>
        <hr />
        <div>
          <button className="btn create" onClick={login}>
            Create Your Amazon account
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
