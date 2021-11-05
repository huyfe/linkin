import React from 'react';
import PropTypes from 'prop-types';
import FollowerItem from '../FollowerItem';
import "./style.scss";

ListFollower.propTypes = {
    iconFollower: PropTypes.bool,
};

ListFollower.defaultProps = {
    iconFollower: true,
};

function ListFollower(props) {
    return (
        <div className="listFollower">
            <div className="listFollower__item">
                <FollowerItem iconFollower={props.iconFollower} />
            </div>
            <div className="listFollower__item">
                <FollowerItem iconFollower={props.iconFollower} />
            </div>
            <div className="listFollower__item">
                <FollowerItem iconFollower={props.iconFollower} />
            </div>
            <div className="listFollower__item">
                <FollowerItem iconFollower={props.iconFollower} />
            </div>
        </div>
    );
}

export default ListFollower;