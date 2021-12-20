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
import linkApi from "../../../../api/linkApi";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../../linkSlice";
import { update as updateLoading } from "../../../../components/LoadingComponent/loadingSlice";
import CopyToClipboard from "react-copy-to-clipboard";
import categoriesApi from "../../../../api/categoriesApi";
import { updateCatOfUser } from "../../../Category/categoriesUserSlice";

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
  const dispatch = useDispatch();

  const listCategoriesOfUser = useSelector((state) => state.categoriesUser);

  const removeLinkItem = (id) => async (event) => {
    event.preventDefault();
    dispatch(updateLoading(100));
    const awaitRemove = await linkApi.remove(id);
    dispatch(updateLoading(101));

    // Update the links
    const linkList = await linkApi.getAll();
    dispatch(update(linkList.data));
  };

  const handleLinkCat = async (idCat, idLink) => {
    let { data } = await categoriesApi.updateLinks(idCat, idLink);
    dispatch(updateCatOfUser(data));
  };

  return (
    <div className="d-flex linkItem">
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
          </h2>
          {/* <MDBDropdown dropright className="linkItem__dropdown">
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
                  onClick={removeLinkItem(props.id)}
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
          </MDBDropdown> */}

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
          <button>
            <CopyToClipboard text={props.urlLink}>
              <span className="icon-copy"></span>
            </CopyToClipboard>
          </button>
          <button onClick={removeLinkItem(props.id)}>
            <i className="fal fa-trash"></i>
          </button>
        </div>
        <div className="linkItem__date">
          <h3>
            {props.public ? (
              <span className="icon-lock"></span>
            ) : (
              <span className="icon-earth"></span>
            )}
            {props.date}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default LinkItem;
