import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { Link } from 'react-router-dom';

ItemNotificationGroup.propTypes = {
    image: PropTypes.string,
    numbers: PropTypes.string,
    href: PropTypes.string,
};

function ItemNotificationGroup(props) {
    return (
        <div class="notification__group">
            <Link to={props.href} style={{ backgroundImage: `url("${props.image}")` }} className="notification__background">
                <h3>{props.numbers}</h3>
            </Link>
        </div>
    );
}

export default ItemNotificationGroup;