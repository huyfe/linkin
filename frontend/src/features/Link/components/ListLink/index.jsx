import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import LinkItem from './../LinkItem/index';
import { useDispatch, useSelector } from 'react-redux';
import linkApi from '../../../../api/linkApi';
import { update } from '../../linkSlice';
import { useSearchParams } from 'react-router-dom';

ListLink.propTypes = {

};

function ListLink(props) {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchLink = async () => {
            const dataUser = JSON.parse(localStorage.getItem('dataUser'));
            const linkList = await linkApi.getAll({ type: "user" });
            dispatch(update(linkList.data));
        }
        fetchLink();
    }, []);

    const linkListData = useSelector(state => state.link);
    let [searchParams] = useSearchParams();
    let param = searchParams.get("filterSort");

    let links = [];
    if (!param) {
        links = [...linkListData].reverse();
    } else {
        switch (param) {
            case "new":
                links = [...linkListData]
                    .sort(
                        (a, b) =>
                            new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime()
                    )
                    .reverse();
                break;

            case "old":
                links = [...linkListData].sort(
                    (a, b) =>
                        new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime()
                );
                break;

            case "pin":
                links = [...linkListData].filter(
                    (link) => link.pinned === true
                );
                break;

            case "private":
                links = [...linkListData].filter(
                    (link) => link.public === false
                );
                break;

            case "public":
                links = [...linkListData].filter(
                    (link) => link.public === true
                );
                break;

            case "az":
                links = [...linkListData].sort((a, b) =>
                    a.title.localeCompare(b.title)
                );
                break;

            case "za":
                links = [...linkListData]
                    .sort((a, b) => a.title.localeCompare(b.title))
                    .reverse();
                break;

            default:
                links = [...linkListData].reverse();
                break;
        }
    }

    const linkList = links.map(link => {
        return (
            <LinkItem key={link._id} id_author={link.id_author} id={link._id} pinned={link.pinned} title={link.title} slug={link.slug || "/"} urlLink={link.link} image={link.image} createdAt={link.createdAt} public={link.public} />
        )
    })

    return (
        <div className="list-link">
            {linkList.length ? linkList : "Không có link"}
        </div>
    );
}

export default ListLink;