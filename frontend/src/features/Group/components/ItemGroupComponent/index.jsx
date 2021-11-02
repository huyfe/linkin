import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { Link } from 'react-router-dom';
ItemGroupComponent.propTypes = {

};

function ItemGroupComponent(props) {
    return (
        <section id="itemGroupComponent">
            <div className="box__follow">
                <div class="card">
                    <Link to={props.href} >
                        <img class="card-img-top" src={props.image} />
                    </Link>
                    <div class="card-body">
                        <h5 class="card-title">{props.title}</h5>
                        <div className="box__title">
                            <h6 class="card-subtitle mb-2">{props.numbers}</h6>
                            <h6 class="card-subtitle mb-2">{props.countLink}</h6>
                        </div>
                        <div className="box__image_text">
                            <img class="image__follow" src="images/Groups/image_box_follow.png" />
                            <img class="image__follow" src="images/Groups/image_box_follow.png" />
                            <img class="image__follow" src="images/Groups/image_box_follow.png" />
                            <p class="card-text">Thai Loan, Kieu Ninh và 10 người khác bạn theo dõi cũng tham gia nhóm này</p>
                        </div>
                        <button className="item__button">Tham gia nhóm<span>{props.name}</span> {props.iconPlus && <span className={"icon " + props.iconPlus}></span>}</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ItemGroupComponent;