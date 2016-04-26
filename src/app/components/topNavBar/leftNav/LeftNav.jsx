'use strict';

import React        from 'react';
import MenuButton   from '../menuButton/MenuButton.jsx';
import DropDownMenu from '../menuButton/MenuButton.jsx';

const LeftNav = (props) => {
  return (
    <ul className="nav navbar-nav">
      {
        props.leftNavModel.map(
          (menu, menuIndex) => {
            if (menu.type === 'button') {
              return (
                <MenuButton
                  key={menuIndex}
                  label={menu.label}
                  buttonLink={menu.buttonLink}
                  onMenuClick={menu.onButtonClick}
                />
              );
            }
            if (menu.type === 'dropdown') {
              return (
                <DropDownMenu
                  label={menu.label}
                  dropdownMenus={menu.dropdownMenus}
                />
              );
            }
            return null;
          }
        )
      }
    </ul>
  );
};

LeftNav.propTypes = {
  leftNavModel:  React.PropTypes.arrayOf(
    React.PropTypes.shape({
      // commun
      label:          React.PropTypes.string.isRequired,
      type:           React.PropTypes.oneOf(['button', 'dropdown']).isRequired,
      // button
      buttonLink:     React.PropTypes.string,
      onButtonClick:  React.PropTypes.func,
      // dropdown
      dropdownMenus:  React.PropTypes.arrayOf(
        React.PropTypes.shape({
          label:        React.PropTypes.string,
          link:         React.PropTypes.string,
          isDivider:    React.PropTypes.bool,
          onMenuClick:  React.PropTypes.func
        })
      )
    })
  ).isRequired
};

export default LeftNav;
