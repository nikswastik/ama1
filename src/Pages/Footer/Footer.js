import React from 'react'
import "./Footer.css"
export default function Footer() {
    return (
        <div className='footer-contr'>
            <div className='link-contr{'>
                <span className='link-text'> Conditions of Use</span>
                <span  className='link-text'> Privacy Notice</span>
                <span  className='link-text'>Help</span>
            </div>

            <div className='copyright-text'>
                <span > © 1996-2022, Amazon.com, Inc. or its affiliates</span>
            </div>
        </div>
    )
}
