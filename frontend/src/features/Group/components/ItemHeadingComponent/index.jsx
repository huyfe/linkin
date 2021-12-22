import React, { useEffect, useState } from 'react';
import TimelineGroup from '../TimelineComponent';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import './style.scss';
import { Link } from 'react-router-dom';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem, MDBDropdownLink } from 'mdb-react-ui-kit';
import SidebarGroupLinkComponent from '../SidebarGroupLinkComponent';
import { update } from '../../groupSlice';
import groupApi from './../../../../api/groupApi';
import { useParams } from "react-router-dom";



function ItemHeadingComponent(props) {
    // đếm numbers member tham gia
    // const numbers = props.members.length;

    //   // dùng để lấy dữ liệu từ state
    //   const listGroupHeadingData  = useSelector(state => state.group);


    const { slug } = useParams();
    const dispatch = useDispatch();
    console.log(slug);
    const [Groups, setGroups] = useState([]);

    useEffect(() => {
        const fetcGroup = async () => {
            const groupList = await groupApi.getGroupBySlug(slug);
           
            dispatch(update(groupList.data));
            setGroups(groupList.data);
        }
        fetcGroup();
    }, []);
    console.log(Groups.image);

    return (
      
        <div className="group__heading">
            <div className="group__theme ">

            <Link to={`/groups/${Groups.slug}`} >
                <img className="img__thumbail" src={Groups.image} />
            </Link>
    
            </div>
          
            <div className="row ">
                <div className="timeline__heading col-lg-8 dark">
                    <div className="box__heading">
                        {/* <div className="title ">
                            <h3 className="title__heading"><Link to={`/groups/${Groups.slug}`}>{Groups.title}</Link></h3>
                            <div className="item__heading">
                                <h4 className="subTitle__heading">
                                    {group.iconEarth && <span className={"icon " + group.iconEarth}></span>}
                                    {group.subTitleHeading}
                                    <span className="member__title"> - {`/groups/${group.members}`}k thành viên</span>
                                </h4>
                            </div>
                        </div> */}
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
                        <TimelineGroup />
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