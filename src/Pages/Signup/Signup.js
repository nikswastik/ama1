import React, { useState } from 'react'
import "./Signup.css"
import { useNavigate } from "react-router-dom";

import Codes from "./Countrycode.json"
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
export default function Signup() {
    const navigate = useNavigate();
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMsg, setErrorMsg] = useState("")
    const [errorFeild, setErrorFeild] = useState("")



    const nameHandler = (event) => {
        setName(event.target.value)

    }

    const phoneHandler = (event) => {
        setPhone(event.target.value)

    }

    const emailHandler = (event) => {
        setEmail(event.target.value)

    }

    const passwordHandler = (event) => {
        setPassword(event.target.value)

    }
    const submitHandler = () => {
        var mobileRE = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
        let passwordRE = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,8}$"
        let emailRE = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!name) {
            setErrorMsg("please enter the name")
            setErrorFeild("name")
        }
        else if (name.length < 2) {
            setErrorMsg("name should be greater than 2 characters")
            setErrorFeild("name")
        }
        else if (!phone) {
            setErrorMsg("please enter the mobile number")
            setErrorFeild("phone")
        }
        else if (!phone.match(mobileRE)) {
            setErrorMsg("please enter valid mobile number")
            setErrorFeild("phone")
        }
        else if (!password) {
            setErrorMsg("please enter the password")
            setErrorFeild("password")
        }

        else if (!password.length >= 6) {
            setErrorMsg("your password should be at least of 6 characters a")
        }
        else if (!email) {
            setErrorMsg("please enter email")
            setErrorFeild("email")

        }
        else if (!email.match(emailRE)) {
            setErrorMsg("please enter valid email")
            setErrorFeild("email")
        }
        else {
            localStorage.setItem("email", email)
            localStorage.setItem("phone", phone)
            alert("Thanks for registering")
            navigate('/signin')
        }
    }

    return (
       <div>
        <Header/>
         <div className='signup-container'>
            <div className='signup-form'>
                <h3 className='head-text'>Create Account</h3>
                <span className='label-text'>Your name</span>
                <input className='inp-field' value={name} onChange={nameHandler}  style={{border:errorFeild=="name" &&"1px solid red"}}/>
                {errorFeild == "name" && <p className='error-msg'>{errorMsg}</p>}
                <span className='label-text'>Mobile number </span>
                <div className='phone-felid-contr'>
                    <select name="cars" id="cars" className='inp-field country-code'>
                        {Codes.map((code, index) => {
                            return (
                                <option key={index} value={`${code.name}`}>{`${code.dial_code}  ${code.name}`}</option>
                            )
                        })}
                    </select>
                    <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" className='inp-field mobile-num' value={phone} onChange={phoneHandler} style={{border:errorFeild=="phone" &&"1px solid red"}} />

                </div>
                {errorFeild == "phone" && <p className='error-msg'>{errorMsg}</p>}
                <span className='label-text'>Email (Optional)</span>
                <input className='inp-field' value={email} onChange={emailHandler}  style={{border:errorFeild=="email" &&"1px solid red"}}/>
                {/* {errorFeild == "email" && <p className='error-msg'>{errorMsg}</p>} */}
                <span className='label-text'>Password</span>
                <input type="password" className='inp-field' value={password} onChange={passwordHandler} style={{border:errorFeild=="password" &&"1px solid red"}} />
                {errorFeild == "password" && <p className='error-msg'>{errorMsg}</p>}
                <p className='conditions-text'>
                    By enrolling your mobile phone number, you consent to receive automated security notifications via text message from Amazon. Message and data rates may apply.
                </p>
                <div className='cont-btn-contr'>
                    <button className='btn' onClick={submitHandler}>Continue</button>
                </div>
                <hr className='hr-line' />
                <div className='first-group'>
                    <span className='conditions-text '>
                        Already have an account? <span className='link-text'>Sign in?</span></span>
                    <br />
                    <span className=' conditions-text ' >Buying for work?  <span className='link-text'>Create a free business account</span></span>

                </div>

                <div className='second-group'>
                    <span conditions-text>By creating an account or logging in, you agree to</span>

                    <span conditions-text>Amazon’s <span className='link-text'> Conditions of Use</span > and <span className='link-text'>Privacy Policy</span>.</span>
                </div>
            </div>
          
        </div>
        <Footer/>
       </div>
       
    )
}
