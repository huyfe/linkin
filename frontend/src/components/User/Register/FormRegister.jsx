import React, { useState } from 'react';


export default function FormRegister({ Register }) {
    var today = new Date();
    var date = (today.getMonth()+1)+'-'+today.getDate()+'-'+today.getFullYear();
    

    const [details, setDetails] = useState({
        name: "",
        email: "", 
        birthday: "", 
        created_date: date,
        image:"avatar.png",
        public:1,
        password: "", 
        Password: "", 
        role:1
    });

    const submitHandlers = e => {
        e.preventDefault();
        Register(details)
    }

    return (
        <div className="Register-component">
            <div className="many-hands">
                <img src="images/Users/many-hands.png" alt="" />
            </div>
            <div className="form-register">
                <h2>Register</h2>
                <p>Already have an account? &nbsp; <a href="/login">Login</a></p>
                <form className="form" onSubmit={submitHandlers}>
                    <div className="form-group">
                        <input className="form-control" type="text" placeholder="Full name" name="Name" id="Name" onChange={e=>setDetails({...details, name: e.target.value})} value={details.name} />
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="email" placeholder="Email" name="Email" id="Email" onChange={e=>setDetails({...details, email: e.target.value})} value={details.email} />
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="date" name="Birthday" id="Birthday" pattern="\d{1,2}/\d{1,2}/\d{4}" onChange={e=>setDetails({...details, birthday: e.target.value})} value={details.birthday} />
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="password" placeholder="Password" name="password" id="password" onChange={e=>setDetails({...details, password: e.target.value })} value={details.password} />
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="password" placeholder="Confirm password" name="Password" id="Password" onChange={e=>setDetails({...details, Password: e.target.value})} value={details.Password} />
                    </div>
                    <input type="hidden" name="_csrf" defaultValue="{{csrfToken}}" />
                    <button type="submit" className="pull-right">Register</button>
                </form>
            </div>

        </div>
    );
}