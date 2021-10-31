import React from 'react'

import './style.scss';
// import '../../images/Groups';
export default function SidebarGroupsJoin() {
    return (

        <section id="sidebarGroups" className="col-lg-3" >
            <div className="box__group">
                <div class="input-search">
                    <input type="search" name="" id="input-search" placeholder="Tìm kiếm nhóm" class="reset-btn" />
                    <label class="icon__search" for="input-search"><i class="fal fa-search"></i></label>
                </div>
                <div className="group__manager">
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
                    <button className="item__button">Tạo nhóm mới<i class="far fa-plus"></i></button>
                    <hr className="border__hr" />
                </div>
                <div className="group__manager">
                    <div className="box__title">
                        <h4 className="title">Nhóm bạn tham gia</h4>
                    </div>
                    <ul className="list__item_group">
                        <li className="item__group">
                            <img src="images/Groups/image_group_four.png" alt="image_group_one" />
                            <a href="#">Cộng đồng Reactjs</a>
                        </li>
                        <li className="item__group">
                            <img src="images/Groups/image_group_five.png" alt="image_group_one" />
                            <a href="#">Cộng đồng Backend</a>

                        </li>
                        <li className="item__group">
                            <img src="images/Groups/image_group_six.png" alt="image_group_one" />
                            <a href="#">Cộng đồng Front-end</a>
                        </li>
                        <li className="item__group">
                            <img src="images/Groups/image_group_seven.png" alt="image_group_one" />
                            <a href="#">Cộng đồng J2team</a>
                        </li>
                        <li className="item__group">
                            <img src="images/Groups/image_group_eight.png" alt="image_group_one" />
                            <a href="#">Cộng đồng Angular</a>
                        </li>
                        <li className="item__group">
                            <img src="images/Groups/image_group_night.png" alt="image_group_one" />
                            <a href="#">Cộng đồng Front-end</a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

    )
}