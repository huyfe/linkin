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
import CopyToClipboard from "react-copy-to-clipboard";
import { useDispatch } from "react-redux";
import categoriesApi from "../../../../api/categoriesApi";
import { updateCatOfUser } from "../../categoriesUserSlice";

CategoryLinkItem.propTypes = {
  linkItem: PropTypes.object.isRequired,
  idCat: PropTypes.number,
};

CategoryLinkItem.defaultProps = {
  idCat: null,
};

function CategoryLinkItem({ linkItem, idCat }) {
  const dispatch = useDispatch();

  const handleLinkCat = async (idCat, idLink) => {
    let { data } = await categoriesApi.updateLinks(idCat, idLink);
    dispatch(updateCatOfUser(data));
  };

  return (
    <div className="d-flex categoryLinkItem">
      <div className="categoryLinkItem__img">
        <a href={linkItem.link} title={linkItem.title} target="_blank" rel="noopener noreferrer">
          <img src={linkItem.image} />
        </a>
      </div>
      <div className="d-flex flex-column justify-content-between categoryLinkItem__desc">
        <div className="d-flex align-items-center categoryLinkItem__title">
          <h2>{linkItem.title}</h2>
          {/* <MDBDropdown dropright className="categoryLinkItem__dropdown">
            <MDBDropdownToggle className="categoryLinkItem__btn">
              <span className="icon-more-horizontal"></span>
            </MDBDropdownToggle>
            <MDBDropdownMenu className="categoryLinkItem__dropdown--menu">
              <MDBDropdownItem>
                <MDBDropdownLink
                  className="categoryLinkItem__dropdown--link"
                  tag="button"
                  type="button"
                >
                  <span className="icon-edit-basic"></span> Sửa
                </MDBDropdownLink>
              </MDBDropdownItem>
              <MDBDropdownItem>
                <MDBDropdownLink
                  className="categoryLinkItem__dropdown--link"
                  tag="button"
                  type="button"
                >
                  <i className="fal fa-trash-alt"></i> Xóa
                </MDBDropdownLink>
              </MDBDropdownItem>
              <MDBDropdownItem>
                <MDBDropdownLink
                  className="categoryLinkItem__dropdown--link"
                  tag="button"
                  type="button"
                >
                  <span className="icon-earth"></span> Công khai
                </MDBDropdownLink>
              </MDBDropdownItem>
              <MDBDropdownItem>
                <MDBDropdownLink
                  className="categoryLinkItem__dropdown--link"
                  tag="button"
                  type="button"
                >
                  <span className="icon-lock"></span> Riêng tư
                </MDBDropdownLink>
              </MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown> */}
        </div>
        <div className="d-flex align-items-center categoryLinkItem__link">
          <input type="text" defaultValue={linkItem.link} readOnly />
          <button>
            <CopyToClipboard text={linkItem.link}>
              <span className="icon-copy"></span>
            </CopyToClipboard>
          </button>
          {/* <button>
            <span className="icon-pin"></span>
          </button> */}
          <button onClick={() => handleLinkCat(idCat, linkItem._id)}>
            <i title="Gỡ khỏi danh mục" className="fal fa-trash"></i>
          </button>
        </div>
        <div className="categoryLinkItem__date">
          <h3>
            <span className="icon-earth"></span>
            {new Date(linkItem.createdAt).toLocaleDateString("vi-VN")}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default CategoryLinkItem;
