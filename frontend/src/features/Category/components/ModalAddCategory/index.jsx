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
  showModalAdd: PropTypes.bool,
  setShowModalAdd: PropTypes.func,
};

ModalAddCategory.defaultProps = {
  showModalAdd: false,
  setShowModalAdd: null,
}

function ModalAddCategory({showModalAdd, setShowModalAdd}) {
  const [imageUpload, setImageUpload] = useState("");
  const [isImageUpload, setIsImageUpload] = useState(false);

  // Code mẫu của mdbootstrap
  // const [centredModal, setCentredModal] = useState(false);

  // const toggleShow = () => setCentredModal(!centredModal);

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
      {/* Code mẫu của mdbootstrap */}
      {/* <MDBBtn onClick={toggleShow}>Vertically centered modal</MDBBtn> */}

      <MDBModal
        tabIndex="-1"
        show={showModalAdd}
        // Code mẫu của mdbootstrap
        // getOpenState={(e) => setCentredModal(e)}
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
                      htmlFor="img-upload"
                      className="d-flex justify-content-center align-items-center"
                    >
                      <i class="far fa-plus"></i>
                    </label>
                  </div>
                  <input
                    type="file"
                    name="image"
                    id="img-upload"
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
                    defaultValue="0"
                  />
                  <label htmlFor="public">
                    <span className="icon-earth"></span> Công khai
                  </label>
                  <input
                    type="radio"
                    id="private"
                    name="public"
                    defaultValue="1"
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
              <MDBBtn onClick={() => setShowModalAdd(!showModalAdd)}>Hủy</MDBBtn>
              <MDBBtn>Đồng ý</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}

export default ModalAddCategory;
