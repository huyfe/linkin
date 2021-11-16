import React from 'react';
import PropTypes from 'prop-types';

import ItemMyGroupComponent from '../ItemMyGroupComponent/index';
import './style.scss';


MyGroupComponent.propTypes = {
    listMyGroup: PropTypes.array,
};
MyGroupComponent.propTypes = {
    listMyGroup: [],
};

function MyGroupComponent({ listMyGroup }) {
    return (
      <div className="listGroup">
        {listMyGroup.map((group) => (
          <div className="listGroup__item" key={group._id} >
            <ItemMyGroupComponent groupItem={group} />
          </div>
        ))}
      </div>
    );
  }

export default MyGroupComponent;