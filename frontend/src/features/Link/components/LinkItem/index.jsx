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

LinkItem.propTypes = {
  title: PropTypes.string,
  urlPost: PropTypes.string,
  urlLink: PropTypes.string,
  image: PropTypes.string,
  date: PropTypes.string,
  public: PropTypes.bool,
};

function LinkItem(props) {
  return (
    <div className="d-flex linkItem">
      <div className="linkItem__img">
        <Link to={props.urlPost}>
          <img src={props.image} />
        </Link>
      </div>
      <div className="d-flex flex-column justify-content-between linkItem__desc">
        <div className="d-flex align-items-center linkItem__title">
          <h2>
            <Link to={props.urlPost} style={{ color: '#000' }}>
              {props.title}
            </Link>
          </h2>
          <MDBDropdown dropright className="linkItem__dropdown">
            <MDBDropdownToggle className="linkItem__btn">
              <span className="icon-more-horizontal"></span>
            </MDBDropdownToggle>
            <MDBDropdownMenu className="linkItem__dropdown--menu">
              <MDBDropdownItem>
                <MDBDropdownLink className="linkItem__dropdown--link" href="#">
                  <span className="icon-edit-basic"></span> Sửa
                </MDBDropdownLink>
              </MDBDropdownItem>
              <MDBDropdownItem>
                <MDBDropdownLink
                  className="linkItem__dropdown--link"
                  href="#"
                >
                  <i className="fal fa-trash-alt"></i> Xóa
                </MDBDropdownLink>
              </MDBDropdownItem>
              <MDBDropdownItem>
                <MDBDropdownLink
                  className="linkItem__dropdown--link"
                  href="#"
                >
                  <span className="icon-earth"></span> Công khai
                </MDBDropdownLink>
              </MDBDropdownItem>
              <MDBDropdownItem>
                <MDBDropdownLink
                  className="linkItem__dropdown--link"
                  href="#"
                >
                  <span className="icon-lock"></span> Riêng tư
                </MDBDropdownLink>
              </MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
        </div>
        <div className="d-flex align-items-center linkItem__link">
          <input
            type="text"
            defaultValue={props.urlLink}
            readOnly
          />
          <button>
            <span className="icon-copy"></span>
          </button>
          <button>
            <span className="icon-pin"></span>
          </button>
        </div>
        <div className="linkItem__date">
          <h3>
            {props.public ? <span className="icon-lock"></span> : <span className="icon-earth"></span>}
            {props.date}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default LinkItem;
