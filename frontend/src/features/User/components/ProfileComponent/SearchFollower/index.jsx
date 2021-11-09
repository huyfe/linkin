import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

SearchFollower.propTypes = {};

function SearchFollower(props) {
    return (
        <div className="d-flex align-items-center searchFollower">
            <h3>50 Người</h3>
            <div className="searchFollower__group">
                <label
                    htmlFor="searchFollower"
                    className="d-flex justify-content-end align-items-center"
                >
                    <i class="fal fa-search"></i>
                </label>
                <input id="searchFollower" type="search" />
            </div>
        </div>
    );
}

export default SearchFollower;
