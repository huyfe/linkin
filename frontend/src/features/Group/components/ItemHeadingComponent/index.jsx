import React from 'react';
import SidebarGroupLink from '../SidebarGroupLinkComponent';
import TimelineGroup from '../TimelineComponent';
import PropTypes from 'prop-types';
import './style.scss';
import { Link } from 'react-router-dom';

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
                                <div className="input-search">
                                    <label className="icon__search" htmlFor="input-search"><i className="fal fa-search"></i></label>
                                </div>
                                <div className="form-group">
                                    <select className="form-control" id="sel1" name="sellist1">
                                        <option>Đã tham gia</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                    </select>
                                </div>
                            </form>
                        </div>

                    </div>
                    <div className="timeLine__group">
                        <TimelineGroup />
                    </div>
                </div>
                <div className="col-lg-4">
                    <SidebarGroupLink />
                </div>
            </div>
        </div>

    );
}

export default ItemHeadingComponent;