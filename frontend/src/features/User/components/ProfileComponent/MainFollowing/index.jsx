import React from 'react';
import PropTypes from 'prop-types';
import ListFollower from '../ListFollower';
import SearchFollower from '../SearchFollower';

MainFollowing.propTypes = {
    iconFollower: PropTypes.bool,
};

MainFollowing.defaultProps = {
    iconFollower: false,
};

function MainFollowing(props) {
    return (
        <>
            <SearchFollower />
            <ListFollower iconFollower={props.iconFollower} />
        </>
    );
}

export default MainFollowing;