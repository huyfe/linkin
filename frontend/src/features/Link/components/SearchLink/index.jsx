import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { useNavigate } from "react-router-dom";

SearchLink.propTypes = {
  title: PropTypes.string,
  showBtnBack: PropTypes.bool,
};

SearchLink.defaultProps = {
  showBtnBack: false,
};

function SearchLink(props) {
  const navigate = useNavigate();

  return (
    <div className="d-flex align-items-center searchLink">
      {props.showBtnBack ? <button onClick={() => navigate(-1)}><span className="icon-back"></span></button> : ""}
      {/* title được truyền ở MainCategory và MainCategoryDetail */}
      <h1>{props.title}</h1>
      <div className="searchLink__group">
        <label
          htmlFor="searchLink"
          className="d-flex justify-content-end align-items-center"
        >
          <i className="fal fa-search"></i>
        </label>
        <input id="searchLink" type="search" />
      </div>
    </div>
  );
}

export default SearchLink;
