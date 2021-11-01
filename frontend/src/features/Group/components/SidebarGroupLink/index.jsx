import React from 'react'
import './style.scss';


function SidebarGroupLink() {
    return (

        <aside id="sidebarGroupLink"  className="sidebar__link">
            <div className="box__sibarleft">
                <div className="group__pin">
                    <div className="box__title">
                        <h4 className="title">Danh mục ghim của nhóm</h4>
                        <span className="icon-edit-basic"></span>
                    </div>
                    <ul className="list__item_group">
                        <li className="item__group">
                            <img src="images/Groups/image_group_one.png" />
                            <a href="#">Cộng đồng Nodejs</a>
                        </li>
                        <li className="item__group">
                            <img src="images/Groups/image_group_two.png" />
                            <a href="#">Cộng đồng Htm/Css/Javascrpit</a>

                        </li>
                        <li className="item__group">
                            <img src="images/Groups/image_group_three.png" />
                            <a href="#">Cộng đồng Front-end</a>
                        </li>
                    </ul>
                    <hr className="border__hr" />
                </div>
                <div className="group__join">
                    <div className="box__title">
                        <h4 className="title">Link ghim của nhóm</h4>
                    </div>
                    <ul className="list__item_group">
                        <li className="item__group">
                            <a href="#">Cộng đồng Reactjs</a>
                        </li>
                        
                    </ul>
                </div>
                <div className="group__follower">

                </div>
            </div>
        </aside>

    )
}

export default SidebarGroupLink;