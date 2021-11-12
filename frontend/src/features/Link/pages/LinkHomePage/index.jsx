import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import linkApi from '../../../../api/linkApi';
import { update } from '../../linkSlice';
import AsideRight from './../../../../components/AsideRight/index';
import FilterLink from './../../components/FilterLink/index';
import SearchLink from './../../components/SearchLink/index';
import ListLink from './../../components/ListLink/index';


LinkHomePage.propTypes = {

};

function LinkHomePage(props) {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchLink = async () => {
            const linkList = await linkApi.getAll();
            dispatch(update(linkList.data));
        }
        fetchLink();


    }, []);

    const links = useSelector(state => state.link);
    console.log(links);

    console.log("Render");
    return (
        <main class="link-homepage">
            <div className="container-fluid">
                <div className="row gx-0">
                    <div className="col-lg-3">
                        <FilterLink />
                    </div>
                    <div className="col-lg-6">
                        <main className="main-link">
                            <SearchLink title="Tất cả Link" />
                            <ListLink />
                        </main>
                    </div>
                    <div className="col-lg-3">
                        <AsideRight />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default LinkHomePage;