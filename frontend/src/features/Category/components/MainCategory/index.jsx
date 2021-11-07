import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import FilterCategory from "../FilterCategory";
import SearchCategory from "../SearchCategory";
import ListCategory from "../ListCategory";

MainCategory.propTypes = {};

function MainCategory(props) {
  return (
    <>
      <div className="col-lg-3 p-0">
        <FilterCategory />
      </div>
      <div className="col-lg-6 p-0">
        <main className="mainCategory">
          {/* Truyền title cho component SearchCategory */}
          <SearchCategory title={"Danh mục"} />
          <ListCategory />
        </main>
      </div>
    </>
  );
}

export default MainCategory;
