import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import Item from '../../../../components/Item/index';

GroupJoinComponent.propTypes = {

};

function GroupJoinComponent(props) {

    const listGroupJoinData = [
        { image: 'https://4.bp.blogspot.com/-nGwGW1Gh-BQ/Wsc7rGkMrTI/AAAAAAAAASc/1mKSP11kxMcW2pInObcG2OKRY87cEtK-QCLcBGAs/s1600/2222.jpg', href: "/", name: "Hội U30 U40 Độc thân sau ly hôn" },
        { image: 'http://baokhanhhoa.vn/dataimages/201807/original/images5336320_htdct.jpg', href: "/", name: "Hội thánh đức chúa trời" },
        { image: 'https://kenh14cdn.com/2018/10/5/46d650a200000578-5132387-image-a-21512043861667-1512117627759-15387170371651677127658.jpg', href: "/", name: "Hội những người tin trái đất hình phẳng" }
    ];
    const listGroupJoin = listGroupJoinData.map(group => {
        return (
            <Item image={group.image} name={group.name} href={group.href}></Item>
        );
    });

    return (
        <div className="group-sidebar-join">
            <div className="box__title">
                <h3>Nhóm bạn tham gia</h3>
                <span className="icon-more-horizontal"></span>
            </div>
            <ul>
                {listGroupJoin}
            </ul>
            <div className="btn-create">
            </div>
        </div>
    );
}

export default GroupJoinComponent;