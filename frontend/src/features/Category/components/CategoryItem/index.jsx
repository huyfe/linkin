import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

CategoryItem.propTypes = {};

function CategoryItem(props) {
  return (
    <div className="categoryItem">
      <img src="images/Categories/ux-ui.jpg" />
      <a href="#">Nguyên tắc thiết kế</a>
    </div>
  );
}

export default CategoryItem;
