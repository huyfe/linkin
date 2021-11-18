import React, { useContext } from 'react';
import './style.scss';
import axios from 'axios';
import { MDBTable, MDBTableHead, MDBTableBody, MDBBtn } from 'mdb-react-ui-kit';
import { DataContext } from '../../../../DataLinkin';

function AdminUser(props) {
    const value = useContext(DataContext)
    const [users] = value.users
    console.log(users.length);

    const xoauser = (id) => {
        console.log("id", id);
        if (window.confirm("Bạn thực sự muốn xóa tài khoản này?")) {
            axios.delete(`http://localhost:3000/users/delete-user/${id}`)
            .then(res=>{
                window.location.href="/admin"
            })
            .catch((error) => console.log(error));
        }
    };

    return (
        <section id="adminuser-page">
            <h2 class="text-center">Quản Trị Người Dùng</h2>
            <MDBTable>
                <MDBTableHead>
                    <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>Họ Tên</th>
                        <th scope='col'>Email</th>
                        <th scope='col'>Số điện thoại</th>
                        <th scope='col'>Người theo dõi</th>
                        <th scope='col'>Chức năng</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    {
                        users.length === 0 ? (
                            <h2>Không có gì</h2>
                        ) : users.map(userss => (
                            <tr key={userss._id}>
                                <th scope='row'>{userss._id}</th>
                                <td>{userss.name}</td>
                                <td>{userss.email}</td>
                                <td>{userss.phone}</td>
                                <td >{userss.follower.length} Người</td>
                                <td>
                                    <MDBBtn className='text-dark' color='light' onClick={()=>xoauser(userss._id)}>
                                        Xóa
                                    </MDBBtn>
                                </td>
                            </tr>
                        ))
                    }
                </MDBTableBody>
            </MDBTable>
        </section>
    );
}

export default AdminUser;