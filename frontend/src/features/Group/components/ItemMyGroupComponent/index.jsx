import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { Link } from 'react-router-dom';
import { update } from '../../groupSlice';
import groupApi from './../../../../api/groupApi';


//Nhận dữ liệu từ state trả về
ItemMyGroupComponent.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    desc: PropTypes.string,
    urlGroup: PropTypes.string,
    image: PropTypes.string,
    date: PropTypes.string,
    public: PropTypes.bool,
};

// giá trị mặc định cho của props
ItemMyGroupComponent.defaultProps = {
    members: PropTypes.array
};

function ItemMyGroupComponent(props) {
    // đếm numbers member tham gia
    const numbers = props.members.length;
    // Format date post
    const date = new Date(props.date).toLocaleDateString('vi-VN', { day: 'numeric', month: 'long', year: 'numeric' } )
    return (
        <div className="box__my__group">
            <div className="item__list__group">
                <div className="box__image">
                    <Link to={`/groups/${props.urlGroup}`} title={props.title}>
                        <img className="" src={props.image} />
                    </Link>
                </div>
                <div className="box__content">
                    <div className="item__title">
                        <Link to={`/groups/${props.urlGroup}`} title={props.title} className="group__name" >
                            {props.title}
                        </Link>
                    </div>
                    <div className="item__members">
                        <h6 className="item__count">{numbers} người tham gia</h6>
                    </div>
                    <div className="item__date__join">
                        {/* fomat date time */}
                        <p>Bạn tham gia từ {date}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemMyGroupComponent;