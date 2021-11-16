import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { Link } from 'react-router-dom';
ItemMyGroupComponent.propTypes = {

};

function ItemMyGroupComponent(props) {
    return (

        <div className="box__my__group">
            <div className="item__list__group">
                <div className="box__image">
                    <Link to={props.href} >
                        <img className="" src={props.image} />
                    </Link>
                </div>
                <div className="box__content">
                    <div className="item__title">
                        <Link to={props.href} className="group__name" >
                            {props.groupName}
                        </Link>
                    </div>
                    <div className="item__members">
                        <h6 className="item__count">{props.numbers}k người tham gia</h6>
                    </div>
                    <div className="item__date__join">
                        <p>Bạn tham gia từ {props.dateJoin}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemMyGroupComponent;