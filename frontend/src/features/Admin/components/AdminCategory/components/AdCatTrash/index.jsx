import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import AdCatTrItem from "../AdCatTrItem";
import { MDBBtn } from "mdb-react-ui-kit";
import categoriesApi from "../../../../../../api/categoriesApi";
import {
  fetchAllCatAd,
  fetchTrashCatAd,
} from "../../../../categoriesAdminSlice";

AdCatTrash.propTypes = {};

function AdCatTrash(props) {
  const dispatch = useDispatch();

  const listCatTrash = useSelector(
    (state) => state.categoriesAdmin.showTrashCatAd
  );

  let categories = [];
  let initListCheck = [];

  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);

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
    categories = [...listCatTrash];
    initListCheck = categories.map((i) => i._id);
  } else {
    categories = [...listCatTrash].filter(
      (category) =>
        category.title.toLowerCase().includes(search.toLowerCase()) ||
        category.slug.toLowerCase().includes(search.toLowerCase()) ||
        category._id.toString().includes(search.toLowerCase())
    );
    initListCheck = categories.map((i) => i._id);
  }

  const handleSelectAll = (e) => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(categories.map((i) => i._id));
    if (isCheckAll) {
      setIsCheck([]);
    }
  };

  const handleClick = (e) => {
    const { id, checked } = e.target;
    setIsCheck([...isCheck, +id]);
    if (!checked) {
      setIsCheck(isCheck.filter((i) => i !== +id));
    }
  };

  const fetchAdAllCat = async () => {
    let { data } = await categoriesApi.getAll();
    dispatch(fetchAllCatAd(data));
  };

  const fetchAdTrashCat = async () => {
    let { data } = await categoriesApi.getTrash();
    dispatch(fetchTrashCatAd(data));
  };

  const handleRestore = async (e) => {
    await categoriesApi.restoreByList(isCheck);

    fetchAdAllCat();
    fetchAdTrashCat();
  };

  useEffect(() => {
    // So s??nh 2 m???ng "initListCheck" v?? "isCheck" ????? check n??t "Ch???n t???t c???"
    setIsCheckAll(
      initListCheck.length == isCheck.length &&
        initListCheck.every((i) => {
          if (isCheck.indexOf(i) > -1) {
            return (i = isCheck[isCheck.indexOf(i)]);
          }
        })
    );
  }, [initListCheck, isCheck]);

  return (
    <div className="adcattrash">
      <div className="d-flex flex-wrap align-items-center adcattrash__top">
        <input
          type="checkbox"
          id="selectAll"
          checked={isCheckAll}
          onChange={handleSelectAll}
        />
        <label htmlFor="selectAll" className="checkbox"></label>
        <label htmlFor="selectAll">Ch???n t???t c???</label>
        <MDBBtn
          disabled={isCheck.length === 0 ? true : false}
          onClick={handleRestore}
        >
          Kh??i ph???c
        </MDBBtn>
        <input
          type="search"
          placeholder="T??m ki???m..."
          value={valueSearch}
          onChange={handleSearch}
        />
      </div>

      <table className="adcattrash__table table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">T??n danh m???c</th>
            <th scope="col" className="res-mobile">???nh</th>
            <th scope="col">Ng??y x??a</th>
            <th scope="col" className="res-mobile">Th???i gian x??a</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((i) => (
            <AdCatTrItem
              key={i._id}
              id={i._id}
              name={i.title}
              img={i.image}
              date={i.deletedAt}
              handleClick={handleClick}
              isChecked={isCheck.includes(i._id)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdCatTrash;
