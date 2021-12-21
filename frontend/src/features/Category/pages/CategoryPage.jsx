import React from "react";
import FilterCategory from "../components/FilterCategory";
import AsideRight from "../../../components/AsideRight";
import MainCategory from "../components/MainCategory";
import PropTypes from "prop-types";
import MainCategoryDetail from "../components/MainCategoryDetail";
import { Route, Routes } from "react-router-dom";

CategoryPage.propTypes = {};

function CategoryPage(props) {
  return (
    <>
      <section id="categoryPage">
        <div className="container-fluid">
          <div className="row gx-0">
            <div className="col-lg-3 col-12 p-0">
              <FilterCategory />
            </div>
            <div className="col-lg-6 col-12 p-0">
              <Routes>
                <Route path="/" element={<MainCategory />} />
                <Route path="/:slug" element={<MainCategoryDetail />} />
              </Routes>
            </div>
            <div className="col-lg-3 col-12 p-0 aside-right">
              <AsideRight />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CategoryPage;
