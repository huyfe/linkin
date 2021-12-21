import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./style.scss";
import SearchCategory from "../SearchCategory";
import ListCategoryLink from "../ListCategoryLink";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import categoriesApi from "../../../../api/categoriesApi";

MainCategoryDetail.propTypes = {};

function MainCategoryDetail(props) {
  let { slug } = useParams();

  const [listLinks, setListLinks] = useState([]);
  const [idCat, setIdCat] = useState();

  const listCategoriesOfUser = useSelector((state) => state.categoriesUser);
  const linkListData = useSelector((state) => state.link);

  useEffect(() => {
    (async () => {
      try {
        let { data } = await categoriesApi.getBySlug(slug);
        let list = data.id_links;
        setIdCat(data._id);
        setListLinks(
          [...linkListData].filter((link) => list.includes(link._id))
        );
      } catch (error) {
        console.log(error);
      }
    })();
  }, [slug, listCategoriesOfUser, linkListData]);

  return (
    <main className="mainCategory">
      {/* Truyền title cho component SearchCategory */}
      <SearchCategory title={"Link"} showBtnBack isNone />
      <ListCategoryLink listLinks={listLinks} idCat={idCat} />
    </main>
  );
}

export default MainCategoryDetail;
