import React from 'react';
import './style.scss';

export default function Login() {

    return (
        <div className="Login-component">
            <h2>Login</h2>
            <form className="form" >
                <label htmlFor="Email"><b>Email:</b></label><br />
                <input className="form-control" type="email" placeholder="Email" name="Email" id="Email"/><br />
                <label htmlFor="Password"><b>Password:</b></label><br />
                <input className="form-control" type="password" placeholder="Password" name="Password" id="Password"/><br />
                <button type="submit" className="btn btn-danger">Login</button>
            </form>
        </div>
    );
}