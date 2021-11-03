import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { useNavigate } from "react-router-dom";

SearchCategory.propTypes = {
  title: PropTypes.string,
  showBtnBack: PropTypes.bool,
};

SearchCategory.defaultProps = {
  showBtnBack: false,
};

function SearchCategory(props) {
  const navigate = useNavigate();

  return (
    <div className="d-flex align-items-center searchCategory">
      {props.showBtnBack ? <button onClick={ () => navigate(-1)}><span className="icon-back"></span></button> : ""}
      {/* title được truyền ở MainCategory và MainCategoryDetail */}
      <h1>{props.title}</h1>
      <div className="searchCategory__group">
        <label
          htmlFor="searchCategory"
          className="d-flex justify-content-end align-items-center"
        >
          <i class="fal fa-search"></i>
        </label>
        <input id="searchCategory" type="search" />
      </div>
    </div>
  );
}

export default SearchCategory;
