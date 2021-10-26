import React, { useContext } from 'react';
import { DataContext } from '../../../DataLinkin';
import './style.scss';

export default function Register() {
    const value = useContext(DataContext)
    const [{users}] = value.users;
    console.log(users);
    return (
        <div className="Register-component">
            <h2>Register</h2>
            <form className="form" action="/login">
                <div className="form-group">
                    <label htmlFor="Name"><b>Full name:</b></label><br />
                    <input className="form-control" type="text" placeholder="Full name" name="Name" id="Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="Email"><b>Email:</b></label><br />
                    <input className="form-control" type="email" placeholder="Email" name="Email" id="Email" />
                </div>
                <div className="form-group">
                    <label htmlFor="Birthday"><b>Birthday:</b></label><br />
                    <input className="form-control" type="date" name="Birthday" id="Birthday" />
                </div>
                <div className="form-group">
                    <label htmlFor="Image"><b>Avatar:</b></label><br />
                    <input className="form-control" type="file" name="Image" id="Image" />
                </div>
                <div className="form-group">
                    <label htmlFor="Password"><b>Password:</b></label><br />
                    <input className="form-control" type="password" placeholder="Password" name="Password" id="Password" />
                </div>
                <button type="submit" className="btn btn-danger">Register</button>
            </form>
        </div>
    );
}