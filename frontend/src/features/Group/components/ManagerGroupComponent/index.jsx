import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "./style.scss";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalBody,
  MDBModalFooter,
  MDBModalHeader,
  MDBModalTitle,
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
  MDBDropdownLink,
} from "mdb-react-ui-kit";
import { MDBValidation, MDBInput, MDBCheckbox } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import groupApi from "./../../../../api/groupApi";
import { useDispatch, useSelector } from "react-redux";
import { createGroups } from "../../groupSlice";

ManagerGroupComponent.propTypes = {
    
};



function ManagerGroupComponent(props) {
  const dispatch = useDispatch();
  const [scrollableModal, setScrollableModal] = useState(false);
  const [publicGroup, setPublicGroup] = useState(false);

  const [centredModal, setCentredModal] = useState(false);
  const toggleShow = () => setCentredModal(!centredModal);

  const dataUser = JSON.parse(localStorage.getItem("dataUser"));

  // Gía trị mặc định của form
  const [formValue, setFormValue] = useState({
    id_author: dataUser.Id,
    title: "",
    desc: "",
    groups: [],
    image: "",
    public: "",
  });

  // Event onchange form
  const onChangeForm = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  // Event set public link
  const onSetPublicGroup = () => {
    setPublicGroup(!publicGroup);
    setFormValue({ ...formValue, public: publicGroup });
  };

  // Sự kiện submit form
  const onSubmitForm = async (data) => {
    data.image =
      data.image ||
      "https://images.unsplash.com/photo-1496440737103-cd596325d314?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80";

    // Kiểm tra dữ liện form
    if (data.title === "" || data.desc === "" || data.public === "")
      return false;
    setScrollableModal(!scrollableModal);
    const createGroup = await groupApi.add(data);
    const groupList = await groupApi.getAll();
    dispatch(createGroups(groupList.data));
    showPopUp("Đã thêm group thành công", 1500);
    console.log(data);
  };

  const showPopUp = (message, time) => {
    const mess = <div className="message">{message}</div>;
    ReactDOM.render(mess, document.getElementById("popUp"));
    setTimeout(() => {
      ReactDOM.render(null, document.getElementById("popUp"));
    }, time);
  };

  const [showErr, setShowErr] = useState(false);

  const [imgErr, setImgErr] = useState(false);

  const [imageUpload, setImageUpload] = useState("");
  const [isImageUpload, setIsImageUpload] = useState(false);
  function handleImageUploadChange(e) {
    if (e.target.files && e.target.files[0]) {
      if (e.target.files[0].size > 75 * 1024) {
        // 75*1024  = 75kb
        setImageUpload("");
        setFormValue({ ...formValue, image: "" });
        setIsImageUpload(false);
        setImgErr(true);
        return;
      }

      let reader = new FileReader();
      // Sử dụng FileReader để đọc file vừa chọn

      reader.onload = function (e) {
        // Sau khi xử lý quá trình đọc file hoàn thành
        setImageUpload(e.target.result);
        setFormValue({ ...formValue, image: e.target.result });
        setIsImageUpload(true);
        setImgErr(false);
      };

      reader.readAsDataURL(e.target.files[0]);
    }
  }

  return (
    <div className="group-sidebar-manager">
      <h3>Nhóm bạn quản lí</h3>
      <div className="box-create-group">
        <div className="wrap-upload-link d-flex">
          <div className="button-show-modal">
            <MDBBtn onClick={() => setScrollableModal(!scrollableModal)}>
              Tạo nhóm mới<i className="far fa-plus"></i>
            </MDBBtn>
          </div>

          <MDBModal
            className="modal-upload-link"
            show={scrollableModal}
            getOpenState={(e) => setScrollableModal(e)}
            tabIndex="-1"
          >
            <MDBModalDialog scrollable className="modal-upload-link-dialog">
              <MDBModalContent>
                <MDBModalHeader>
                  <MDBModalTitle className="text-center text-black">
                    Tạo Nhóm
                  </MDBModalTitle>
                  <MDBBtn
                    className="btn-close"
                    color="none"
                    onClick={() => setScrollableModal(!scrollableModal)}
                  ></MDBBtn>
                </MDBModalHeader>
                <div className="user-info mb-15 d-flex">
                  <div className="name">
                    <div className="public">
                      <MDBDropdown>
                        <MDBDropdownToggle color="none" className="btn-public">
                          {!publicGroup && (
                            <>
                              {" "}
                              <i className="fas fa-lock"></i> Riêng tư{" "}
                            </>
                          )}
                          {publicGroup && (
                            <>
                              {" "}
                              <i className="far fa-globe-europe"></i> Công khai{" "}
                            </>
                          )}
                        </MDBDropdownToggle>
                        <MDBDropdownMenu className="dropdown-public">
                          {!publicGroup && (
                            <MDBDropdownItem>
                              <MDBDropdownLink
                                onClick={() => onSetPublicGroup()}
                                className="pl-0"
                                href="#"
                              >
                                <i className="far fa-globe-europe"></i> Công
                                khai
                              </MDBDropdownLink>
                            </MDBDropdownItem>
                          )}
                          {publicGroup && (
                            <MDBDropdownItem>
                              <MDBDropdownLink
                                onClick={() => onSetPublicGroup()}
                                className="pl-0"
                                href="#"
                              >
                                <i className="fas fa-lock"></i> Riêng tư
                              </MDBDropdownLink>
                            </MDBDropdownItem>
                          )}
                        </MDBDropdownMenu>
                      </MDBDropdown>
                    </div>
                  </div>
                </div>

                <MDBModalBody className="formAddGroup">
                  <MDBValidation
                    onSubmit={() => onSubmitForm(formValue)}
                    className="row gx-0 gy-3"
                    noValidate
                  >
                    <div className="col-12">
                      <MDBInput
                        className="bg-light rounded-0"
                        value={formValue.title}
                        name="title"
                        onChange={onChangeForm}
                        id="validationCustom01"
                        required
                        label="Tên nhóm"
                        validation="Xin mời nhập tên nhóm!"
                        invalid
                      />
                    </div>
                    <div className="col-12">
                      <MDBInput
                        className="bg-light rounded-0"
                        value={formValue.desc}
                        name="desc"
                        onChange={onChangeForm}
                        id="validationCustom02"
                        required
                        label="Nhập mô tả"
                        validation="Xin mời nhập mô tả!"
                        invalid
                      />
                    </div>
                    <div className="form-group formAddGroup__upload">
                      <div className="d-flex align-items-center formAddGroup__upload--btn">
                        <h3>Chọn hình</h3>
                        <label
                          htmlFor="img-uploadAdd-link"
                          className="d-flex justify-content-center align-items-center"
                        >
                          <i className="far fa-plus"></i>
                        </label>
                        {imgErr ? (
                          <span className="img__err">
                            (Ảnh không được quá 75kB)
                          </span>
                        ) : (
                          <span className="img__err text-success">
                            Tải ảnh lên thành công
                          </span>
                        )}
                      </div>
                      <input
                        // className="d-block"
                        type="file"
                        name="image"
                        id="img-uploadAdd-link"
                        accept=".jpg,.jpeg,.png"
                        onChange={handleImageUploadChange}
                      />
                      {isImageUpload && (
                        <div className="formAddGroup__img-uploaded">
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
                    <div className="col-12">
                      <MDBBtn type="submit" className="w-100 pt-3 pb-3">
                        Tạo nhóm
                      </MDBBtn>
                    </div>
                  </MDBValidation>
                </MDBModalBody>
                <MDBModalFooter></MDBModalFooter>
              </MDBModalContent>
            </MDBModalDialog>
          </MDBModal>
        </div>
      </div>
    </div>
  );
}

export default ManagerGroupComponent;
