import React from 'react';
import PropTypes from 'prop-types';
import CategoryLinkItem from '../CategoryLinkItem';

ListCategoryLink.propTypes = {
    
};

function ListCategoryLink(props) {
    return (
        <div className="listCategoryLink row">
            <div className="listCategoryLink__item col-lg-12">
                <CategoryLinkItem/>
            </div>
            <div className="listCategoryLink__item col-lg-12">
                <CategoryLinkItem/>
            </div>
            <div className="listCategoryLink__item col-lg-12">
                <CategoryLinkItem/>
            </div>
        </div>
    );
}

export default ListCategoryLink;