import React from 'react';
import PropTypes from 'prop-types';
import AdCatHome from './components/AdCatHome';

AdminCategory.propTypes = {
    
};

function AdminCategory(props) {
    return (
        <section id="admincat__page">
            <AdCatHome/>
        </section>
    );
}

export default AdminCategory;