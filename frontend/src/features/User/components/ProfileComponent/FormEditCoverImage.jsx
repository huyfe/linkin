import React, { useState } from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';

export default function FormEditCoverImage({ KeyEditCoverImage }) {
    const dataUser = localStorage.getItem("dataUser")
    const dataUsers = JSON.parse(dataUser)
    const [detailSs, setDetailSs] = useState({
        theme: dataUsers.Theme
    });

    const submitHandlers = e => {
        e.preventDefault();
        KeyEditCoverImage(detailSs)
    }

    return (
        <form onSubmit={submitHandlers}>
            <h3>Ảnh bìa</h3>
            <div className="itemintroduces d-flex justify-content-start">
                <div className="img-title d-flex align-items-center">
                    <input className="form-control" type="file" name="Image" accept="image/*" onChange={e => setDetailSs({ ...detailSs, theme: e.target.files })} required/>
                </div> &nbsp;
                <MDBBtn type="submit">Cập nhật</MDBBtn>
            </div> <br />
        </form>
    );
}