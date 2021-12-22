
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import './style.scss';
import ItemHeadingComponent from '../ItemHeadingComponent';
import { useDispatch, useSelector } from 'react-redux';
import groupApi from './../../../../api/groupApi';
import { useParams } from "react-router-dom";

HeadingGroupComponent.propTypes = {

};

function HeadingGroupComponent(props) {
    return (
        <div className="group-sidebar-follow">
            <div className="heading__group">
                <ItemHeadingComponent />
            </div>
        </div>
    );
}

export default HeadingGroupComponent;







