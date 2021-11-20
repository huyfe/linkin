import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
  MDBDropdownLink,
} from "mdb-react-ui-kit";
import "./style.scss";
import { Link } from "react-router-dom";
import ModalDeleteCategory from "../ModalDeleteCategory";
import ModalEditCategory from "../ModalEditCategory";
import { useDispatch } from "react-redux";
import categoriesApi from "../../../../api/categoriesApi";
import { updateCatOfUser } from "../../categoriesUserSlice";

CategoryItem.propTypes = {
  categoryItem: PropTypes.object.isRequired,
};

function CategoryItem({ categoryItem }) {
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [idCategoryDelete, setIdCategoryDelete] = useState();

  function handleShowModal(idCategory) {
    setShowModal(!showModal);
    // Truyền id Danh mục cần xóa cho Modal
    setIdCategoryDelete(idCategory);
  }

  const handleUpdatePin = async () => {
    let { data } = await categoriesApi.updatePinCat(categoryItem._id);
    dispatch(updateCatOfUser(data));
  };

  return (
    <div className="categoryItem">
      <MDBDropdown dropright className="categoryItem__dropdown">
        <MDBDropdownToggle className="categoryItem__btn">
          <span className="icon-more-horizontal"></span>
        </MDBDropdownToggle>
        <MDBDropdownMenu className="categoryItem__dropdown--menu">
          <MDBDropdownItem>
            <MDBDropdownLink
              className="categoryItem__link"
              tag="button"
              type="button"
              onClick={() => setShowModalEdit(!showModalEdit)}
            >
              <span className="icon-edit-basic"></span> Sửa
            </MDBDropdownLink>
          </MDBDropdownItem>
          <MDBDropdownItem>
            <MDBDropdownLink
              className="categoryItem__link"
              tag="button"
              type="button"
              onClick={() => handleShowModal(categoryItem._id)}
            >
              <i className="fal fa-trash-alt"></i> Xóa
            </MDBDropdownLink>
          </MDBDropdownItem>
          <MDBDropdownItem>
            <MDBDropdownLink
              className="categoryItem__link"
              tag="button"
              type="button"
              onClick={handleUpdatePin}
            >
              <span className="icon-pin"></span>{" "}
              {categoryItem.pin ? "Bỏ ghim" : "Ghim"}
            </MDBDropdownLink>
          </MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
      <div className="categoryItem__img">
        <Link to={categoryItem.slug}>
          <img src={categoryItem.image} />
        </Link>
      </div>
      <Link to={categoryItem.slug}>{categoryItem.title}</Link>
      <ModalDeleteCategory
        showModal={showModal}
        setShowModal={setShowModal}
        idDelete={idCategoryDelete}
      />
      <ModalEditCategory
        showModalEdit={showModalEdit}
        setShowModalEdit={setShowModalEdit}
        categoryEdit={categoryItem}
      />
    </div>
  );
}

export default CategoryItem;
