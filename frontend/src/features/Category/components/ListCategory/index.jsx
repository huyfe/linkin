import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import CategoryItem from "../CategoryItem";

ListCategory.propTypes = {
  listCategories: PropTypes.array,
};

ListCategory.defaultProps = {
  listCategories: [],
};

function ListCategory({ listCategories }) {
  return (
    <div className="listCategory">
      {listCategories.map((category) => (
        <div className="listCategory__item" key={category._id} >
          <CategoryItem categoryItem={category} />
        </div>
      ))}
    </div>
  );
}

export default ListCategory;
