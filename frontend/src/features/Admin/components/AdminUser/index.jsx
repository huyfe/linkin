import React, { useContext } from 'react';
import './style.scss';
import axios from 'axios';
import { Line } from "react-chartjs-2";
import { MDBTable, MDBTableHead, MDBTableBody, MDBBtn } from 'mdb-react-ui-kit';
import { DataContext } from '../../../../DataLinkin';

const data = {
    labels: ["Huy", "Lam", "Lập", "Hải", "Đạt", "Quốc"],
    datasets: [
      {
        label: "First dataset",
        data: [33, 53, 85, 41, 44, 65],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
      },
      {
        label: "Second dataset",
        data: [33, 25, 35, 51, 54, 76],
        fill: false,
        borderColor: "#742774"
      }
    ]
};

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
            <Line data={data} /> <br />
            <MDBTable>
                <MDBTableHead>
                    <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>Họ Tên</th>
                        <th scope='col'>Email</th>
                        <th scope='col'>Số điện thoại</th>
                        <th scope='col'>Phân Quyền</th>
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
                                <td >
                                    {/* {userss.follower.length} Người */}
                                    {
                                        (userss.role) === "1" ? (
                                            <td>Admin</td>
                                        ) : (
                                            <td>Người dùng</td>
                                        )
                                    }
                                </td>
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