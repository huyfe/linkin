import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { MDBBtn } from 'mdb-react-ui-kit';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import ItemNotificationGroup from '../ItemNotificationGroup';

GroupNotificationComponent.propTypes = {

};

function GroupNotificationComponent(props) {
    const listGroupNotificationDataData = [
        {
            id: 1,
            name: "20",
            href: "/",
            image: "http://itplus-academy.edu.vn/upload/b0c061227df9ed11a921c1977ffddd23/images/2212/nhung-dieu-quan-trong-cua-reactjs-ban-can-biet-1.jpg"
        },
        {
            id: 2,
            numbers: "10",
            href: "/",
            image: "https://lethach.com/wp-content/uploads/2020/01/496fc001-fdcc-457a-abff-241ab71e4c1c-585x390.png"
        },
        {
            id: 3,
            numbers: "5",
            href: "/",
            image: "https://nongdanit.info/wp-content/uploads/2016/10/javascript.jpg"
        },
        {
            id: 4,
            numbers: "11",
            href: "/",
            image: "https://webcool.vn/files/TECHTALK-Avatar/2019/05/03/node-vs-react-003810cach-ket-hop-nodejs-o-back-end-voi-reactjs-tren-front-end1556818690-avatar.jpg"
        }, {
            id: 5,
            numbers: "2",
            href: "/",
            image: "http://1.bp.blogspot.com/-jloBo8gsTuE/T6i1_wpI1sI/AAAAAAAAB90/VT3kXLocIPM/s1600/logo+java.jpg"
        }, {
            id: 6,
            numbers: "4",
            href: "/",
            image: "https://i.ytimg.com/vi/B3qFFb4YdkY/hqdefault.jpg"
        }, {
            id: 7,
            numbers: "22",
            href: "/",
            image: "https://innercitytechnology.com/wp-content/uploads/2018/09/websites-html5-css.jpg"
        }
    ];

    const listGroupNotification = listGroupNotificationDataData.map(group => {
        return (
            <SplideSlide>
                <ItemNotificationGroup numbers={group.numbers} href={group.href} image={group.image}></ItemNotificationGroup>
            </SplideSlide>
        )
    });

    const options = {
        type: "slide",
        gap: 15,
        perPage: 4,
        perMove: 1,
        pagination: false,
        padding: {
            right: 100
        }
    }

    return (
        <div className="GroupNotificationComponent">
            <Splide options={options}>
                {listGroupNotification}
            </Splide>
        </div>
    );
}

export default GroupNotificationComponent;