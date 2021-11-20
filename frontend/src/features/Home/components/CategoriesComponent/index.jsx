import React, { useState } from "react";
import PropTypes from "prop-types";
import "./style.scss";
import CategoryComponent from "../CategoryComponent";
import { MDBBtn } from "mdb-react-ui-kit";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import ModalAddCategory from "../../../Category/components/ModalAddCategory";
import { useSelector } from "react-redux";

Categories.propTypes = {};

function Categories(props) {
  const [showModal, setShowModal] = useState(false);

  function handleShowModalAdd() {
    setShowModal(!showModal);
  }

  const listCategoryData = useSelector(state => state.categoriesUser);

  const listCategory = listCategoryData.map((category) => {
    return (
      <SplideSlide key={category._id} >
        <CategoryComponent
          key={category._id}
          name={category.title}
          href={`categories/${category.slug}`}
          image={category.image}
        ></CategoryComponent>
      </SplideSlide>
    );
  });

  const options = {
    type: "slide",
    gap: 15,
    perPage: 4,
    perMove: 1,
    pagination: false,
    padding: {
      right: 100,
    },
  };

  return (
    <>
      <div className="categories">
        <Splide options={options}>
          <SplideSlide
            className="category-create"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1510172951991-856a654063f9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80')",
            }}
          >
            <MDBBtn
              onClick={() => handleShowModalAdd()}
              color="link"
              className="text-dark"
            >
              + <br /> Tạo danh mục
            </MDBBtn>
          </SplideSlide>
          {listCategory}
        </Splide>
      </div>
      <ModalAddCategory
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </>
  );
}

export default Categories;
