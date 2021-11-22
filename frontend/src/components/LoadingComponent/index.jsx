import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { useSelector } from 'react-redux';

function LoadingComponent() {
    const percent = useSelector(state => state.loading);
    const [hideLoading, setHideLoading] = useState(false);
    useEffect(() => {
        if (percent === 101) {
            setHideLoading(true);
        }
        else {
            setHideLoading(false);
        }
    }, [percent]);
    return (
        <>
            {!hideLoading && <div className="loading" style={{ width: `${percent}%` }}></div>}
        </>
    );
}

export default LoadingComponent;