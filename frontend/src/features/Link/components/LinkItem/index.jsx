import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import {
  MDBBtn, MDBModal, MDBModalDialog, MDBModalContent, MDBModalBody, MDBModalFooter, MDBModalHeader, MDBModalTitle,
  MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem, MDBDropdownLink
} from 'mdb-react-ui-kit';
import {
  MDBValidation,
  MDBInput,
  MDBCheckbox
} from 'mdb-react-ui-kit';
import "./style.scss";
import PropTypes from "prop-types";
import moment from "moment";
import { Link } from "react-router-dom";
import linkApi from "../../../../api/linkApi";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../../linkSlice";
import { update as updateLoading } from "../../../../components/LoadingComponent/loadingSlice";
import CopyToClipboard from "react-copy-to-clipboard";
import categoriesApi from "../../../../api/categoriesApi";
import { updateCatOfUser } from "../../../Category/categoriesUserSlice";
import { updateLinkOfUser } from "../../../Link/linkSlice";

import ModalEditLink from '../ModalEditLink/index';

LinkItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  slug: PropTypes.string,
  urlLink: PropTypes.string,
  image: PropTypes.string,
  date: PropTypes.string,
  public: PropTypes.bool,
};
LinkItem.defaultProps = {
  id: null,
  title: "My link",
  slug: "/",
  urlLink: "https://www.facebook.com/ybx1802",
  image:
    "https://images.unsplash.com/photo-1514315384763-ba401779410f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=383&q=80",
};

function LinkItem(props) {
  // State
  const dispatch = useDispatch();
  const [showModalEdit, setShowModalEdit] = useState(false);

  const linkItem = {
    id: props.id,
    id_author: props.id_author,
    title: props.title,
    link: props.urlLink,
    categories: props.categories,
    image: props.image,
    public: props.public,
    createdAt: props.createdAt
  };


  const listCategoriesOfUser = useSelector((state) => state.categoriesUser);

  const removeLinkItem = (id) => async (event) => {
    event.preventDefault();
    dispatch(updateLoading(100));
    const awaitRemove = await linkApi.remove(id);
    dispatch(updateLoading(101));
    showPopUp("Đã xóa thành công");

    // Update the links
    const linkList = await linkApi.getAll();
    dispatch(update(linkList.data));
  };

  const handleLinkCat = async (idCat, idLink) => {
    let { data } = await categoriesApi.updateLinks(idCat, idLink);
    dispatch(updateCatOfUser(data));
  };

  // Events
  // Events click pinned
  const onPinned = async () => {
    let { data } = await linkApi.updatePinLink(props.id);
    dispatch(updateLinkOfUser(data));
    if (!data.pinned) {
      showPopUp("Đã bỏ ghim thành công");
    }
    else {
      showPopUp("Đã ghim thành công");
    }
  }

  // Show pop up copy thành công
  const showPopUp = (message) => {
    const mess = <div className="message">{message}</div>;
    ReactDOM.render((mess), document.getElementById("popUp"));
    setTimeout(() => {
      ReactDOM.render(null, document.getElementById("popUp"));
    }, 1500);
  }

  return (
    <div className="linkItem d-flex">
      <div className="linkItem__img">
        <Link to={props.slug}>
          <img src={props.image} />
        </Link>
      </div>
      <div className="d-flex flex-column justify-content-between linkItem__desc">
        <div className="d-flex align-items-center linkItem__title">
          <h2>
            <Link to={props.slug} style={{ color: "#000" }}>
              {props.title}
            </Link>
            <div className="linkItem__status-time d-flex align-items-center my-1">
              {props.public ? (
                <span className="icon-earth"></span>
              ) : (
                <span className="icon-lock"></span>
              )}
              <span className="created-at ms-2">{moment(props.createdAt).fromNow()}</span>
            </div>
          </h2>
          {listCategoriesOfUser.length != 0 ? (
            <MDBDropdown dropright className="linkItem__dropdown">
              <MDBDropdownToggle className="linkItem__btn">
                Lưu vào danh mục
              </MDBDropdownToggle>
              <MDBDropdownMenu className="linkItem__dropdown--menu">
                {listCategoriesOfUser.map((category) => (
                  <MDBDropdownItem key={`${props.id}-${category._id}`}>
                    <MDBDropdownLink
                      className={category.id_links.includes(props.id) ? "linkItem__dropdown--link d-none" : "linkItem__dropdown--link"}
                      tag="button"
                      type="button"
                      onClick={() => handleLinkCat(category._id, props.id)}
                    >
                      {category.title}
                    </MDBDropdownLink>
                  </MDBDropdownItem>
                ))}
              </MDBDropdownMenu>
            </MDBDropdown>
          ) : (
            <></>
          )}
        </div>
        <div className="d-flex align-items-center linkItem__link">
          <a
            href={props.urlLink}
            title={props.urlLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {props.urlLink}
          </a>
          <button onClick={() => showPopUp("Đã sao chép vào bộ nhớ tạm")} class="bg-transparent">
            <CopyToClipboard text={props.urlLink}>
              <span className="icon-copy"></span>
            </CopyToClipboard>
          </button>
          <button class="bg-transparent" onClick={() => onPinned()}>
            <span className={props.pinned ? "icon-pin text-primary" : "icon-pin"}></span>
          </button>
          <button class="bg-transparent" onClick={() => setShowModalEdit(!showModalEdit)}>
            <span class="icon-edit-basic"></span>
          </button>

          {/* Modal Edit Link */}
          <ModalEditLink
            showModalEdit={showModalEdit}
            setShowModalEdit={setShowModalEdit}
            linkEdit={linkItem} />
          {/* End Modal Edit Link */}

          <button class="bg-transparent" onClick={removeLinkItem(props.id)}>
            <i className="fal fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default LinkItem;
