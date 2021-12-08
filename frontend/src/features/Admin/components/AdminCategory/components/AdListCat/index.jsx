import React from "react";
import PropTypes from "prop-types";
import AdCatItem from "../AdCatItem";
import { useSelector } from "react-redux";

AdListCat.propTypes = {};

function AdListCat(props) {
  const listCatAdmin = useSelector(
    (state) => state.categoriesAdmin.showAllCatAd
  );

  return (
    <div className="row">
      {listCatAdmin.length == 0 ? <p>Không có danh mục nào</p> : ""}
      {listCatAdmin.map((category) => (
        <div className="col-lg-3 col-6" key={category._id}>
          <AdCatItem categoryItem={category} />
        </div>
      ))}
    </div>
  );
}

export default AdListCat;
