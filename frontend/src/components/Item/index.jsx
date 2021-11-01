import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { Link } from 'react-router-dom';
Item.propTypes = {

};

function Item(props) {
    return (
        <li className="item">
            <Link to={props.href} className="d-flex align-items-center">
                <div className="item__image">
                    <img src={props.image} alt="" />
                </div>
                <p className="item__name m-0 d-flex justify-content-between align-items-center" ><span>{props.name}</span> {props.icon && <span className={"icon " + props.icon}></span>}</p>
            </Link>
        </li>
    );
}

export default Item;