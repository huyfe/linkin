import React from 'react';
import { Link } from 'react-router-dom';
import LinkTitle from './LinkTitle';
import './style.scss';

function LinkProFile() {
    return (
        <div className="Linksprofile">
            <LinkTitle />
            <div className="itemlink d-flex justify-content-between">
                <div className="img-title d-flex align-items-center justify-content-center">
                    <img src="/images/Users/link_img.png" alt="" />
                    <h2>Nguyên lý cơ bản design</h2>
                </div>
                <div className="services d-flex">
                    <Link to="#"><span className="icon-copy"></span></Link>
                    <Link to="#"><span className="icon-edit-basic"></span></Link>
                    <Link to="#">
                        <i className="far fa-trash-alt"></i>
                    </Link>
                </div>
            </div>
            <div className="itemlink d-flex justify-content-between">
                <div className="img-title d-flex align-items-center justify-content-center">
                    <img src="/images/Users/link_img.png" alt="" />
                    <h2>Nguyên lý cơ bản design</h2>
                </div>
                <div className="services d-flex">
                    <Link to="#"><span className="icon-copy"></span></Link>
                    <Link to="#"><span className="icon-edit-basic"></span></Link>
                    <Link to="#">
                        <i className="far fa-trash-alt"></i>
                    </Link>
                </div>
            </div>
            <div className="itemlink d-flex justify-content-between">
                <div className="img-title d-flex align-items-center justify-content-center">
                    <img src="/images/Users/link_img.png" alt="" />
                    <h2>Nguyên lý cơ bản design</h2>
                </div>
                <div className="services d-flex">
                    <Link to="#"><span className="icon-copy"></span></Link>
                    <Link to="#"><span className="icon-edit-basic"></span></Link>
                    <Link to="#">
                        <i className="far fa-trash-alt"></i>
                    </Link>
                </div>
            </div>
            <div className="itemlink d-flex justify-content-between">
                <div className="img-title d-flex align-items-center justify-content-center">
                    <img src="/images/Users/link_img.png" alt="" />
                    <h2>Nguyên lý cơ bản design</h2>
                </div>
                <div className="services d-flex">
                    <Link to="#"><span className="icon-copy"></span></Link>
                    <Link to="#"><span className="icon-edit-basic"></span></Link>
                    <Link to="#">
                        <i className="far fa-trash-alt"></i>
                    </Link>
                </div>
            </div>
            <div className="itemlink d-flex justify-content-between">
                <div className="img-title d-flex align-items-center justify-content-center">
                    <img src="/images/Users/link_img.png" alt="" />
                    <h2>Nguyên lý cơ bản design</h2>
                </div>
                <div className="services d-flex">
                    <Link to="#"><span className="icon-copy"></span></Link>
                    <Link to="#"><span className="icon-edit-basic"></span></Link>
                    <Link to="#">
                        <i className="far fa-trash-alt"></i>
                    </Link>
                </div>
            </div>
            <div className="itemlink d-flex justify-content-between">
                <div className="img-title d-flex align-items-center justify-content-center">
                    <img src="/images/Users/link_img.png" alt="" />
                    <h2>Nguyên lý cơ bản design</h2>
                </div>
                <div className="services d-flex">
                    <Link to="#"><span className="icon-copy"></span></Link>
                    <Link to="#"><span className="icon-edit-basic"></span></Link>
                    <Link to="#">
                        <i className="far fa-trash-alt"></i>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default LinkProFile;