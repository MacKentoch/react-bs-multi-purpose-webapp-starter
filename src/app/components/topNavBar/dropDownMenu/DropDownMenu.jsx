'use strict';

import React      from 'react';
import { Link }   from 'react-router';

const DropDownMenu = (props) => {
  return (
    <Link to={props.link}>
      {props.label}
    </Link>
  );
};

DropDownMenu.propTypes = {
  label:          React.PropTypes.string.isRequired,
  dropdownMenus:  React.PropTypes.arrayOf(
    React.PropTypes.shape(
      label:        React.PropTypes.string,
      link:         React.PropTypes.string,
      onMenuClick:  React.PropTypes.func
    )
  )
};

export default DropDownMenu;
