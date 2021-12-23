import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
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
import ModalUploadLink from '../ModalUploadLink';

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

  const dataUser = JSON.parse(localStorage.getItem('dataUser'));
  const user = {
    id: dataUser.Id,
    name: dataUser.Fullname,
    avatar: dataUser.Image,
    slug: dataUser.Slug
  }

  return (
    <div className="box-upload-link">
      <div className="wrap-upload-link d-flex">
        <div className="avatar">
          <Link to={props.href}><img className="img-fluid" src={user.avatar} alt="" /></Link>
        </div>
        <div className="button-show-modal">
          <MDBBtn onClick={() => setScrollableModal(!scrollableModal)}>Bạn muốn chia sẻ gì nào?</MDBBtn>
        </div>
        <ModalUploadLink scrollableModal={scrollableModal} setScrollableModal={setScrollableModal} />

      </div>

    </div>
  );
}

export default UpLoadLinkComponent;