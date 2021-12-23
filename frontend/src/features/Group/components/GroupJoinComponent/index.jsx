import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import Item from '../../../../components/Item/index';

GroupJoinComponent.propTypes = {

};

function GroupJoinComponent(props) {

    const listGroupJoinData = [
        { image: 'https://yeubepviet.com/wp-content/uploads/2020/11/Cac-mon-an-ngon-hang-ngay.jpg', href: "/", name: "Chia sẽ cách học nấu ăn ngon mỗi ngày" },
        { image: 'https://i2.wp.com/lucloi.vn/wp-content/uploads/2021/08/maxresdefault-1.jpg?fit=1280%2C720&ssl=1', href: "/", name: "Bộ tộc Mixi" },
        { image: 'https://kenh14cdn.com/2018/10/5/46d650a200000578-5132387-image-a-21512043861667-1512117627759-15387170371651677127658.jpg', href: "/", name: "Hội những người tin trái đất hình phẳng" },
        { image: 'https://nongdanit.info/wp-content/uploads/2016/10/javascript.jpg', href: "/", name: "Hỏi đáp JavaScript VN" },
        { image: 'https://scontent.fsgn8-2.fna.fbcdn.net/v/t1.6435-9/p600x600/186297466_3807097746005981_5652227086572103268_n.png.jpg?_nc_cat=100&ccb=1-5&_nc_sid=8631f5&_nc_ohc=REvxNQPNXbQAX-zBEX2&_nc_ht=scontent.fsgn8-2.fna&oh=00_AT_46uNBi-PKUvquM5Od3lLcSPsp-hFo9M7SGhP4BmFNdw&oe=61E797D0', href: "/", name: "Cộng đồng Front-End CFD Circle" }
        
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
        </div>
    );
}

export default GroupJoinComponent;