import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

SearchCategory.propTypes = {};

function SearchCategory(props) {
  return (
    <div className="d-flex justify-content-between align-items-center searchCategory">
      <h1>Danh mục</h1>
      <div className="searchCategory__group">
        <label htmlFor="searchCategory" className="d-flex justify-content-end align-items-center">
          <i class="fal fa-search"></i>
        </label>
        <input id="searchCategory" type="search" />
      </div>
    </div>
  );
}

export default SearchCategory;
