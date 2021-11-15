import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import SearchCategory from "../SearchCategory";
import ListCategory from "../ListCategory";
import ModalAddCategory from "../ModalAddCategory";
import { useSelector } from "react-redux";

MainCategory.propTypes = {};

function MainCategory(props) {
  const listCategoriesOfUser = useSelector(state => state.category.listCatOfUser);

  return (
    <main className="mainCategory">
      <ModalAddCategory />
      {/* Truyền title cho component SearchCategory */}
      <SearchCategory title={"Danh mục"} />
      <ListCategory listCategories={listCategoriesOfUser} />
    </main>
  );
}

export default MainCategory;
