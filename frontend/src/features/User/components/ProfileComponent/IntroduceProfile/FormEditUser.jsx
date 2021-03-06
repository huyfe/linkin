import React, { useState } from 'react';

export default function FormEditUser({ KeyEdit }) {
    const dataUser = localStorage.getItem("dataUser")
    const dataUsers = JSON.parse(dataUser)
    const [detailsTwo, setDetailsTwo] = useState({
        name: dataUsers.Fullname,
        birthday: dataUsers.Date,
        email: dataUsers.Email
    });

    const submitHandlers = e => {
        e.preventDefault();
        KeyEdit(detailsTwo)
    }

    return (
        <form onSubmit={submitHandlers}>
            <div className="itemintroduces d-flex justify-content-start">
                <div className="img-title d-flex align-items-center">
                    <h2 className="title-resetpass">Tên</h2>
                    <input className="form-control" type="text" name="Fullname" onChange={e => setDetailsTwo({ ...detailsTwo, name: e.target.value })} value={detailsTwo.name} required/>
                </div>
            </div>
            <div className="itemintroduces d-flex justify-content-start">
                <div className="img-title d-flex align-items-center">
                    <h2 className="title-resetpass">Ngày sinh</h2>
                    <input className="form-control" type="date" name="Date" onChange={e => setDetailsTwo({ ...detailsTwo, birthday: e.target.value })} value={detailsTwo.birthday}  required/>
                </div>
            </div>
            <div className="itemintroduces d-flex justify-content-start">
                <div className="img-title d-flex align-items-center">
                    <h2 className="title-resetpass">Email</h2>
                    <input className="form-control" type="email" name="Email" onChange={e => setDetailsTwo({ ...detailsTwo, email: e.target.value })} value={detailsTwo.email} required/>
                </div>
            </div>
            <div className="itemintroduces d-flex justify-content-center align-items-center">
                <button type="submit">Cập nhật</button>
            </div>
        </form>
    );
}