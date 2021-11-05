import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { Link } from "react-router-dom";

FollowerItem.propTypes = {
  iconFollower: PropTypes.bool,
};

FollowerItem.defaultProps = {
  iconFollower: true,
};

function FollowerItem(props) {
  return (
    <div className="d-flex align-items-center followerItem">
      <Link to="/">
        <img src="../images/Users/avatar.jpg" alt="" />
      </Link>
      <h3>Quốc Huy</h3>
      {props.iconFollower ? (
        <button>
          <span className="icon-user-voice"></span>
        </button>
      ) : (
        <button>
          <span className="icon-unfollow"></span>
        </button>
      )}
    </div>
  );
}

export default FollowerItem;
