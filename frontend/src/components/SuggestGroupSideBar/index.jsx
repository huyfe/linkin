import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import Item from '../Item/index';

SuggestGroupSideBar.propTypes = {

};

function SuggestGroupSideBar(props) {

    const listGroupData = [
        { image: 'https://w1.pngwing.com/pngs/885/534/png-transparent-green-grass-nodejs-javascript-react-mean-angularjs-logo-symbol-thumbnail.png', href: "/", name: "NodeJS Việt Nam" },
        { image: 'https://infinapps.com/wp-content/uploads/2018/10/mongodb-logo.png', href: "/", name: "MongoDB Atlas" },
        { image: 'https://cdn.worldvectorlogo.com/logos/socket-io.svg', href: "/", name: "Socket In A Nutsell" }
    ];
    const listGroup = listGroupData.map(group => {
        return (
            <Item image={group.image} name={group.name} href={group.href}></Item>
        );
    });

    return (
        <div className="suggest-group-sidebar">
            <h3>Nhóm được đề xuất</h3>
            <ul>
                {listGroup}
            </ul>
        </div>
    );
}

export default SuggestGroupSideBar;