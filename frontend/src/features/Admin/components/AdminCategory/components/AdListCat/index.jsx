import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import "./style.scss";
import AdCatItem from "../AdCatItem";
import { useSelector } from "react-redux";

AdListCat.propTypes = {};

function AdListCat(props) {
  const listCatAdmin = useSelector(
    (state) => state.categoriesAdmin.showAllCatAd
  );

  let categories = [];

  const [search, setSearch] = useState("");

  const [valueSearch, setValueSearch] = useState("");

  const typingTime = useRef(null);

  function handleSearch(e) {
    const value = e.target.value;
    setValueSearch(value);

    if (typingTime.current) {
      clearTimeout(typingTime.current);
    }

    typingTime.current = setTimeout(() => {
      setSearch(value.trim());
    }, 1000);
  }

  if (search === "") {
    categories = [...listCatAdmin];
  } else {
    categories = [...listCatAdmin].filter(
      (category) =>
        category.title.toLowerCase().includes(search.toLowerCase()) ||
        category.slug.toLowerCase().includes(search.toLowerCase()) ||
        category._id.toString().includes(search.toLowerCase())
    );
  }

  return (
    <div className="adlistcat">
      <div className="adlistcat__search">
        <input type="search" placeholder="Tìm kiếm..." value={valueSearch} onChange={handleSearch} />
      </div>
      <div className="row">
        {categories.length == 0 ? <p>Không có danh mục nào</p> : ""}
        {categories.map((category) => (
          <div className="col-lg-3 col-md-4 col-6" key={category._id}>
            <AdCatItem categoryItem={category} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdListCat;
