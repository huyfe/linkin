import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { Link } from 'react-router-dom';
ItemGroupFollowComponent.propTypes = {
    // friendMembers: PropTypes.String,
    // userImage: PropTypes.String,
    // name: PropTypes.String,
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
                        <div className="item__follow">
                            <div className="box__image">
                                {props.friendMembers.map(friendMember => {
                                    return (
                                        <>
                                            <img className="image__follow" src={friendMember.userImage} />

                                        </>
                                    )
                                })}
                            </div>
                            <div className="box__content">
                                {props.friendMembers.map(friendMember => {
                                    return (
                                        <>
                                            <p className="card-text">{friendMember.name}</p>
                                        </>
                                    )
                                })}
                            </div>
                        </div>

                        <button className=" btn item__button">Tham gia nhóm<span>{props.name}</span> {props.iconPlus && <span className={"icon " + props.iconPlus}></span>}</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ItemGroupFollowComponent;