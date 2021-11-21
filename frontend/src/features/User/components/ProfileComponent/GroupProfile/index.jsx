import React from 'react';
import GroupTitle from './GroupTitle';
import './style.scss';

function GroupProfile() {
    return (
        <div className="Groupsprofile">
            <GroupTitle />
            <div className="itemgroups d-flex justify-content-between">
                <div className="img-title d-flex align-items-center justify-content-center">
                    <img src="/images/Users/link_img.png" alt="" />
                    <h2>Công động thiết kế</h2>
                </div>
            </div>
            <div className="itemgroups d-flex justify-content-between">
                <div className="img-title d-flex align-items-center justify-content-center">
                    <img src="/images/Users/link_img.png" alt="" />
                    <h2>Công động thiết kế</h2>
                </div>
            </div>
            <div className="itemgroups d-flex justify-content-between">
                <div className="img-title d-flex align-items-center justify-content-center">
                    <img src="/images/Users/link_img.png" alt="" />
                    <h2>Công động thiết kế</h2>
                </div>
            </div>
        </div>
    );
}

export default GroupProfile;