import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

AdCatItem.propTypes = {
  categoryItem: PropTypes.object.isRequired,
};

function AdCatItem({ categoryItem }) {
  return (
    <div className="adcatitem">
      <div className="adcatitem__inner">
        <div className="front">
          <img src={categoryItem.image} alt={categoryItem.title} />
        </div>
        <div className="back">
          <span>#{categoryItem._id}</span>
          {categoryItem.public ? (
            <p className="public">
              <span className="icon-earth"></span> Công khai
            </p>
          ) : (
            <p className="public">
              <span className="icon-lock"></span> Riêng tư
            </p>
          )}
          <h4>{categoryItem.title}</h4>
          <p className="date">{new Date(categoryItem.createdAt).toLocaleDateString('vi-VN', { day: 'numeric', month: 'long', year: 'numeric' } )}</p>
        </div>
      </div>
    </div>
  );
}

export default AdCatItem;
