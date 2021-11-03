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
                <div className="item__name m-0 d-flex justify-content-between align-items-center" >
                  <Link to={props.href}>
                    {props.iconCoppy && <span className={"icon " + props.iconCoppy}></span>}
                    <h6 className="item__title">{props.name}</h6> 
                  </Link>
                </div>
            </div>
        </li>
    );
}

export default ItemGroupPinLinkComponent;