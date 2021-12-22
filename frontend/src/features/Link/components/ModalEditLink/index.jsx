import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import {
    MDBBtn, MDBModal, MDBModalDialog, MDBModalContent, MDBModalBody, MDBModalFooter, MDBModalHeader, MDBModalTitle,
    MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem, MDBDropdownLink
} from 'mdb-react-ui-kit';
import {
    MDBValidation,
    MDBInput,
    MDBCheckbox
} from 'mdb-react-ui-kit';
import "./style.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import linkApi from "../../../../api/linkApi";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../../linkSlice";
import { update as updateLoading } from "../../../../components/LoadingComponent/loadingSlice";
import CopyToClipboard from "react-copy-to-clipboard";
import categoriesApi from "../../../../api/categoriesApi";
import { updateCatOfUser } from "../../../Category/categoriesUserSlice";
import { updateLinkOfUser } from "../../../Link/linkSlice";

function ModalEditLink({ showModalEdit, setShowModalEdit, linkEdit }) {
    // State
    const dispatch = useDispatch();
    // Default form value
    const [formValue, setFormValue] = useState(linkEdit);

    const [publicLink, setPublicLink] = useState(linkEdit.public);

    const [showErr, setShowErr] = useState(false);
    const [imgErr, setImgErr] = useState(false);

    const [imageUpload, setImageUpload] = useState(linkEdit.image);
    const [isImageUpload, setIsImageUpload] = useState(true);

    // Events
    // Event set public link
    const onSetPublicLink = () => {
        setPublicLink(!publicLink);
        setFormValue({ ...formValue, public: !publicLink });
        console.log(publicLink);
    }

    const showPopUp = () => {
        const message = <div className="message show">Cập nhật thành công</div>;
        ReactDOM.render((message), document.getElementById("popUp"));
        setTimeout(() => {
            ReactDOM.render(null, document.getElementById("popUp"));
        }, 1500);
    }

    // Event handle image upload  
    const handleImageUploadChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            if (e.target.files[0].size > 75 * 1024) {
                // 75*1024  = 75kb
                setImageUpload(linkEdit.image);
                setFormValue({ ...formValue, image: linkEdit.image });
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

    // Event on submit form edit 
    const onSubmitForm = async (data) => {

        // Validate form value not null 
        if (data.title === '' || data.link === '') return false;
        setShowModalEdit(!showModalEdit);

        const uploadLink = await linkApi.update(data);
        const linkList = await linkApi.getAll();
        dispatch(update(linkList.data));
        showPopUp();
    }

    // Event onchange form 
    const onChangeForm = (e) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value });
    };

    return (

        <MDBModal
            className="modal-upload-link"
            show={showModalEdit}
            getOpenState={(e) => {
                if (!setShowModalEdit) return;
                setShowModalEdit(e);
            }}
            tabIndex='-1' >
            <MDBModalDialog scrollable className="modal-upload-link-dialog">
                <MDBModalContent>
                    <MDBModalHeader>
                        <MDBModalTitle className="text-center">Cập nhật link</MDBModalTitle>
                        <MDBBtn
                            className='btn-close'
                            color='none'
                            onClick={() => setShowModalEdit(!showModalEdit)}
                        ></MDBBtn>

                    </MDBModalHeader>


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
                                    label="Tiêu đề"
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
                                    label='Link'
                                    validation='Xin mời nhập link!'
                                    invalid
                                />
                            </div>
                            <div className="col-12">
                                <div className="user-info">
                                    <div className="name">
                                        <div className="public">
                                            <MDBDropdown >
                                                <MDBDropdownToggle color='none' type="button" className="btn-public">
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
                            </div>
                            <div className="form-group formAddCategory__upload">
                                <div className="d-flex align-items-center formAddCategory__upload--btn">
                                    <h3>Chọn hình</h3>
                                    <label
                                        htmlFor={"img-uploadAdd-link" + linkEdit.id}
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
                                    id={"img-uploadAdd-link" + linkEdit.id}
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
                                <MDBBtn type='submit' className="w-100 pt-3 pb-3 mx-0">Cập nhật</MDBBtn>
                            </div>
                        </MDBValidation>
                    </MDBModalBody>
                    <MDBModalFooter>
                    </MDBModalFooter>
                </MDBModalContent>
            </MDBModalDialog>
        </MDBModal>
    );
}

export default ModalEditLink;
