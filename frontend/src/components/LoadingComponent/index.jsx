import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { useSelector } from 'react-redux';


function LoadingComponent() {
    const percent = useSelector(state => state.loading);
    return (
        <div className="loading" style={{ width: percent }}></div>
    );
}

export default LoadingComponent;