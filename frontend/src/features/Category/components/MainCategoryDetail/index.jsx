import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import SearchCategory from '../SearchCategory';
import ListCategoryLink from '../ListCategoryLink';

MainCategoryDetail.propTypes = {
    
};

function MainCategoryDetail(props) {
    return (
        <main className="mainCategory">
            {/* Truyền title cho component SearchCategory */}
            <SearchCategory title={"Link"} showBtnBack />
            <ListCategoryLink />
        </main>
    );
}

export default MainCategoryDetail;