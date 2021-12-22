import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MDBBtn } from 'mdb-react-ui-kit';

export default function FormRestore({ RestoreUser, errors, result }) {

    const [details, setDetails] = useState({
        email: ""
    });
    const Result = () => {
        return (
            <span className="checkin">{errors}</span>
        )
    }

    const submitHandlers = e => {
        e.preventDefault();
        RestoreUser(details)
    }

    return (
        <form className="form d-flex flex-column" onSubmit={submitHandlers}>
            <div className="form-detail">
                <div className="form-group">
                    <input className="form-control" type="email" placeholder="Email" name="Email" id="Email" onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} />
                </div>
                <MDBBtn type="submit" className="pull-right">Khôi phục</MDBBtn>
            </div>
            <div className="forgot-pass d-flex justify-content-between">
                <div >{result ? <Result /> : null}</div>
                <div>
                    <Link className="link-register" to="/register">Đăng ký <i class="fal fa-arrow-right"></i></Link>
                    <Link to="/login">Đăng nhập <i class="fal fa-arrow-right"></i></Link>
                </div>
            </div>
        </form>
    );
}