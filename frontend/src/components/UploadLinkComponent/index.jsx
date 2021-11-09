import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import {
    MDBBtn, MDBModal, MDBModalDialog, MDBModalContent, MDBModalBody, MDBModalFooter, MDBModalHeader, MDBModalTitle,
    MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem, MDBDropdownLink
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
// import { Gluejar } from '@charliewilco/gluejar';
import ImageUploading from 'react-images-uploading';

UpLoadLinkComponent.propTypes = {
    avatar: PropTypes.string,
    href: PropTypes.string,
};

function UpLoadLinkComponent(props) {
    const [scrollableModal, setScrollableModal] = useState(false);

    const [centredModal, setCentredModal] = useState(false);
    const toggleShow = () => setCentredModal(!centredModal);

    // Uploading image
    const [images, setImages] = React.useState([]);
    const maxNumber = 1;

    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };

    return (
        <div className="box-upload-link">
            <div className="wrap-upload-link d-flex">
                <div className="avatar">
                    <Link to={props.href}><img className="img-fluid" src={props.avatar} alt="" /></Link>
                </div>
                <div className="button-show-modal">
                    <MDBBtn onClick={() => setScrollableModal(!scrollableModal)}>Bạn muốn chia sẻ gì nào?</MDBBtn>
                    {/* <MDBBtn onClick={toggleShow}>Bạn muốn chia sẻ gì nào?</MDBBtn> */}
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
                                            <MDBDropdownToggle color='none' className="btn-public"><i class="fas fa-lock"></i> Riêng tư</MDBDropdownToggle>
                                            <MDBDropdownMenu className="dropdown-public">
                                                <MDBDropdownItem>
                                                    <MDBDropdownLink className="pl-0" href="#"><i class="far fa-globe-europe"></i> Công khai</MDBDropdownLink>
                                                </MDBDropdownItem>
                                            </MDBDropdownMenu>
                                        </MDBDropdown>
                                    </div>
                                </div>
                            </div>
                            <MDBModalBody>

                                <form action="#" className="form-upload-link">
                                    <div className="form-group mb-15">
                                        <input type="text" className="form-control" name="linkTitle" placeHolder="Tiêu đề của link" />
                                    </div>
                                    <div className="form-group mb-15">
                                        <input type="text" className="form-control" name="linkUrl" placeHolder="Nhập url" />
                                    </div>
                                    <div className="form-group mb-15">
                                        <input type="text" className="form-control" name="linkUrl" placeHolder="Danh mục" />
                                    </div>
                                    <div className="form-group form-group-image mb-15">
                                        <ImageUploading
                                            multiple
                                            value={images}
                                            onChange={onChange}
                                            maxNumber={maxNumber}
                                            dataURLKey="data_url"
                                        >
                                            {({
                                                imageList,
                                                onImageUpload,
                                                onImageRemoveAll,
                                                onImageUpdate,
                                                onImageRemove,
                                                isDragging,
                                                dragProps,
                                            }) => (
                                                // write your building UI
                                                <div className="upload__image-wrapper">
                                                    <MDBBtn color='link'
                                                        style={isDragging ? { color: 'red' } : undefined}
                                                        onClick={onImageUpload}
                                                        {...dragProps}
                                                    >
                                                        <i class="fas fa-images"></i>
                                                        Ảnh
                                                    </MDBBtn>
                                                    &nbsp;
                                                    {imageList.map((image, index) => (
                                                        <div key={index} className="image-item">
                                                            <img src={image['data_url']} alt="" width="100" />
                                                            <div className="image-item__btn-wrapper">
                                                                <MDBBtn className="d-flex justify-content-between align-items-center" floating color='link' onClick={() => onImageRemove(index)}><i class="far fa-times"></i></MDBBtn>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </ImageUploading>
                                    </div>
                                    {/* <div className="form-group form-box-image">
                                        <textarea className="w-100" name="" id="" cols="30" rows="10" placeHolder="Paste image here"></textarea>
                                        <Gluejar onPaste={files => console.log(files)} onError={err => console.error(err)}>
                                            {({ images }) =>
                                                images.length > 0 &&
                                                images.map(image => <img src={image} key={image} alt={`Pasted: ${image}`} />)
                                            }
                                        </Gluejar>
                                    </div> */}
                                </form>
                            </MDBModalBody>
                            <MDBModalFooter>
                                <MDBBtn className="w-100 pt-3 pb-3">Đăng</MDBBtn>
                            </MDBModalFooter>
                        </MDBModalContent>
                    </MDBModalDialog>
                </MDBModal>
            </div>
        </div>
    );
}

export default UpLoadLinkComponent;