import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import linkApi from '../../../../../api/linkApi';
import { update } from '../../../../Link/linkSlice';
import LinkTitle from './LinkTitle';
import './style.scss';

function LinkProFile() {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchLink = async () => {
            const linkList = await linkApi.getAll();
            dispatch(update(linkList.data));
        }
        fetchLink();
    }, []);

    const linkListData = useSelector(state => state.link);
    console.log(linkListData, "list link");

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