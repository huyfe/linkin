import React from "react";
import AsideRight from "../../../components/AsideRight";
import FilterCategory from "../components/FilterCategory";
import MainCategory from "../components/MainCategory";
import PropTypes from "prop-types";
import MainCategoryDetail from "../components/MainCategoryDetail";
import { Route, Routes } from "react-router-dom";

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
            <Routes>
              <Route path="/" element={<MainCategory />} />
              <Route path="/*" element={<MainCategoryDetail/>} />
            </Routes>
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
