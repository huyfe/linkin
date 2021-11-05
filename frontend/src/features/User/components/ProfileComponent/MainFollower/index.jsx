import React from 'react';
import PropTypes from 'prop-types';
import ListFollower from '../ListFollower';
import SearchFollower from '../SearchFollower';

MainFollower.propTypes = {
    iconFollower: PropTypes.bool,
};

MainFollower.defaultProps = {
    iconFollower: true,
};

function MainFollower(props) {
    return (
        <>
            <SearchFollower />
            <ListFollower iconFollower={props.iconFollower} />
        </>
    );
}

export default MainFollower;