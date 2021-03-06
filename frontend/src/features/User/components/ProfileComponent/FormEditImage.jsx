import React, { useState } from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';

export default function FormEditImage({ KeyEditImage }) {
    const dataUser = localStorage.getItem("dataUser")
    const dataUsers = JSON.parse(dataUser)
    const [detailS, setDetailS] = useState({
        image: dataUsers.Image
    });

    const submitHandlers = e => {
        e.preventDefault();
        KeyEditImage(detailS)
    }

    return (
        <form onSubmit={submitHandlers}>
            <h3>Ảnh đại diện</h3>
            <div className="itemintroduces d-flex justify-content-start">
                
                <div className="img-title d-flex align-items-center">
                    <input className="form-control" type="file" name="Image" accept="image/*" onChange={e => setDetailS({ ...detailS, image: e.target.files })} required/>
                </div> &nbsp;
                <MDBBtn type="submit">Cập nhật</MDBBtn>
            </div> <br />
        </form>
    );
}