import React from 'react';
import TimelineGroup from '../TimelineComponent';
import PropTypes from 'prop-types';
import './style.scss';
import { Link } from 'react-router-dom';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem, MDBDropdownLink } from 'mdb-react-ui-kit';
import SidebarGroupLinkComponent from '../SidebarGroupLinkComponent';



ItemHeadingComponent.propTypes = {

};

function ItemHeadingComponent(props) {
    return (
        <div className="group__heading">
            <div className="group__theme ">
                <img className="img__thumbail" src={props.imageThumbnail} />
            </div>
            <div className="row ">
                <div className="timeline__heading col-lg-8 dark">
                    <div className="box__heading">
                        <div className="title ">
                            <h3 className="title__heading">{props.titleHeading}</h3>
                            <div className="item__heading">
                                <h4 className="subTitle__heading">
                                    {props.iconEarth && <span className={"icon " + props.iconEarth}></span>}
                                    {props.subTitleHeading}
                                    <span className="member__title"> - {props.members}k thành viên</span>
                                </h4>
                            </div>
                        </div>
                        <div className="search__heading">
                            <form>
                                <div className="item__search">
                                    <div className="input-search">
                                        <button className="icon__search  btn"><i className="fal fa-search"></i></button>
                                    </div>
                                    <select className="mdb-select md-form" searchable="Search here..">
                                        <option value="" disabled selected>Đã tham gia</option>
                                        <option value="1">Cộng đồng design</option>
                                        <option value="2">Cộng đồng fron-end</option>
                                        <option value="4">Cộng đồng back-end</option>
                                        <option value="5">Cộng đồng design</option>
                                        <option value="6">Cộng đồng fron-end</option>
                                        <option value="7">Cộng đồng back-end</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="timeLine__group">
                        {/* <TimelineGroup /> */}
                    </div>
                </div>
                <div className="col-lg-4">
                    <SidebarGroupLinkComponent />
                </div>
            </div>
        </div>

    );
}

export default ItemHeadingComponent;