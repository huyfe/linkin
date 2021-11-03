import React from "react";
import {
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
  MDBDropdownLink,
} from "mdb-react-ui-kit";
import "./style.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

CategoryLinkItem.propTypes = {};

function CategoryLinkItem(props) {
  return (
    <div className="d-flex categoryLinkItem">
      <div className="categoryLinkItem__img">
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="../images/Categories/ux-ui.jpg" />
        </a>
      </div>
      <div className="d-flex flex-column justify-content-between categoryLinkItem__desc">
        <div className="d-flex align-items-center categoryLinkItem__title">
          <h2>Nguyên tắc thiết kế cơ bản</h2>
          <MDBDropdown dropright className="categoryLinkItem__dropdown">
            <MDBDropdownToggle className="categoryLinkItem__btn">
              <span className="icon-more-horizontal"></span>
            </MDBDropdownToggle>
            <MDBDropdownMenu className="categoryLinkItem__dropdown--menu">
              <MDBDropdownItem>
                <MDBDropdownLink
                  className="categoryLinkItem__dropdown--link"
                  href="#"
                >
                  <span className="icon-edit-basic"></span> Sửa
                </MDBDropdownLink>
              </MDBDropdownItem>
              <MDBDropdownItem>
                <MDBDropdownLink
                  className="categoryLinkItem__dropdown--link"
                  href="#"
                >
                  <i className="fal fa-trash-alt"></i> Xóa
                </MDBDropdownLink>
              </MDBDropdownItem>
              <MDBDropdownItem>
                <MDBDropdownLink
                  className="categoryLinkItem__dropdown--link"
                  href="#"
                >
                  <span className="icon-earth"></span> Công khai
                </MDBDropdownLink>
              </MDBDropdownItem>
              <MDBDropdownItem>
                <MDBDropdownLink
                  className="categoryLinkItem__dropdown--link"
                  href="#"
                >
                  <span className="icon-lock"></span> Riêng tư
                </MDBDropdownLink>
              </MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
        </div>
        <div className="d-flex align-items-center categoryLinkItem__link">
          <input
            type="text"
            defaultValue="https://www.facebook.com/"
            readOnly
          />
          <button>
            <span className="icon-copy"></span>
          </button>
          <button>
            <span className="icon-pin"></span>
          </button>
        </div>
        <div className="categoryLinkItem__date">
          <h3>
            <span className="icon-earth"></span>Ngày 1/10/2021
          </h3>
        </div>
      </div>
    </div>
  );
}

export default CategoryLinkItem;
