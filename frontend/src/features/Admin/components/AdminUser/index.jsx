import React, { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import './style.scss';
import { Line } from "react-chartjs-2";
import { MDBTable, MDBTableHead, MDBTableBody, MDBBtn, MDBPagination, MDBPaginationItem, MDBPaginationLink } from 'mdb-react-ui-kit';
import { DataContext } from '../../../../DataLinkin';
import { AdminDeleteUser, ProfileUser } from '../../../../api/UserApi';
import { fetchOfUser } from '../../../User/Userslice';

function AdminUser(props) {
    const value = useContext(DataContext)
    const [users] = value.users
    const dispatch = useDispatch();
    const [Profile, setProfile] = useState([])
    const [Showhide, setShowhide] = useState([])

    // Pagination
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage] = useState(4)
    const totalPost = users.length
    const pageNumber = []
    for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
        pageNumber.push(i)
    }

    const indexOfLastPost = currentPage * postPerPage
    const indexOfFirstPost = indexOfLastPost - postPerPage

    const paginate = pageNumber => setCurrentPage(pageNumber)

    // Chart
    const NameChart = users.map(user => user.name);

    const dataChart1 = users.map(user => (user.email.split('').length));

    const dataChart2 = users.map(user => (user.name.split('').length));

    console.log(dataChart1);
    console.log(dataChart2);

    const data = {
        labels: NameChart,
        datasets: [
            {
                label: "Độ dài kí tự theo email",
                data: dataChart1,
                fill: true,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)"
            },
            {
                label: "Độ dài kí tự theo tên",
                data: dataChart2,
                fill: false,
                borderColor: "#742774"
            }
        ]
    };

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
                    window.location.href = "admin";
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
                        <th scope='col'>Phân Quyền</th>
                        <th scope='col'>Chức năng</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    {
                        users.length === 0 ? (
                            <h2>Không có gì</h2>
                        ) : users.slice(indexOfFirstPost, indexOfLastPost).map(userss => (
                            <tr key={userss._id}>
                                <th scope='row'>{userss._id}</th>
                                <td>{userss.name}</td>
                                <td>{userss.email}</td>
                                <td >
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
                    <nav aria-label='Page navigation example'>
                        <MDBPagination className='mb-0'>
                            {
                                pageNumber.map(number => (
                                    <MDBPaginationItem key={number}>
                                        <MDBPaginationLink href='#' onClick={()=>paginate(number)}>{number}</MDBPaginationLink>
                                    </MDBPaginationItem>
                                ))
                            }
                        </MDBPagination>
                    </nav>
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