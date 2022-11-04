import React from 'react'
import "./Signup.css"
// import PhoneInput from 'react-phone-input-2'
// import 'react-phone-input-2/lib/style.css'
export default function Signup() {
    return (
        <div className='signup-container'>
            {/* <div>amazon.in</div> */}
            <div className='signup-form'>
                <h3 className='head-text'>Create Account</h3>
                <span className='label-text'>Your name</span>
                <input className='inp-field' />
                <span className='label-text' >Mobile Number</span>
                <div className='phone-felid-contr'>
                    <input className='inp-field country-code' />
                    <input className='inp-field mobile-num' />
                </div>
                <span className='label-text'>Email (Optional)</span>
                <input className='inp-field' />
                <span className='label-text'>Password</span>
                <input className='inp-field' />
                <p className='conditions-text'>
                    By enrolling your mobile phone number, you consent to receive automated security notifications via text message from Amazon. Message and data rates may apply.
                </p>
                <div className='cont-btn-contr'>
                    <button className='btn'>Continue</button>
                </div>
                <hr />
                <p conditions-text>
                    Already have an account? <span className='link-text'>Sign in?</span></p>
                <span >Buying for work?  <span className='link-text'>Create a free business account</span></span>
                <br/>
                <span conditions-text>By creating an account or logging in, you agree to</span>
                
                <span conditions-text>Amazon’s <span className='link-text'> Conditions of Use</span > and <span className='link-text'>Privacy Policy</span>.</span>
            </div>
        </div>
    )
}
