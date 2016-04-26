'use strict';

import React        from 'react';
import MenuButton   from '../menuButton/MenuButton.jsx';
import DropDownMenu from '../dropDownMenu/DropDownMenu.jsx';

const RightNav = (props) => {
  return (
    <ul className="nav navbar-nav navbar-right">
      {
        props.rightNavModel.map(
          (menu, menuIndex) => {
            if (menu.type === 'button') {
              return (
                <MenuButton
                  key={'menuButton-' + menuIndex}
                  label={menu.label}
                  buttonLink={menu.buttonLink}
                  onMenuClick={menu.onButtonClick}
                />
              );
            }
            if (menu.type === 'dropdown') {
              return (
                <DropDownMenu
                  key={'menudropDown-' + menuIndex}
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

export default RightNav;
