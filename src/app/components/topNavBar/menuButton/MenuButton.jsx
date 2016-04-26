'use strict';

import React      from 'react';
import { Link }   from 'react-router';

const MenuButton = (props) => {
  if (props.onMenuClick) {
    return (
      <li>
        <Link
          to={props.buttonLink ? props.buttonLink : '/'}
          onClick={props.onMenuClick}>
          {props.label}
        </Link>
      </li>
    );
  } else {
    return (
      <li>
        <Link to={props.buttonLink ? props.buttonLink : '/'}>
          {props.label}
        </Link>
      </li>
    );
  }
};

MenuButton.propTypes ={
  label:        React.PropTypes.string.isRequired,
  buttonLink:   React.PropTypes.string,
  onMenuClick:  React.PropTypes.func
};

export default MenuButton;
