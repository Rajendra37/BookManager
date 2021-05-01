import React from 'react'

export default function Login() {
    return (
        <div className="AddBookForm">
                <form>
                <label>Enter Email Id</label><br/>
                <input type="email"/><br/>
                <label>Enter Password</label><br/>
                <input type="Password"/><br/><br/>
                <button>Login</button>
                </form>
        </div>
    )
}
