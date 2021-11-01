import React from "react";
import UserSideBarComponent from "../../../components/UserSidebar";
import FilterCategory from "../components/FilterCategory";
import MainCategory from "../components/MainCategory";
import PropTypes from "prop-types";

CategoryPage.propTypes = {};

function CategoryPage(props) {
  return (
    <section id="categoryPage">
      <div className="wrapper">
        <div className="row">
          <div className="col-lg-3 p-0">
            <FilterCategory />
          </div>
          <div className="col-lg-6 p-0">
            <MainCategory />
          </div>
          <UserSideBarComponent />
        </div>
      </div>
    </section>
  );
}

export default CategoryPage;
