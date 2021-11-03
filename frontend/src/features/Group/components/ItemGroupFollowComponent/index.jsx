import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { Link } from 'react-router-dom';
ItemGroupFollowComponent.propTypes = {

};

function ItemGroupFollowComponent(props) {
    return (
        <section id="itemGroupComponent">
            <div className="box__follow">
                <div className="card">
                    <Link to={props.href} >
                        <img className="card-img-top" src={props.image} />
                    </Link>
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <div className="box__title">
                            <h6 className="card-subtitle mb-2">{props.numbers}k Theo dõi</h6>
                            <h6 className="card-subtitle mb-2">{props.countLink}k Copy link</h6>
                        </div>
                        <div className="box__image_text">
                            <img className="image__follow" src="images/Groups/image_box_follow.png" />
                            <img className="image__follow" src="images/Groups/image_box_follow.png" />
                            <img className="image__follow" src="images/Groups/image_box_follow.png" />
                            <p className="card-text">Thai Loan, Kieu Ninh và 10 người khác bạn theo dõi cũng tham gia nhóm này</p>
                        </div>
                        <button className=" btn item__button">Tham gia nhóm<span>{props.name}</span> {props.iconPlus && <span className={"icon " + props.iconPlus}></span>}</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ItemGroupFollowComponent;