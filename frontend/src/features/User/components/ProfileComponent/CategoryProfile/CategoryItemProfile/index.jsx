import React from "react";
import {
    MDBDropdown,
    MDBDropdownMenu,
    MDBDropdownToggle,
    MDBDropdownItem,
    MDBDropdownLink,
} from "mdb-react-ui-kit";
import "./style.scss";
import { Link } from "react-router-dom";

function CategoryItemProfile(props) {
    return (
        <div className="categoryItemProfile">
            <MDBDropdown dropright className="categoryItemProfile__dropdown">
                <MDBDropdownToggle className="categoryItemProfile__btn">
                    <span className="icon-more-horizontal"></span>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="categoryItemProfile__dropdown--menu">
                    <MDBDropdownItem>
                        <MDBDropdownLink className="categoryItemProfile__link" href="#">
                            <span className="icon-edit-basic"></span> Sửa
                        </MDBDropdownLink>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                        <MDBDropdownLink className="categoryItemProfile__link" href="#">
                            <i className="fal fa-trash-alt"></i> Xóa
                        </MDBDropdownLink>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                        <MDBDropdownLink className="categoryItemProfile__link" href="#">
                            <span className="icon-earth"></span> Công khai
                        </MDBDropdownLink>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                        <MDBDropdownLink className="categoryItemProfile__link" href="#">
                            <span className="icon-lock"></span> Riêng tư
                        </MDBDropdownLink>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                        <MDBDropdownLink className="categoryItemProfile__link" href="#">
                            <span className="icon-pin"></span> Ghim
                        </MDBDropdownLink>
                    </MDBDropdownItem>
                </MDBDropdownMenu>
            </MDBDropdown>
            <div className="categoryItemProfile__img">
                <Link to="slug">
                    <img src="/images/Categories/ux-ui.jpg" />
                </Link>
            </div>
            <Link to="slug">Thiết kế UI/ux</Link>
        </div>
    );
}

export default CategoryItemProfile;