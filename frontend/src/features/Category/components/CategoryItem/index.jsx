import React, { useState } from "react";
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

CategoryItem.propTypes = {};

function CategoryItem() {
  const [showModal, setShowModal] = useState(false);
  const [idCategoryDelete, setIdCategoryDelete] = useState();

  function handleShowModal(idCategory){
    setShowModal(!showModal);
    // Truyền id Danh mục cần xóa cho Modal
    setIdCategoryDelete(idCategory);
  };

  return (
    <div className="categoryItem">
      <MDBDropdown dropright className="categoryItem__dropdown">
        <MDBDropdownToggle className="categoryItem__btn">
          <span className="icon-more-horizontal"></span>
        </MDBDropdownToggle>
        <MDBDropdownMenu className="categoryItem__dropdown--menu">
          <MDBDropdownItem>
            <MDBDropdownLink className="categoryItem__link" tag='button' type='button'>
              <span className="icon-edit-basic"></span> Sửa
            </MDBDropdownLink>
          </MDBDropdownItem>
          <MDBDropdownItem>
            <MDBDropdownLink className="categoryItem__link" tag='button' type='button' onClick={ () => handleShowModal(1) } >
              <i className="fal fa-trash-alt"></i> Xóa
            </MDBDropdownLink>
          </MDBDropdownItem>
          <MDBDropdownItem>
            <MDBDropdownLink className="categoryItem__link" tag='button' type='button'>
              <span className="icon-earth"></span> Công khai
            </MDBDropdownLink>
          </MDBDropdownItem>
          <MDBDropdownItem>
            <MDBDropdownLink className="categoryItem__link" tag='button' type='button'>
              <span className="icon-lock"></span> Riêng tư
            </MDBDropdownLink>
          </MDBDropdownItem>
          <MDBDropdownItem>
            <MDBDropdownLink className="categoryItem__link" tag='button' type='button'>
              <span className="icon-pin"></span> Ghim
            </MDBDropdownLink>
          </MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
      <div className="categoryItem__img">
        <Link to="slug">
          <img src="./images/Categories/ux-ui.jpg" />
        </Link>
      </div>
      <Link to="slug">Nguyên tắc thiết kế</Link>
      <ModalDeleteCategory showModal={showModal} setShowModal={setShowModal} idDelete={idCategoryDelete} />
    </div>
  );
}

export default CategoryItem;
