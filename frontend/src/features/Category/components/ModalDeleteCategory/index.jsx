import React, { useState } from "react";
import PropTypes from "prop-types";
import "./style.scss";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalFooter,
} from "mdb-react-ui-kit";
import categoriesApi from "../../../../api/categoriesApi";
import { useDispatch } from "react-redux";
import { removeCatOfUser } from "../../categoriesUserSlice";

ModalDeleteCategory.propTypes = {
  showModal: PropTypes.bool,
  setShowModal: PropTypes.func,
  idDelete: PropTypes.number,
};

ModalDeleteCategory.defaultProps = {
  showModal: false,
  setShowModal: null,
};

function ModalDeleteCategory({ showModal, setShowModal, idDelete }) {
  const dispatch = useDispatch();

  const handleRemoveCat = async (id) => {
    await categoriesApi.removeCategory(id);
    dispatch(removeCatOfUser(id));
    setShowModal(false);
  };

  return (
    <>
      <MDBModal
        tabIndex="-1"
        show={showModal}
        getOpenState={(e) => {
          if (!setShowModal) {
            return;
          }
          setShowModal(e);
        }}
      >
        <MDBModalDialog className="modalDelete" centered>
          <MDBModalContent className="modalDelete__content">
            <MDBModalHeader className="modalDelete__header">
              <MDBModalTitle>
                Bạn có muốn xóa DANH MỤC này không?
              </MDBModalTitle>
            </MDBModalHeader>
            <MDBModalFooter className="modalDelete__footer">
              <MDBBtn onClick={() => setShowModal(!showModal)}>Không</MDBBtn>
              <MDBBtn onClick={() => handleRemoveCat(idDelete)}>Có</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}

export default ModalDeleteCategory;
