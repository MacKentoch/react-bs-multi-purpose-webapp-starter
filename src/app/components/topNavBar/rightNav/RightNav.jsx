'use strict';

import React      from 'react';
import MenuButton from '../menuButton/MenuButton.jsx';

const RightNav = (props) => {
  return (
    <ul className="nav navbar-nav navbar-right">
      {
        props.rightNavModel.map(
          (menu, menuIndex) => {
            if (menu.type === 'button') {
              return (
                <MenuButton
                  key={menuIndex}
                  label={menu.label}
                  link={menu.link}
                  onMenuClick={menu.onButtonClick}
                />
              );
            }
            if () {
              return (
                <li class="dropdown">
                  <a
                    href="#"
                    class="dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-expanded="false">
                    {menu.label}
                    <span class="caret"></span>
                  </a>
                  <ul class="dropdown-menu" role="menu">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li class="divider"></li>
                    <li><a href="#">Separated link</a></li>
                    <li class="divider"></li>
                    <li><a href="#">One more separated link</a></li>
                  </ul>
                </li>
              );
            }
            return null;
          }
        )
      }
    </ul>
  );
};

RightNav.propTypes = {
  rightNavModel:  React.PropTypes.arrayOf(
    React.PropTypes.shape({
      // commun
      label:          React.PropTypes.string.isRequired,
      type:           React.PropTypes.oneOf(['button', 'dropdown']).isRequired,
      // button
      buttonLink:     React.PropTypes.string,
      onButtonClick:  React.PropTypes.func,
      // dropdown
      dropdownMenus:  React.PropTypes.arrayOf(
        React.PropTypes.shape(
          label:        React.PropTypes.string,
          link:         React.PropTypes.string,
          onMenuClick:  React.PropTypes.func
        )
      )
    })
  ).isRequired
};

export default RightNav;
