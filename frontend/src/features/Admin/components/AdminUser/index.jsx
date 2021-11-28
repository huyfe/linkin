import React, { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import './style.scss';
import { Line } from "react-chartjs-2";
import { MDBTable, MDBTableHead, MDBTableBody, MDBBtn } from 'mdb-react-ui-kit';
import { DataContext } from '../../../../DataLinkin';
import { AdminDeleteUser, ProfileUser } from '../../../../api/UserApi';
import { fetchOfUser } from '../../../User/Userslice';

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
    const dispatch = useDispatch();
    const [Profile, setProfile] = useState([])
    const [Showhide, setShowhide] = useState([])

    const deleteusers = (id) => {
        console.log("id", id);
        if (window.confirm("Bạn thực sự muốn xóa tài khoản này?")) {
            dispatch(AdminDeleteUser(id));
        }
    };

    const updateusers = (slug) => {
        const fetchInformation = async () => {
            const Profileinfo = await ProfileUser(slug);
            dispatch(fetchOfUser(Profileinfo.data.users));
            setProfile(Profileinfo.data.users)
        }
        fetchInformation();
        const show = "showupdate";
        setShowhide(show);
    };

    const hideupdate = () => {
        const hide = "";
        setShowhide(hide);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        const idform = document.getElementById("id").value;
        const valueform = {
            role: document.getElementById("role").value
        }
        try {
            axios.patch(`http://localhost:3000/users/edit-infomation-user/` + idform, valueform)
                .then(res => {
                    alert('Cập nhật phân quyền thành công!');
                    // navigate('/');
                    window.location.href="admin";
                })
                .catch(err => {
                    console.log(err);
                })
        } catch (e) {
            console.log(e);
        }
    }

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
                                    {
                                        (Showhide) === "showupdate" ? (
                                            <MDBBtn className='text-light' onClick={hideupdate}>
                                                Sửa
                                            </MDBBtn>
                                        ) : (
                                            <MDBBtn className='text-light' onClick={() => updateusers(userss.slug)}>
                                                Sửa
                                            </MDBBtn>
                                        )
                                    }
                                    &nbsp;
                                    <MDBBtn className='text-dark' color='light' onClick={() => deleteusers(userss._id)}>
                                        Xóa
                                    </MDBBtn>
                                </td>
                            </tr>
                        ))
                    }
                </MDBTableBody>
            </MDBTable>
            {
                (Showhide) === "showupdate" ? (
                    (Profile.name) ? (
                        <div>
                            <h3>{Profile.name}</h3>
                            <form onSubmit={submitHandler}>
                                <input type="hidden" id="id" value={Profile._id} />
                                {(Profile.role) === "1" ? (
                                    <select class="form-select form-select-lg mb-3" id="role" aria-label=".form-select-lg example">
                                        <option value="1">Admin</option>
                                        <option value="0">Người dùng</option>
                                    </select>
                                ) : (
                                    <select class="form-select form-select-lg mb-3" id="role" aria-label=".form-select-lg example" >
                                        <option value="0">Người dùng</option>
                                        <option value="1">Admin</option>
                                    </select>
                                )}
                                <MDBBtn type="submit">
                                    Sửa
                                </MDBBtn>
                            </form>
                        </div>
                    ) : ("")
                ) : ("")
            }


        </section>
    );
}

export default AdminUser;