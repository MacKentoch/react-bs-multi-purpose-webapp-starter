'use strict';

import React      from 'react';
import { Link }   from 'react-router';

const MenuButton = (props) => {
  if (props.onMenuClick) {
    return (
      <li>
        <Link
          to={props.buttonLink}
          onClick={props.onMenuClick}>
          {props.label}
        </Link>
      </li>
    );
  } else {
    return (
      <li>
        <Link to={props.buttonLink}>
          {props.label}
        </Link>
      </li>
    );
  }
};

MenuButton.propTypes ={
  label:        React.PropTypes.string.isRequired,
  buttonLink:   React.PropTypes.string.isRequired,
  onMenuClick:  React.PropTypes.func
};

export default MenuButton;
