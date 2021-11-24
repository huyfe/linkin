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
import { useDispatch } from "react-redux";
import categoriesApi from "../../../../api/categoriesApi";
import { updateCatOfUser } from "../../categoriesUserSlice";

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
  const dispatch = useDispatch();

  const [data, setData] = useState(categoryEdit);

  const [showErr, setShowErr] = useState(false);

  const [imageUpload, setImageUpload] = useState(categoryEdit.image);
  const [isImageUpload, setIsImageUpload] = useState(true);

  function handleImageUploadChange(e) {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      // Sử dụng FileReader để đọc file vừa chọn

      reader.onload = function (e) {
        // Sau khi xử lý quá trình đọc file hoàn thành
        setImageUpload(e.target.result);
        setData({ ...data, image: e.target.result });
        setIsImageUpload(true);
      };

      reader.readAsDataURL(e.target.files[0]);
    }
  }

  const updateCat = async (dataUpdate) => {
    let { data } = await categoriesApi.updateCategory(
      dataUpdate._id,
      dataUpdate
    );
    dispatch(updateCatOfUser(data));
  };

  function handleUpdate(e) {
    e.preventDefault();
    if (data.title == "" || data.image == "") {
      setShowErr(true);
    } else {
      updateCat(data);
      setShowErr(false);
      setShowModalEdit(!showModalEdit);
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
              <form onSubmit={handleUpdate} className="formEditCategory">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    placeholder="Điền tên"
                    value={data.title}
                    onChange={(e) =>
                      setData({ ...data, title: e.target.value })
                    }
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
                        className="d-none"
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
                    checked={data.public ? true : false}
                    onClick={() => setData({ ...data, public: true })}
                  />
                  <label htmlFor={`public-${categoryEdit._id}`}>
                    <span className="icon-earth"></span> Công khai
                  </label>
                  <input
                    type="radio"
                    id={`private-${categoryEdit._id}`}
                    defaultValue="false"
                    checked={!data.public ? true : false}
                    onClick={() => setData({ ...data, public: false })}
                  />
                  <label htmlFor={`private-${categoryEdit._id}`}>
                    <span className="icon-lock"></span> Riêng tư
                  </label>
                </div>
                <div
                  className={
                    showErr ? "modalAdd__error" : "modalAdd__error d-none"
                  }
                >
                  <h4>Vui lòng nhập đầy đủ thông tin</h4>
                </div>
                <MDBModalFooter className="modalEdit__footer">
                  <MDBBtn type="button" onClick={() => setShowModalEdit(!showModalEdit)}>
                    Hủy
                  </MDBBtn>
                  <MDBBtn type="submit">Đồng ý</MDBBtn>
                </MDBModalFooter>
              </form>
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}

export default ModalEditCategory;
