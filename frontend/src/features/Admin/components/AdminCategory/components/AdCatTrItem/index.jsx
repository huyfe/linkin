import React from "react";
import PropTypes from "prop-types";

AdCatTrItem.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  img: PropTypes.string,
  date: PropTypes.any,
  handleClick: PropTypes.func,
  isChecked: PropTypes.bool,
};

AdCatTrItem.defaultProps = {
  id: 0,
  name: "",
  img: "",
  date: null,
  handleClick: null,
  isChecked: false,
};

function AdCatTrItem({ id, name, img, date, handleClick, isChecked }) {
  return (
    <tr>
      <td scope="row" className="td-mobile">
        <input
          type="checkbox"
          id={id}
          onChange={handleClick}
          checked={isChecked}
        />
        <label htmlFor={id} className="checkbox"></label>
        <span>{id}</span>
      </td>
      <td>{name}</td>
      <td className="res-mobile" >
        <img className="res-mobile" src={img} alt={name} />
      </td>
      <td>{new Date(date).toLocaleDateString("vi-VN")}</td>
      <td className="res-mobile" >{new Date(date).toLocaleTimeString()}</td>
    </tr>
  );
}

export default AdCatTrItem;
