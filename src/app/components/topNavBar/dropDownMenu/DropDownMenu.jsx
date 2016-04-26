'use strict';

import React      from 'react';
import { Link }   from 'react-router';

const DropDownMenu = (props) => {
  return (
    <li className="dropdown">
      <a
        className="dropdown-toggle"
        data-toggle="dropdown"
        role="button"
        aria-expanded="false">
        {props.label}
        <span className="caret"></span>
      </a>
      <ul className="dropdown-menu" role="menu">
        {
          props.dropdownMenus.map(
            (dropdownMenu, dropdownMenuIndex) => {
              // a dropdown divider
              if (dropdownMenu.isDivider) {
                return (
                  <li
                    key={dropdownMenuIndex}
                    className="divider">
                  </li>
                );
              }
              // a dropdown menu with onClick callback
              if (dropdownMenu.onMenuClick) {
                return (
                  <Link
                    key={dropdownMenuIndex}
                    to={dropdownMenu.link}
                    onClick={dropdownMenu.onMenuClick}>
                    {dropdownMenu.label}
                  </Link>
                );
              } else {
                // a dropdown menu without onClick callback
                return (
                  <Link
                    key={dropdownMenuIndex}
                    to={dropdownMenu.link}>
                    {dropdownMenu.label}
                  </Link>
                );
              }
            }
          )
        }
      </ul>
    </li>
  );
};

DropDownMenu.propTypes = {
  label:          React.PropTypes.string.isRequired,
  dropdownMenus:  React.PropTypes.arrayOf(
    React.PropTypes.shape({
      label:        React.PropTypes.string,
      link:         React.PropTypes.string,
      isDivider:    React.PropTypes.bool,
      onMenuClick:  React.PropTypes.func
    })
  )
};

export default DropDownMenu;
