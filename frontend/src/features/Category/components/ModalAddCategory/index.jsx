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
import ImageUploading from "react-images-uploading";

ModalAddCategory.propTypes = {};

function ModalAddCategory(props) {
  const [centredModal, setCentredModal] = useState(false);

  const toggleShow = () => setCentredModal(!centredModal);

  // Uploading image
  const [images, setImages] = useState([]);
  const maxNumber = 1;

  const onChangeImage = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <>
      <MDBBtn onClick={toggleShow}>Vertically centered modal</MDBBtn>

      <MDBModal
        tabIndex="-1"
        show={centredModal}
        getOpenState={(e) => setCentredModal(e)}
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
                {/* <div className="form-group formAddCategory__image">
                  <ImageUploading
                    multiple
                    value={images}
                    onChange={onChangeImage}
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
                        <MDBBtn
                          color="link"
                          style={isDragging ? { color: "red" } : undefined}
                          onClick={onImageUpload}
                          {...dragProps}
                        >
                          <i className="fas fa-images"></i>
                          Ảnh
                        </MDBBtn>
                        &nbsp;
                        {imageList.map((image, index) => (
                          <div key={index} className="image-item">
                            <img src={image["data_url"]} alt="" width="100" />
                            <div className="image-item__btn-wrapper">
                              <MDBBtn
                                className="d-flex justify-content-between align-items-center"
                                floating
                                color="link"
                                onClick={() => onImageRemove(index)}
                              >
                                <i className="far fa-times"></i>
                              </MDBBtn>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </ImageUploading>
                </div> */}
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
              <MDBBtn onClick={toggleShow}>Hủy</MDBBtn>
              <MDBBtn>Đồng ý</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}

export default ModalAddCategory;
