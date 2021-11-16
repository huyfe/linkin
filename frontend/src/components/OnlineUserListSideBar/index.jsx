import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import Item from '../Item/index';

OnlineUserListSideBar.propTypes = {

};

function OnlineUserListSideBar(props) {

    const listOnlineUserData = [
        { id: 0, image: 'https://scontent.fsgn5-1.fna.fbcdn.net/v/t1.6435-9/151987726_1038462486564270_5639548949603754567_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=174925&_nc_ohc=ITi9nKNpHmYAX-MTwPG&tn=LAqAyG5NFlXxpicb&_nc_ht=scontent.fsgn5-1.fna&oh=ae00a29dab48e34b234f115ea3855731&oe=61A79E10', href: "/", name: "Trần Quốc Huy" },
        { id: 1, image: 'https://scontent.fsgn5-1.fna.fbcdn.net/v/t1.6435-1/p320x320/193398045_3637558453136679_4904344884555574449_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=7206a8&_nc_ohc=Trh-ZhzzHjEAX-taOj4&_nc_ht=scontent.fsgn5-1.fna&oh=f8d8fbae4f61d783cd7e07814c2c3338&oe=61A701FD', href: "/", name: "Nguyễn Võ Thanh Lam" },
        { id: 2, image: 'https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.6435-9/118653102_2666543490340246_4168888207702451893_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=yjoHA6oAcbkAX_2luTu&_nc_ht=scontent.fsgn5-3.fna&oh=27e973ce9f956d17510d02dd301e1cf0&oe=61A5AFA0', href: "/", name: "Đỗ Bá Đạt" },
        { id: 3, image: 'https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.6435-9/160223436_547744709535524_8079204025404928960_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Hp_o9BTfmLIAX-zm3KF&_nc_ht=scontent.fsgn5-3.fna&oh=e033ebe4982efc404b9f2d9e11bc907f&oe=61A4911E', href: "/", name: "Võ Ngọc Hải" },
        { id: 4, image: 'https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.6435-9/107042410_274741177194243_2485314233832927801_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=-vhX2MvYL_sAX9tqXZo&_nc_ht=scontent.fsgn5-5.fna&oh=0db927f18842e2110631fe82f381bbe0&oe=61A75B9E', href: "/", name: "Lê Quốc Lập" }
    ];

    const onlineIcon = "fas fa-circle";

    const listOnlineUser = listOnlineUserData.map(user => {
        return (
            <Item key={user.id} image={user.image} name={user.name} href={user.href} icon={onlineIcon}></Item>
        );
    });

    return (
        <div className="online-user-sidebar">
            <h3>Danh sách online</h3>
            <ul>
                {listOnlineUser}
            </ul>
        </div>
    );
}

export default OnlineUserListSideBar;