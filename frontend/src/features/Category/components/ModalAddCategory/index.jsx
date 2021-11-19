import React, { useState } from "react";
import "./style.scss";
import PropTypes from "prop-types";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";

ModalAddCategory.propTypes = {
  showModal: PropTypes.bool,
  setShowModal: PropTypes.func,
};

ModalAddCategory.defaultProps = {
  showModal: false,
  setShowModal: null,
};

function ModalAddCategory({ showModal, setShowModal }) {
  const [imageUpload, setImageUpload] = useState("");
  const [isImageUpload, setIsImageUpload] = useState(false);
  function handleImageUploadChange(e) {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      // Sử dụng FileReader để đọc file vừa chọn

      reader.onload = function (e) {
        // Sau khi xử lý quá trình đọc file hoàn thành
        setImageUpload(e.target.result);
        setIsImageUpload(true);
      };

      reader.readAsDataURL(e.target.files[0]);
    }
  }

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
        <MDBModalDialog className="modalAdd" centered>
          <MDBModalContent className="modalAdd__content">
            <MDBModalBody className="modalAdd__body">
              <form action="#" className="formAddCategory">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    placeholder="Điền tên"
                  />
                </div>
                <div className="form-group formAddCategory__upload">
                  <div className="d-flex align-items-center formAddCategory__upload--btn">
                    <h3>Chọn hình</h3>
                    <label
                      htmlFor="img-uploadAdd"
                      className="d-flex justify-content-center align-items-center"
                    >
                      <i className="far fa-plus"></i>
                    </label>
                  </div>
                  <input
                    // className="d-block"
                    type="file"
                    name="image"
                    id="img-uploadAdd"
                    accept=".jpg,.jpeg,.png"
                    onChange={handleImageUploadChange}
                  />
                  {isImageUpload && (
                    <div className="formAddCategory__img-uploaded">
                      <button
                        onClick={() => {
                          setIsImageUpload(false);
                          setImageUpload(null);
                        }}
                      >
                        <i className="fad fa-times-circle"></i>
                      </button>
                      <img
                        src={imageUpload}
                        draggable={false}
                        alt="img-uploaded"
                      />
                    </div>
                  )}
                </div>
                <div className="form-group formAddCategory__radio">
                  <input
                    type="radio"
                    id="public"
                    name="public"
                    defaultValue="true"
                  />
                  <label htmlFor="public">
                    <span className="icon-earth"></span> Công khai
                  </label>
                  <input
                    type="radio"
                    id="private"
                    name="public"
                    defaultValue="false"
                  />
                  <label htmlFor="private">
                    <span className="icon-lock"></span> Riêng tư
                  </label>
                </div>
                <input type="hidden" name="id_user_or_group" defaultValue="1" />
                <input type="hidden" name="role" defaultValue="0" />
              </form>
            </MDBModalBody>
            <MDBModalFooter className="modalAdd__footer">
              <MDBBtn onClick={() => setShowModal(!showModal)}>Hủy</MDBBtn>
              <MDBBtn>Đồng ý</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}

export default ModalAddCategory;
