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
import categoriesApi from "../../../../api/categoriesApi";
import { useDispatch } from "react-redux";
import { addCatOfUser } from "../../categoriesUserSlice";

ModalAddCategory.propTypes = {
  showModal: PropTypes.bool,
  setShowModal: PropTypes.func,
};

ModalAddCategory.defaultProps = {
  showModal: false,
  setShowModal: null,
};

function ModalAddCategory({ showModal, setShowModal }) {
  const dispatch = useDispatch();

  const dataUser = JSON.parse(localStorage.getItem("dataUser"));

  const initData = {
    title: "",
    image: "",
    public: true,
    id_user_or_group: dataUser ? dataUser.Id : 0,
    role: 0,
  };
  const [data, setData] = useState(initData);

  const [showErr, setShowErr] = useState(false);

  const [imgErr, setImgErr] = useState(false);

  const [imageUpload, setImageUpload] = useState("");
  const [isImageUpload, setIsImageUpload] = useState(false);
  function handleImageUploadChange(e) {
    if (e.target.files && e.target.files[0]) {
      if (e.target.files[0].size > 75*1024) {
        // 75*1024  = 75kb
        setImageUpload("");
        setData({ ...data, image: "" });
        setIsImageUpload(false);
        setImgErr(true);
        return;
      }

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

  const addCat = async (dataAdd) => {
    let { data } = await categoriesApi.addCategory(dataAdd);
    dispatch(addCatOfUser(data));
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (data.title == "" || data.image == "") {
      setShowErr(true);
    } else {
      addCat(data);
      e.target.reset();
      setShowErr(false);
      setImageUpload("");
      setIsImageUpload(false);
      setData(initData);
      setShowModal(!showModal);
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
              <form onSubmit={handleSubmit} className="formAddCategory">
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
                <div className="form-group formAddCategory__upload">
                  <div className="d-flex align-items-center formAddCategory__upload--btn">
                    <h3>Chọn hình</h3>
                    <label
                      htmlFor="img-uploadAdd"
                      className="d-flex justify-content-center align-items-center"
                    >
                      <i className="far fa-plus"></i>
                    </label>
                    {imgErr ? (
                      <span className="img__err">
                        (Ảnh không được quá 75kB)
                      </span>
                    ) : (
                      ""
                    )}
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
                <div className="form-group formAddCategory__radio">
                  <input
                    type="radio"
                    id="public"
                    name="public"
                    onClick={() => setData({ ...data, public: true })}
                  />
                  <label htmlFor="public">
                    <span className="icon-earth"></span> Công khai
                  </label>
                  <input
                    type="radio"
                    id="private"
                    name="public"
                    onClick={() => setData({ ...data, public: false })}
                  />
                  <label htmlFor="private">
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
                <MDBModalFooter className="modalAdd__footer">
                  <MDBBtn
                    type="button"
                    onClick={() => setShowModal(!showModal)}
                  >
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

export default ModalAddCategory;
