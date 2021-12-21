import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

AdCatItem.propTypes = {
  categoryItem: PropTypes.object.isRequired,
};

function AdCatItem({ categoryItem }) {
  return (
    <div className="adcatitem">
      <div
        className="adcatitem__circle"
        style={{ backgroundImage: `url(${categoryItem.image})` }}
      >
        <span>{categoryItem._id}</span>
      </div>
      <div className="adcatitem__content">
        <h3>{categoryItem.title}</h3>
        <span>Ngày tạo</span>
        <p>
          {new Date(categoryItem.createdAt).toLocaleDateString("vi-VN")}
        </p>
      </div>
    </div>
  );
}

export default AdCatItem;
