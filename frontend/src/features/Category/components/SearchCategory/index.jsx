import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { useNavigate } from "react-router-dom";

SearchCategory.propTypes = {
  title: PropTypes.string,
  showBtnBack: PropTypes.bool,
  searchChange: PropTypes.func,
};

SearchCategory.defaultProps = {
  showBtnBack: false,
  searchChange: null,
};

function SearchCategory({ title, showBtnBack, searchChange }) {
  const navigate = useNavigate();

  const [valueSearch, setValueSearch] = useState("");
  const typingTime = useRef(null);

  function handleSearch(e) {
    const value = e.target.value;
    setValueSearch(value);
    if (!searchChange) return;

    if (typingTime.current) {
      clearTimeout(typingTime.current);
    }

    typingTime.current = setTimeout(() => {
      searchChange(value);
    }, 1000);
  }

  return (
    <div className="d-flex align-items-center searchCategory">
      {showBtnBack ? (
        <button onClick={() => navigate(-1)}>
          <span className="icon-back"></span>
        </button>
      ) : (
        ""
      )}
      {/* title được truyền ở MainCategory và MainCategoryDetail */}
      <h1>{title}</h1>
      <div className="searchCategory__group">
        <label
          htmlFor="searchCategory"
          className="d-flex justify-content-end align-items-center"
        >
          <i className="fal fa-search"></i>
        </label>
        <input
          id="searchCategory"
          type="search"
          value={valueSearch}
          onChange={handleSearch}
        />
      </div>
    </div>
  );
}

export default SearchCategory;
