import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import {
    MDBBtn,
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane,
} from "mdb-react-ui-kit";
import axios from 'axios';
import CategoryProfile from "./CategoryProfile";
import GroupProfile from "./GroupProfile";
import LinkProFile from "./LinkProfile";

import "./style.scss";
import MainFollower from "./MainFollower";
import MainFollowing from "./MainFollowing";
import TimelineUserComponent from "../TimelineUserComponent"
import IntroduceProfile from "./IntroduceProfile";
import UpLoadLinkComponent from "../../../../components/UploadLinkComponent/index";
import Header from "../../../../components/Header";

function ProfileComponent(props) {
    const { slug } = useParams();
    const [Profile, setProfile] = useState([])
    const dataUser = localStorage.getItem("dataUser")
    const dataUsers = JSON.parse(dataUser)
    const [basicActive, setBasicActive] = useState("tab1");

    const handleBasicClick = (value) => {
        if (value === basicActive) {
            return;
        }

        setBasicActive(value);
    };

    useEffect(() => {
        axios.get(`http://localhost:3000/users/${slug}`)
            .then(res => {
                setProfile(res.data.users)
            })
    }, [slug]);

    const [userInfo, setUserInfo] = useState({
        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
        href: "/profile/tran-quoc-huy"
    })

    const Posts = [
        {
            id: 1,
            imageUser: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2787&q=80',
            userLink: "/do-ba-dat",
            nameUser: "Bá Đạt",
            datePost: "20/10/2019",

            groupLink: "/cong-dong-frontend-vietnam",
            imageGroup: "/images/Timeline/group__thumb-1.png",
            nameGroup: "Cộng đồng Frontend Việt Nam",
            contentLink: "www.linkin.com/abcxyx",
            contentDesc: "Các nguyên lý cơ bản của lập trình...",
            imageLink: "/images/Timeline/post-thumb.png",
            like: 20,
            comment: 30,
            hour: 40,
        },
        {
            id: 2,
            imageUser: 'https://images.unsplash.com/photo-1604004555489-723a93d6ce74?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80',
            userLink: "/do-ba-dat",
            nameUser: "Bá Đạt 2",
            datePost: "20/10/2019",

            groupLink: "/cong-dong-frontend-vietnam",
            imageGroup: "/images/Timeline/group__thumb-1.png",
            nameGroup: "Cộng đồng Frontend Việt Nam",
            contentLink: "www.linkin.com/abcxyx",
            contentDesc: "Các nguyên lý cơ bản của lập trình...",
            imageLink: "/images/Timeline/post-thumb.png",
            like: 20,
            comment: 30,
            hour: 40,
        },

    ];
    const LinkPostProfile = Posts.map(post => {
        return (
            <TimelineUserComponent
                imageUser={post.imageUser}
                userRef={post.userProfileRef}
                nameUser={post.nameUser}
                datePost={post.datePost}
                groupRef={post.groupRef}
                imageGroup={post.imageGroup}
                nameGroup={post.nameGroup}
                contentDesc={post.contentDesc}
                contentLink={post.contentLink}
                imageLink={post.imageLink}
                like={post.like}
                comment={post.comment}
                hour={post.hour}
            ></TimelineUserComponent>
        );
    });

    return (
        <div>
            <Header />
            <section id="Profile-component">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="img-profile">
                                <img src="/images/Users/anhbia.jpg" alt="" />
                                <div className="avatar-name d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                        <img src={`/images/Users/${Profile.image}`} alt="" />
                                        <h2>{Profile.name}</h2>
                                    </div>
                                    {(dataUsers) ? (
                                        (dataUsers.Slug) !== Profile.slug ? (
                                            <MDBBtn outline className="button">
                                                Theo dõi
                                            </MDBBtn>
                                        ) : ("")
                                    ) : ("")}
                                </div>
                            </div>
                            <div className="detail-profile row">
                                <div className="left-tab-menu col-8">
                                    <MDBTabs fill className="mb-3">
                                        <MDBTabsItem>
                                            <MDBTabsLink
                                                onClick={() => handleBasicClick("tab1")}
                                                active={basicActive === "tab1"}
                                            >
                                                Bài viết
                                            </MDBTabsLink>
                                        </MDBTabsItem>
                                        <MDBTabsItem>
                                            <MDBTabsLink
                                                onClick={() => handleBasicClick("tab2")}
                                                active={basicActive === "tab2"}
                                            >
                                                Giới thiệu
                                            </MDBTabsLink>
                                        </MDBTabsItem>
                                        <MDBTabsItem>
                                            <MDBTabsLink
                                                onClick={() => handleBasicClick("tab3")}
                                                active={basicActive === "tab3"}
                                            >
                                                Đang theo dõi
                                            </MDBTabsLink>
                                        </MDBTabsItem>
                                        <MDBTabsItem>
                                            <MDBTabsLink
                                                onClick={() => handleBasicClick("tab4")}
                                                active={basicActive === "tab4"}
                                            >
                                                Người theo dõi
                                            </MDBTabsLink>
                                        </MDBTabsItem>
                                    </MDBTabs>
                                    <MDBTabsContent>
                                        <MDBTabsPane show={basicActive === "tab1"}>
                                            <div className="Timeline-profile">
                                                <UpLoadLinkComponent UpLoadLinkComponent avatar={userInfo.avatar} href={userInfo.href}></UpLoadLinkComponent>
                                                {LinkPostProfile}
                                            </div>
                                        </MDBTabsPane>
                                        <MDBTabsPane show={basicActive === "tab2"}>
                                            <IntroduceProfile />
                                        </MDBTabsPane>
                                        <MDBTabsPane show={basicActive === "tab3"}>
                                            <MainFollowing />
                                        </MDBTabsPane>
                                        <MDBTabsPane show={basicActive === "tab4"}>
                                            <MainFollower />
                                        </MDBTabsPane>
                                    </MDBTabsContent>
                                </div>
                                <div className="right-information col-4">
                                    <div className="category-imformation">
                                        <CategoryProfile />
                                    </div>
                                    <div className="link-imformation">
                                        <LinkProFile />
                                    </div>
                                    <div className="group-information">
                                        <GroupProfile />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ProfileComponent;
