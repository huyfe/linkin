import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import Item from '../../../../components/Item/index';
import {
    MDBBtn, MDBModal, MDBModalDialog, MDBModalContent, MDBModalBody, MDBModalFooter, MDBModalHeader, MDBModalTitle,
    MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem, MDBDropdownLink
} from 'mdb-react-ui-kit';
import {
    MDBValidation,
    MDBInput,
    MDBCheckbox
} from 'mdb-react-ui-kit';

ManagerGroupComponent.propTypes = {

};

function ManagerGroupComponent(props) {
    const [scrollableModal, setScrollableModal] = useState(false);

    const [centredModal, setCentredModal] = useState(false);
    const toggleShow = () => setCentredModal(!centredModal);

    const listManagerGroupData = [
        { image: 'https://tuhoclaptrinh.edu.vn/upload/post/16/10/18/tu-hoc-lap-trinh-html-va-css-462993.jpg', href: "/", name: "Cộng đồng Frontend Developer Việt Nam" },
        { image: 'https://aventislearning.com/wp-content/uploads/2020/06/Node.js.png', href: "/", name: "Cộng đồng Nodejs" },
        { image: 'https://laptrinhcanban.com/python/nhap-mon-lap-trinh-python/gioi-thieu-python/python-la-gi/Python.jpg', href: "/", name: "Cộng đồng Backend Developer" }
    ];
    const listGroupManager = listManagerGroupData.map(group => {
        return (
            <Item image={group.image} name={group.name} href={group.href}></Item>
        );
    });

    return (
        <div className="group-sidebar-manager">
            <h3>Nhóm bạn quản lí</h3>
            <ul>
                {listGroupManager}
            </ul>
            <div className="btn__join">
                <div className="box-create-group">
                    <div className="button-show-modal">
                        <MDBBtn onClick={() => setScrollableModal(!scrollableModal)}>Tạo nhóm mới<i className="far fa-plus"></i></MDBBtn>
                    </div>

                    <MDBModal className="modal-upload-link" show={scrollableModal} getOpenState={(e) => setScrollableModal(e)} tabIndex='-1'>
                        <MDBModalDialog scrollable className="modal-upload-link-dialog">
                            <MDBModalContent>
                                <MDBModalHeader>
                                    <MDBModalTitle className="text-center">Tạo nhóm</MDBModalTitle>
                                    <MDBBtn
                                        className='btn-close'
                                        color='none'
                                        onClick={() => setScrollableModal(!scrollableModal)}
                                    ></MDBBtn>
                                </MDBModalHeader>
                                <div className="user-info mb-15 d-flex">
                                    {/* <div className="avatar">
                                            <Link to={props.href}><img className="img-fluid" src={props.avatar} alt="" /></Link>
                                        </div> */}
                                    <div className="name">
                                        <div className="public">
                                            <MDBDropdown>
                                                <MDBDropdownToggle color='none' className="btn-public"><i className="fas fa-lock"></i> Riêng tư</MDBDropdownToggle>
                                                <MDBDropdownMenu className="dropdown-public">
                                                    <MDBDropdownItem>
                                                        <MDBDropdownLink className="pl-0" href="#"><i className="far fa-globe-europe"></i> Công khai</MDBDropdownLink>
                                                    </MDBDropdownItem>
                                                </MDBDropdownMenu>
                                            </MDBDropdown>
                                        </div>
                                    </div>
                                </div>

                                <MDBModalBody>

                                    <MDBValidation className='row gx-0 gy-3' noValidate>
                                        {/* <MDBValidation onSubmit={() => onSubmitForm(formValue)} className='row gx-0 gy-3' noValidate> */}
                                        <div className='col-12'>
                                            <MDBInput
                                                className='bg-light rounded-0'
                                                value=""
                                                name='title'
                                                onChange=""
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
                                                value=""
                                                name='link'
                                                onChange=""
                                                id='validationCustom02'
                                                required
                                                label='Nhập link'
                                                validation='Xin mời nhập link!'
                                                invalid
                                            />
                                        </div>
                                        <div className='col-12'>
                                            <MDBInput
                                                className='bg-light rounded-0'
                                                value=""
                                                name='categories'
                                                onChange=""
                                                id='validationCustom03'
                                                label='Danh mục'
                                            />
                                        </div>
                                        <div className="col-12">
                                            <MDBBtn type='submit' className="w-100 pt-3 pb-3">Tạo Nhóm</MDBBtn>
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
        </div>
    );
}

export default ManagerGroupComponent;