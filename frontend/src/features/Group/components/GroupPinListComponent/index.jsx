import React from 'react';
import PropTypes from 'prop-types';
import Item from '../../../../components/Item/index';
import './style.scss';

GroupPinListComponent.propTypes = {

};

function GroupPinListComponent(props) {

    const listGroupPinListData = [
        { image: 'https://tuhoclaptrinh.edu.vn/upload/post/16/10/18/tu-hoc-lap-trinh-html-va-css-462993.jpg', href: "/", name: "Cộng đồng Frontend Developer Việt Nam" },
        { image: 'https://aventislearning.com/wp-content/uploads/2020/06/Node.js.png', href: "/", name: "Cộng đồng Nodejs" },
        { image: 'https://laptrinhcanban.com/python/nhap-mon-lap-trinh-python/gioi-thieu-python/python-la-gi/Python.jpg', href: "/", name: "Cộng đồng Backend Developer" },
        { image: 'http://thantienvxp.xtgem.com/images/lam-web/html_css.jpg', href: "/", name: "Cộng đồng Html/Css" },
        { image: 'https://4.bp.blogspot.com/-TpWgTSwHo3o/U9XWrRaPprI/AAAAAAAAAKo/GexGokSkXbU/s1600/javascript.png', href: "/", name: "Cộng đồng Javascrpit" }
    ];
    const listGroupPin = listGroupPinListData.map(group => {
        return (
            <Item image={group.image} name={group.name} href={group.href}></Item>
        );
    });

    return (
        <div className="group-pin-list">
            <h3>Danh mục ghim của nhóm</h3>
            <ul>
                {listGroupPin}
            </ul>
        </div>
    );
}

export default GroupPinListComponent;