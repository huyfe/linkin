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

    return (
        <div className="Linksprofile">
            <LinkTitle />
            <div className="listLinkProFile">
                {linkListData?.map(links => (
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