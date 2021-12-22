import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import linkApi from '../../../../../api/linkApi';
import { fetchlinkOfUsers } from '../../../../Link/linkSlice';
import LinkTitle from './LinkTitle';
import './style.scss';

function LinkProFile() {
    const dispatch = useDispatch();
    const [Links, setLinks] = useState([])

    useEffect(() => {
        const fetchLinks= async () => {
            const linkList = await linkApi.getAlllimit({type: "user",});
            dispatch(fetchlinkOfUsers(linkList.data));
            setLinks(linkList.data)
        }
        fetchLinks();
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