'use strict';

import React      from 'react';
import { Link }   from 'react-router';

const MenuButton = (props) => {
  console.log('MenuButton props : ', props);

  if (props.onMenuClick) {
    return (
      <Link
        to={props.buttonLink}
        onClick={props.onMenuClick}>
        {props.label}
      </Link>
    );
  } else {
    return (
      <Link to={props.buttonLink}>
        {props.label}
      </Link>
    );
  }
};

MenuButton.propTypes ={
  label:        React.PropTypes.string.isRequired,
  buttonLink:   React.PropTypes.string.isRequired,
  onMenuClick:  React.PropTypes.func
};

export default MenuButton;
