import React, { useState } from 'react';

export default function FormResetPasss({ ResetPass }) {
    const [details, setDetails] = useState({
        newpassword: "",
        confirmpassword: ""
    });

    const submitHandlers = e => {
        e.preventDefault();
        ResetPass(details)
    }

    return (
        <div className="ResetPass-component">
            <div className="many-hands">
                <img src="images/Users/background_user1.png" alt="" />
            </div>
            <div className="form-ResetPass">
                <h2>Đặt lại mật khẩu</h2>
                <p>Vui lòng ghi đúng email để xác thực!</p>
                <form className="form d-flex flex-column" onSubmit={submitHandlers}>
                    <div className="form-group">
                        <input className="form-control" type="password" name="newpassword" placeholder="Nhập mật khẩu mới" onChange={e => setDetails({ ...details, newpassword: e.target.value })} value={details.newpassword} />
                    </div> <br />
                    <div className="form-group">
                        <input className="form-control" type="password" name="confirmpassword" placeholder="Xác nhận mật khẩu" onChange={e => setDetails({ ...details, confirmpassword: e.target.value })} value={details.confirmpassword} />
                    </div> <br />
                    <button type="submit" className="pull-right">Lưu</button>
                </form>
            </div>
        </div>
    );
}