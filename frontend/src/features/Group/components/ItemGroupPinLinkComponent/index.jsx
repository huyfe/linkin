import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { Link } from 'react-router-dom';
ItemGroupPinLinkComponent.propTypes = {

};


function ItemGroupPinLinkComponent(props) {
    return (
        <li className="item__group__link">
            <div className="item__icon">
                <div className="item__name">
                    <button className="item__pin">{props.iconCoppy && <span className={"icon " + props.iconCoppy}></span>}</button>
                  <Link to={props.href}>
                    <span className="item__title">{props.name}</span> 
                  </Link>
                </div>
            </div>
        </li>
    );
}

export default ItemGroupPinLinkComponent;