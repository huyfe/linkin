import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { Link } from 'react-router-dom';

Category.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    href: PropTypes.string,
};

function Category(props) {
    return (
        <div class="category">
            <Link to={props.href} style={{ backgroundImage: `url("${props.image}")` }} className="category__background">
                <h3>{props.name}</h3>
            </Link>
        </div>
    );
}

export default Category;