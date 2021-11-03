import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import Item from '../../../../components/Item/index';


ManagerGroupComponent.propTypes = {

};

function ManagerGroupComponent(props) {

    const listManagerGroupData = [
        { image: 'https://tuhoclaptrinh.edu.vn/upload/post/16/10/18/tu-hoc-lap-trinh-html-va-css-462993.jpg', href: "/", name: "Cộng đồng Frontend Developer Việt Nam" },
        { image: 'https://aventislearning.com/wp-content/uploads/2020/06/Node.js.png', href: "/", name: "Cộng đồng Nodejs" },
        { image: 'https://laptrinhcanban.com/python/nhap-mon-lap-trinh-python/gioi-thieu-python/python-la-gi/Python.jpg', href: "/", name: "Cộng đồng Backend Developer" }
    ];
    const listGroupManager = listManagerGroupData.map(group => {
        return (
            <Item image={group.image} name={group.name} href={group.href}></Item>
        );
    });

    return (
        <div className="group-sidebar-manager">
            <h3>Nhóm bạn quản lí</h3>
            <ul>
                {listGroupManager}
            </ul>
            <div className="btn__join">
                <button className="btn item__button">Tạo nhóm mới<i className="far fa-plus"></i></button>
            </div>
        </div>
    );
}

export default ManagerGroupComponent;