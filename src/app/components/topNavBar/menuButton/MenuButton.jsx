'use strict';

import React      from 'react';
import { Link }   from 'react-router';

const MenuButton = (props) => {
  if (props.onMenuClick) {
    return (
      <Link
        to={props.link}
        onClick={props.onMenuClick}>
        {props.label}
      </Link>
    );
  } else {
    return (
      <Link to={props.link}>
        {props.label}
      </Link>
    );
  }
};

MenuButton.propTypes ={
  label:        React.PropTypes.string.isRequired,
  link:         React.PropTypes.string.isRequired,
  onMenuClick:  React.PropTypes.func
};

export default MenuButton;
