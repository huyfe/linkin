import React from "react";
import PropTypes from "prop-types";
import CategoryLinkItem from "../CategoryLinkItem";

ListCategoryLink.propTypes = {
  listLinks: PropTypes.array,
  idCat: PropTypes.number,
};

ListCategoryLink.defaultProps = {
  listLinks: [],
  idCat: null,
};

function ListCategoryLink({ listLinks, idCat }) {

  return (
    <div className="listCategoryLink row">
      {listLinks.length == 0 ? <p>Không có link nào</p> : ""}
      {listLinks.map((link) => (
        <div className="listCategoryLink__item col-lg-12" key={link._id}>
          <CategoryLinkItem linkItem={link} idCat={idCat} />
        </div>
      ))}
    </div>
  );
}

export default ListCategoryLink;
