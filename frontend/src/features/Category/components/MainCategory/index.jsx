import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./style.scss";
import SearchCategory from "../SearchCategory";
import ListCategory from "../ListCategory";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

MainCategory.propTypes = {};

function MainCategory(props) {
  const [search, setSearch] = useState("");

  function handleChangeSearch(search) {
    setSearch(search);
  }

  const listCategoriesOfUser = useSelector((state) => state.categoriesUser);

  let categories = [];

  let [searchParams] = useSearchParams();
  let param = searchParams.get("filterSort");

  if (!param) {
    categories = [...listCategoriesOfUser].reverse();
  } else {
    switch (param) {
      case "new":
        categories = [...listCategoriesOfUser]
          .sort(
            (a, b) =>
              new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime()
          )
          .reverse();
        break;

      case "old":
        categories = [...listCategoriesOfUser].sort(
          (a, b) =>
            new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime()
        );
        break;

      case "pin":
        categories = [...listCategoriesOfUser].filter(
          (category) => category.pin === true
        );
        break;

      case "private":
        categories = [...listCategoriesOfUser].filter(
          (category) => category.public === false
        );
        break;

      case "public":
        categories = [...listCategoriesOfUser].filter(
          (category) => category.public === true
        );
        break;

      case "az":
        categories = [...listCategoriesOfUser].sort((a, b) =>
          a.title.localeCompare(b.title)
        );
        break;

      case "za":
        categories = [...listCategoriesOfUser]
          .sort((a, b) => a.title.localeCompare(b.title))
          .reverse();
        break;

      default:
        categories = [...listCategoriesOfUser].reverse();
        break;
    }
  }

  if (search == "") {
    categories = [...categories];
  } else {
    categories = [...categories].filter((category) =>
      category.title.toLowerCase().includes(search.toLowerCase()) || category.slug.toLowerCase().includes(search.toLowerCase())
    );
  }

  return (
    <main className="mainCategory">
      {/* Truyền title cho component SearchCategory */}
      <SearchCategory title={"Danh mục"} searchChange={handleChangeSearch} />
      <ListCategory listCategories={categories} />
    </main>
  );
}

export default MainCategory;
