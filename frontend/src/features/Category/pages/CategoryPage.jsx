import React from "react";
import AsideRight from "../../../components/AsideRight";
import FilterCategory from "../components/FilterCategory";
import MainCategory from "../components/MainCategory";
import PropTypes from "prop-types";
import { Switch } from "react-router-dom";
import MainCategoryDetail from "../components/MainCategoryDetail";

CategoryPage.propTypes = {};

function CategoryPage(props) {
  return (
    <section id="categoryPage">
      <div className="container-fluid">
        <div className="row no-gutters">
          <div className="col-lg-3 p-0">
            <FilterCategory />
          </div>
          <div className="col-lg-6 p-0">
            {/* <Switch></Switch> */}
            <MainCategory />
            <MainCategoryDetail/>
          </div>
          <div className="col-lg-3 p-0">
            <AsideRight />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CategoryPage;
