import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import Item from '../Item/index';

GroupSideBar.propTypes = {

};

function GroupSideBar(props) {

    const listGroupData = [
        { image: 'https://banner2.cleanpng.com/20180820/rik/kisspng-website-development-javascript-html5-css3-cascadin-appload-comprehensive-software-and-mobile-app-de-5b7b834dcf68a2.0627599615348211978496.jpg', href: "/", name: "Cộng đồng Frontend Developer Việt Nam" },
        { image: 'http://baokhanhhoa.vn/dataimages/201807/original/images5336320_htdct.jpg', href: "/", name: "Hội thánh đức chúa trời" },
        { image: 'https://kenh14cdn.com/2018/10/5/46d650a200000578-5132387-image-a-21512043861667-1512117627759-15387170371651677127658.jpg', href: "/", name: "Hội những người tin trái đất hình phẳng" }
    ];
    const listGroup = listGroupData.map(group => {
        return (
            <Item image={group.image} name={group.name} href={group.href}></Item>
        );
    });

    return (
        <div className="group-sidebar">
            <h3>Nhóm đã tham gia</h3>
            <ul>
                {listGroup}
            </ul>
            <div className="btn-create">
                <button className="btn btn-primary bg-white text-primary">Tạo nhóm</button>
            </div>
        </div>
    );
}

export default GroupSideBar;