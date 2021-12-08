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

    const [centredModal, setCentredModal] = useState(false);
    const toggleShow = () => setCentredModal(!centredModal);
    const dispatch = useDispatch();

    // Default form value
    const [formValue, setFormValue] = useState({
        title: '',
        link: '',
        categories: [],
        image: '',
        public: true,
    });

    // Event onchange form 
    const onChangeForm = (e) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value });
    };

    // Event handle change checkbox categories
    const handleChangeCheckbox = (e) => {
        const isChecked = e.target.checked;

        // If checkbox is checked then add category to state form
        if (isChecked) {
            let categories = formValue.categories;
            categories.push({ id: e.target.value, name: e.target.name });
            setFormValue({ ...formValue, categories: categories });
            console.log(formValue);
        }

        // Else remove category from state form
        else {
            let categories = formValue.categories;
            var index = categories.findIndex(function (obj) {
                return obj.id === e.target.value;
            })
            if (index !== -1) categories.splice(index, 1);
            setFormValue({ ...formValue, categories: categories });
            console.log(formValue);
        }
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

    // Get categories from state
    const listCategoryData = useSelector(state => state.categoriesUser);
    console.log(listCategoryData);
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
                                    <div className='col-12'>
                                        {/* <MDBInput
                                            className='bg-light rounded-0'
                                            autoComplete="off"
                                            value={formValue.categories}
                                            name='categories'
                                            onChange={onChangeForm}
                                            onFocus={() => setShowListCategory(true)}
                                            onBlur={() => setShowListCategory(false)}
                                            id='validationCustom03'
                                            label='Danh mục'
                                        /> */}
                                        <label htmlFor="" className="mb-2">Danh mục</label>
                                        <div className="checkbox-categories" style={{ minWidth: '22rem' }}>
                                            {
                                                listCategoryData?.map(cat => {
                                                    return (
                                                        <MDBCheckbox onChange={handleChangeCheckbox} className="mb-2" key={cat._id} name={cat.title} id={cat._id} value={cat._id} label={cat.title} inline />
                                                    )
                                                })
                                            }
                                        </div>
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