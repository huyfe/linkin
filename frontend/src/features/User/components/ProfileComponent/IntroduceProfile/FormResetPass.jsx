import React, { useState } from 'react';

export default function FormResetPasss({ ResetPass }) {
    const dataUser = localStorage.getItem("dataUser")
    const dataUsers = JSON.parse(dataUser)
    const [details, setDetails] = useState({
        slug: dataUsers.Slug,
        oldpassword: "",
        newpassword: "",
        confirmpassword: ""
    });

    const submitHandlers = e => {
        e.preventDefault();
        ResetPass(details)
    }

    return (
        <form onSubmit={submitHandlers}>
            <div className="itemintroduces d-flex justify-content-start">
                <div className="img-title d-flex align-items-center">
                    <h2 className="title-resetpass">Mật khẩu hiện tại</h2>
                    <input className="form-control" type="password" name="oldpassword" onChange={e => setDetails({ ...details, oldpassword: e.target.value })} value={details.oldpassword} />
                </div>
            </div>
            <div className="itemintroduces d-flex justify-content-start">
                <div className="img-title d-flex align-items-center">
                    <h2 className="title-resetpass">Nhập mật khẩu mới</h2>
                    <input className="form-control" type="password" name="newpassword" onChange={e => setDetails({ ...details, newpassword: e.target.value })} value={details.newpassword} />
                </div>
            </div>
            <div className="itemintroduces d-flex justify-content-start">
                <div className="img-title d-flex align-items-center">
                    <h2 className="title-resetpass">Xác nhận lại mật khẩu</h2>
                    <input className="form-control" type="password" name="confirmpassword" onChange={e => setDetails({ ...details, confirmpassword: e.target.value })} value={details.confirmpassword} />
                </div>
            </div>
            <div className="itemintroduces d-flex justify-content-center align-items-center">
                <button type="submit">Lưu</button>
            </div>
        </form>
    );
}