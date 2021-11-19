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

ModalEditCategory.propTypes = {
  showModalEdit: PropTypes.bool,
  setShowModalEdit: PropTypes.func,
  categoryEdit: PropTypes.object,
};

ModalEditCategory.defaultProps = {
  showModalEdit: false,
  setShowModalEdit: null,
};

function ModalEditCategory({ showModalEdit, setShowModalEdit, categoryEdit }) {
  const [imageUpload, setImageUpload] = useState(categoryEdit.image);
  const [isImageUpload, setIsImageUpload] = useState(true);

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
        show={showModalEdit}
        getOpenState={(e) => {
          if (!setShowModalEdit) {
            return;
          }
          setShowModalEdit(e);
        }}
      >
        <MDBModalDialog className="modalEdit" centered>
          <MDBModalContent className="modalEdit__content">
            <MDBModalBody className="modalEdit__body">
              <form action="#" className="formEditCategory">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    placeholder="Điền tên"
                    defaultValue={categoryEdit.title}
                  />
                </div>
                <div className="form-group formEditCategory__upload">
                  <div className="d-flex align-items-center formEditCategory__upload--btn">
                    <h3>Chọn hình</h3>
                    <label
                      htmlFor={`img-uploadEdit-${categoryEdit._id}`}
                      className="d-flex justify-content-center align-items-center"
                    >
                      <i className="far fa-plus"></i>
                    </label>
                  </div>
                  <input
                    type="file"
                    name="image"
                    id={`img-uploadEdit-${categoryEdit._id}`}
                    accept=".jpg,.jpeg,.png"
                    onChange={handleImageUploadChange}
                  />
                  {isImageUpload && (
                    <div className="formEditCategory__img-uploaded">
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
                <div className="form-group formEditCategory__radio">
                  <input
                    type="radio"
                    id={`public-${categoryEdit._id}`}
                    name="public"
                    defaultValue="true"
                    checked={categoryEdit.public ? true : false}
                  />
                  <label htmlFor={`public-${categoryEdit._id}`}>
                    <span className="icon-earth"></span> Công khai
                  </label>
                  <input
                    type="radio"
                    id={`private-${categoryEdit._id}`}
                    name="public"
                    defaultValue="false"
                    checked={!categoryEdit.public ? true : false}
                  />
                  <label htmlFor={`private-${categoryEdit._id}`}>
                    <span className="icon-lock"></span> Riêng tư
                  </label>
                </div>
                <input
                  type="hidden"
                  name="id_user_or_group"
                  defaultValue={categoryEdit.id_user_or_group}
                />
                <input
                  type="hidden"
                  name="role"
                  defaultValue={categoryEdit.role}
                />
              </form>
            </MDBModalBody>
            <MDBModalFooter className="modalEdit__footer">
              <MDBBtn onClick={() => setShowModalEdit(!showModalEdit)}>
                Hủy
              </MDBBtn>
              <MDBBtn>Đồng ý</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}

export default ModalEditCategory;
