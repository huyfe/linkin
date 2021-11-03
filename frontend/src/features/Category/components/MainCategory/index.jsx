import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import SearchCategory from '../SearchCategory';
import ListCategory from '../ListCategory';

MainCategory.propTypes = {
    
};

function MainCategory(props) {
    return (
        <main className="mainCategory">
            {/* Truyền title cho component SearchCategory */}
            <SearchCategory title={"Danh mục"} />
            <ListCategory />
        </main>
    );
}

export default MainCategory;