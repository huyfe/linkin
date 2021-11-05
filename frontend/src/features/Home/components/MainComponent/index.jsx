import React from 'react';
import AsideRight from '../../../../components/AsideRight/index';
import AsideLeft from '../../../../components/AsideLeft/index';
import CategoriesComponent from "../CategoriesComponent/index";
import NewsFeedComponent from "../NewsFeedComponent";

import './style.scss';

function MainComponent(props) {
    return (
        <div className="home-page">
            <div className="container-fluid p-0">
                <div className="row no-gutters">
                    <div className="col-lg-3">
                        <AsideLeft />
                    </div>
                    <main className="col-lg-6">
                        <div className="row">
                            <div className="col-12">
                                <CategoriesComponent></CategoriesComponent>
                                <NewsFeedComponent></NewsFeedComponent>
                            </div>
                        </div>
                    </main>
                    <div className="col-lg-3">
                        <AsideRight />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainComponent;