import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import "./style.scss"
import { fetchOfUser } from '../../../Userslice';
import { ProfileUser } from '../../../../../api/UserApi';

function MainFollower({ Profile }) {
    const [Profile2, setProfile2] = useState([])
    const dispatch = useDispatch();
    const dataUser = localStorage.getItem("dataUser")
    const dataUsers = JSON.parse(dataUser)

    useEffect(() => {
        const fetchInformation2 = async () => {
            const Profileinfo2 = await ProfileUser(dataUsers.Slug);
            dispatch(fetchOfUser(Profileinfo2.data.users));
            setProfile2(Profileinfo2.data.users)
        }
        fetchInformation2();
    }, [dataUsers.Slug]);

    const unfollowFriends = (Slug) => {
        if (Profile2.follower.length > 0) {
            const fetchInformation3 = async () => {
                const Profileinfo3 = await ProfileUser(Slug);
                dispatch(fetchOfUser(Profileinfo3.data.users));
                const Profile3 = Profileinfo3.data.users;
                console.log(Profile3);

                const folloWing = Profile2.following?.filter((ggs) => {
                    return ggs.slug !== Slug
                })

                const folloWer = Profile3.follower?.filter((ggs) => {
                    return ggs.slug !== dataUsers.Slug
                })

                const dataFollow = {
                    following: folloWing
                };
    
                const dataFollower = {
                    follower: folloWer
                };

                try {
                    axios.patch(`http://localhost:3000/users/edit-infomation-user/` + dataUsers.Id, dataFollow)
                        .then(res => {
                            axios.patch(`http://localhost:3000/users/edit-infomation-user/` + Profile3._id, dataFollower)
                                .then(res => {
                                    alert('Hủy theo dõi thành công!');
                                    window.location.reload(false);
                                })
                                .catch(err => {
                                    console.log(err);
                                })
                        })
                        .catch(err => {
                            console.log(err);
                        })
                } catch (e) {
                    console.log(e);
                }
            }
            fetchInformation3();
        }
    }

    return (
        <div className="mainFollower">
            <div className="d-flex align-items-center searchFollower">
                <h3>Người theo dõi: {Profile.follower?.length}</h3>
            </div>
            <div className="listFollower">
                {(Profile.follower?.map(Flo => (
                    <div className="listFollower__item">
                        <div className="d-flex align-items-center followerItem">
                            <Link to={`/profile/${Flo.slug}`}>
                                {(Flo.image) === "avatar.png" ? (
                                    <img src={`/images/Users/${Flo.image}`} alt="" />
                                ) : (
                                    <img src={Flo.image} alt="" />
                                )}
                            </Link>
                            <h3>{Flo.name}</h3>
                            {(dataUsers) ? (
                                (dataUsers.Slug) === Profile.slug ? (
                                    <button onClick={() => unfollowFriends(Flo.slug)}>
                                        <span className="icon-unfollow"></span>
                                    </button>
                                ) : ("")
                            ) : ("")}

                        </div>
                    </div>
                )))}
            </div>
        </div>
    );
}

export default MainFollower;