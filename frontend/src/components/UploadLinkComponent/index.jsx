import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import {
  MDBBtn, MDBModal, MDBModalDialog, MDBModalContent, MDBModalBody, MDBModalFooter, MDBModalHeader, MDBModalTitle,
  MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem, MDBDropdownLink
} from 'mdb-react-ui-kit';
import {
  MDBValidation,
  MDBInput,
  MDBCheckbox
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import linkApi from '../../api/linkApi';
import { useDispatch, useSelector } from 'react-redux';
import { update } from '../../features/Link/linkSlice';

UpLoadLinkComponent.propTypes = {
  avatar: PropTypes.string,
  href: PropTypes.string,
};
UpLoadLinkComponent.defaultProps = {
  avatar: 'https://images.unsplash.com/photo-1604004555489-723a93d6ce74?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80',
  href: "/profile/user",
}

function UpLoadLinkComponent(props) {
  const [scrollableModal, setScrollableModal] = useState(false);
  const [showListCategory, setShowListCategory] = useState(false);
  const [publicLink, setPublicLink] = useState(false);

  const [centredModal, setCentredModal] = useState(false);
  const toggleShow = () => setCentredModal(!centredModal);
  const dispatch = useDispatch();

  const dataUser = JSON.parse(localStorage.getItem('dataUser'));

  // Default form value
  const [formValue, setFormValue] = useState({
    id_author: dataUser.Id,
    title: '',
    link: '',
    categories: [],
    image: '',
    public: false,
  });

  // Event onchange form 
  const onChangeForm = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  // Event set public link
  const onSetPublicLink = () => {
    setPublicLink(!publicLink);
    setFormValue({ ...formValue, public: publicLink });
  }

  // Event onsubmit form
  const onSubmitForm = async (data) => {
    data.image = data.image || "https://images.unsplash.com/photo-1496440737103-cd596325d314?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80";

    // Validate form value not null 
    if (data.title === '' || data.link === '') return false;
    console.log(data);
    const uploadLink = await linkApi.add(data);
    const linkList = await linkApi.getAll();
    dispatch(update(linkList.data));
  }

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
      };

      reader.readAsDataURL(e.target.files[0]);
    }
  }

  return (
    <div className="box-upload-link">
      <div className="wrap-upload-link d-flex">
        <div className="avatar">
          <Link to={props.href}><img className="img-fluid" src={props.avatar} alt="" /></Link>
        </div>
        <div className="button-show-modal">
          <MDBBtn onClick={() => setScrollableModal(!scrollableModal)}>Bạn muốn chia sẻ gì nào?</MDBBtn>
        </div>

        <MDBModal className="modal-upload-link" show={scrollableModal} getOpenState={(e) => setScrollableModal(e)} tabIndex='-1'>
          <MDBModalDialog scrollable className="modal-upload-link-dialog">
            <MDBModalContent>
              <MDBModalHeader>
                <MDBModalTitle className="text-center">Tạo link</MDBModalTitle>
                <MDBBtn
                  className='btn-close'
                  color='none'
                  onClick={() => setScrollableModal(!scrollableModal)}
                ></MDBBtn>
              </MDBModalHeader>
              <div className="user-info mb-15 d-flex">
                <div className="avatar">
                  <Link to={props.href}><img className="img-fluid" src={props.avatar} alt="" /></Link>
                </div>
                <div className="name">
                  <h3>Quốc Huy</h3>
                  <div className="public">
                    <MDBDropdown>
                      <MDBDropdownToggle color='none' className="btn-public">
                        {!publicLink && <> <i className="fas fa-lock"></i> Riêng tư </>}
                        {publicLink && <> <i className="far fa-globe-europe"></i> Công khai </>}
                      </MDBDropdownToggle>
                      <MDBDropdownMenu className="dropdown-public">
                        {!publicLink && <MDBDropdownItem>
                          <MDBDropdownLink onClick={() => onSetPublicLink()} className="pl-0" href="#"><i className="far fa-globe-europe"></i> Công khai</MDBDropdownLink>
                        </MDBDropdownItem>}
                        {publicLink && <MDBDropdownItem>
                          <MDBDropdownLink onClick={() => onSetPublicLink()} className="pl-0" href="#"><i className="fas fa-lock"></i> Riêng tư</MDBDropdownLink>
                        </MDBDropdownItem>}
                      </MDBDropdownMenu>
                    </MDBDropdown>
                  </div>
                </div>
              </div>

              <MDBModalBody className="formAddCategory">

                <MDBValidation onSubmit={() => onSubmitForm(formValue)} className='row gx-0 gy-3' noValidate>
                  <div className='col-12'>
                    <MDBInput
                      className='bg-light rounded-0'
                      value={formValue.title}
                      name='title'
                      onChange={onChangeForm}
                      id='validationCustom01'
                      required
                      label='Tiêu đề của link'
                      validation='Xin mời nhập tiêu đề!'
                      invalid
                    />
                  </div>
                  <div className='col-12'>
                    <MDBInput
                      className='bg-light rounded-0'
                      value={formValue.link}
                      name='link'
                      onChange={onChangeForm}
                      id='validationCustom02'
                      required
                      label='Nhập link'
                      validation='Xin mời nhập link!'
                      invalid
                    />
                  </div>
                  <div className="form-group formAddCategory__upload">
                    <div className="d-flex align-items-center formAddCategory__upload--btn">
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
                        ""
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
                  <div className="col-12">
                    <MDBBtn type='submit' className="w-100 pt-3 pb-3">Đăng</MDBBtn>
                  </div>
                </MDBValidation>
              </MDBModalBody>
              <MDBModalFooter>
              </MDBModalFooter>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>
      </div>
    </div>
  );
}

export default UpLoadLinkComponent;