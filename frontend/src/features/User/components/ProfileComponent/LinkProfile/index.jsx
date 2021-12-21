import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import linkApi from '../../../../../api/linkApi';
import { update } from '../../../../Link/linkSlice';
import { ProfileUser } from '../../../../../api/UserApi';
import { fetchOfUser } from '../../../Userslice';
import LinkTitle from './LinkTitle';
import './style.scss';

function LinkProFile() {
    const { slug } = useParams();
    const dispatch = useDispatch();
    const [Links, setLinks] = useState([])

    useEffect(() => {
        const fetchLink = async () => {
            const Profileinfo = await ProfileUser(slug);
            dispatch(fetchOfUser(Profileinfo.data.users));
            const linkList = await linkApi.getAlllimit(Profileinfo.data.users._id);
            dispatch(update(linkList.data));
            setLinks(linkList.data)
        }
        fetchLink();
    }, []);

    return (
        <div className="Linksprofile">
            <LinkTitle />
            <div className="listLinkProFile">
                {Links?.map(links => (
                    <div className="listLinkProFile__item">
                        <div className="linkItemProfile">
                            <div className="linkItemProfile__img">
                                <Link to={`/links/${links.slug}`}>
                                    <img src={links.image} />
                                </Link>
                            </div>
                            <Link to={`/links/${links.slug}`}>{links.title}</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LinkProFile;