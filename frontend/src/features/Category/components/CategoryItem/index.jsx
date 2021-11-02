import React from "react";
import {
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
  MDBDropdownLink,
  MDBBtn,
} from "mdb-react-ui-kit";
import PropTypes from "prop-types";
import "./style.scss";

CategoryItem.propTypes = {};

function CategoryItem(props) {
  return (
    <div className="categoryItem">
      <MDBDropdown dropright className="categoryItem__dropdown">
        <MDBDropdownToggle className="categoryItem__btn">
          <span className="icon-more-horizontal"></span>
        </MDBDropdownToggle>
        <MDBDropdownMenu className="categoryItem__dropdown--menu">
          <MDBDropdownItem>
            <MDBDropdownLink className="categoryItem__link" href="#"><span className="icon-edit-basic"></span> Sửa</MDBDropdownLink>
          </MDBDropdownItem>
          <MDBDropdownItem>
            <MDBDropdownLink className="categoryItem__link" href="#"><i className="fal fa-trash-alt"></i> Xóa</MDBDropdownLink>
          </MDBDropdownItem>
          <MDBDropdownItem>
            <MDBDropdownLink className="categoryItem__link" href="#"><span className="icon-earth"></span> Công khai</MDBDropdownLink>
          </MDBDropdownItem>
          <MDBDropdownItem>
            <MDBDropdownLink className="categoryItem__link" href="#"><span className="icon-lock"></span> Riêng tư</MDBDropdownLink>
          </MDBDropdownItem>
          <MDBDropdownItem>
            <MDBDropdownLink className="categoryItem__link" href="#"><span className="icon-pin"></span> Ghim</MDBDropdownLink>
          </MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
      <img src="images/Categories/ux-ui.jpg" />
      <a href="#">Nguyên tắc thiết kế</a>
    </div>
  );
}

export default CategoryItem;
