import React from 'react'

export default function Register() {
                
             return(
                <div className="AddBookForm">
                <form>
                    <label>Enter First Name</label><br/>
                    <input type="text"/><br/>
                    <label>Enter Last name</label><br/>
                    <input type="text"/><br/>
                    <label>Enter Email</label><br/>
                    <input type="email"/><br/>
                    <label>Enter a Password</label><br/>
                    <input type="password"/><br/><br/>
                    <button>Register</button>
                </form>

        </div>
    )
}
