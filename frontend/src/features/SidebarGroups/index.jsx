import React from 'react'

import './style.scss';
// import '../../images/Groups';
export default function SidebarGroupsJoin() {
    return (

        <section id="sidebarGroups" className="col-lg-3" >
            <div className="box__group">
                <div class="input-group rounded">
                    <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
                    aria-describedby="search-addon" />
                    <span class="input-group-text border-0" id="search-addon">
                        <i class="fas fa-search"></i>
                    </span>
                </div>
                <h4 className="title">Nhóm bạn quản lí</h4>
                <ul className="list__item_group">
                    <li className="item__group">
                        <img src="images/Groups/image_group_one.png" alt="image_group_one" />
                        <a href="#">Cộng đồng Nodejs</a>
                    </li>
                    <li className="item__group">
                    <img src="images/Groups/image_group_two.png" alt="image_group_one" />
                        <a href="#">Cộng đồng Htm/Css/Javascrpit</a>
                      
                    </li>
                    <li className="item__group">
                        <img src="images/Groups/image_group_three.png" alt="image_group_one" />
                        <a href="#">Cộng đồng Front-end</a>
                    </li>
                </ul>
                <button className="item__button">
                    <a href="#">Tạo nhóm mới</a>
                    <img src="images/Groups/icon_plus.svg" alt="icon_plus" />
                </button>
            </div>
        </section>

    )
}