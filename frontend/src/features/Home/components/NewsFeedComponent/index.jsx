import React, { useState } from 'react';
import PropTypes from 'prop-types';
import UpLoadLinkComponent from "../../../../components/UploadLinkComponent";
import ListLinkComponent from "../ListLinkComponent";

NewsFeedComponent.propTypes = {

};

function NewsFeedComponent(props) {
    const [userInfo, setUserInfo] = useState({
        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
        href: "/profile/tran-quoc-huy"
    })
    return (
        <div className="news-feed news-feed-home-page">
            <div className="row">
                <div className="col-12">
                    <UpLoadLinkComponent avatar={userInfo.avatar} href={userInfo.href}></UpLoadLinkComponent>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-12">
                    <ListLinkComponent />
                </div>
            </div>
        </div>
    );
}

export default NewsFeedComponent;