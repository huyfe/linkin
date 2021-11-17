import React from 'react';
import PropTypes from 'prop-types';

import ItemMyGroupComponent from '../ItemMyGroupComponent/index';
import './style.scss';


MyGroupComponent.propTypes = {

};

function MyGroupComponent(props) {

  const listMyGroupData = [
    {
      groupName: "Cộng Đồng Front-End",
      image: 'images/Groups/image_join_four.jpg',
      numbers: "500",
      dateJoin: "12/12/2022",
      href: "/",
    },
    {
      groupName: "Cộng Đồng JavaScrpit",
      image: 'images/Groups/image_join_three.jpg',
      numbers: "1200",
      dateJoin: "12/12/2022",
      href: "/",
    },
    {
      groupName: "Cộng Đồng Html/Css",
      image: 'images/Groups/image_join_five.jpg',
      numbers: "2100",
      dateJoin: "12/12/2022",
      href: "/",
    },
    {
      groupName: "Cộng Đồng Java BackEnd",
      image: 'images/Groups/image_join_six.jpg',
      numbers: "300",
      dateJoin: "12/12/2022",
      href: "/",
    }, {
      groupName: "Cộng Đồng Front-End",
      image: 'images/Groups/image_join_seven.jpg',
      numbers: "700",
      dateJoin: "12/12/2022",
      href: "/",
    },
    {
      groupName: "Cộng Đồng Front-End",
      image: 'images/Groups/image_join_eight.jpg',
      numbers: "1000",
      dateJoin: "12/12/2022",
      href: "/",
    }, {
      groupName: "Cộng Đồng Front-End",
      image: 'images/Groups/image_join_night.jpg',
      numbers: "2200",
      dateJoin: "12/12/2022",
      href: "/",
    }, {
      groupName: "Cộng Đồng Nodejs",
      image: 'images/Groups/image_join_twleve.jpg',
      numbers: "12200",
      dateJoin: "12/12/2022",
      href: "/",
    },
    {
      groupName: "Cộng Đồng Front-End",
      image: 'images/Groups/image_join_one.jpg',
      numbers: "11100",
      dateJoin: "12/12/2022",
      href: "/",
    }

  ];
  const iconPlus = "icon-plus";
  const listMyGroup = listMyGroupData.map(group => {
    return (
      <div className="col-lg-6">
        <ItemMyGroupComponent groupName={group.groupName} image={group.image} numbers={group.numbers} dateJoin={group.dateJoin} href={group.href}></ItemMyGroupComponent>
      </div>
    );
  });

  return (
    <div className="list-my-group">
      <h3>Nhóm của bạn</h3>
      <div className="row no-gutters">
        {listMyGroup}
      </div>
    </div>
  );
}

export default MyGroupComponent;