import React from 'react'

export default function Contact() {
    return (
        <div className='contactForm'>
            <p className='inputContainer'>
                <p><label>Email:</label></p>
                <input type='text'></input>
            </p>

            <p className='inputContainer'>
                <p><label>Message:</label></p>
                <input type='text'></input>
            </p>

            <p className='inputContainer'>
                <button className='sendMessage'>Send</button>
            </p>
        </div>
    )
}
