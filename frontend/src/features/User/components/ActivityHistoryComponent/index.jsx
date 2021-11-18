import React from 'react';
import FilterActivityHistory from './FilterActivityHistory/index';
import MainActivityHistory from './MainActivityHistory';
import AsideRight from "../../../../components/AsideRight/index";
import Header from '../../../../components/Header';

function ActivityHistoryComponent(props) {
    return (
        <div>
            <Header />
            <section id="categoryPage">
                <div className="container-fluid">
                    <div className="row no-gutters">
                        <div className="col-lg-3 p-0">
                            <FilterActivityHistory />
                        </div>
                        <div className="col-lg-6 p-0">
                            <MainActivityHistory />
                        </div>
                        <div className="col-lg-3 p-0">
                            <AsideRight />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ActivityHistoryComponent;