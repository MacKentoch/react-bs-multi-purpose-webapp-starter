'use strict';

import React      from 'react';
import MenuButton from '../menuButton/MenuButton.jsx';

const RightNav = (props) => {
  return (
    <ul className="nav navbar-nav navbar-right">
      {
        props.rightNavModel.map(
          (menu, menuIndex) => {
            return (
              <MenuButton 
                key={menuIndex}
                label={menu.label}
                link={menu.link}
                onMenuClick={menu.onMenuClick}
              />
            );
          }
        )
      }
    </ul>
  );
};

RightNav.propTypes ={
  rightNavModel:  React.PropTypes.arrayOf(
    React.PropTypes.shape({
      label:        React.PropTypes.string.isRequired,
      link:         React.PropTypes.string.isRequired,
      onMenuClick:  React.PropTypes.func,
      type:         React.PropTypes.oneOf(['button', 'dropdown']).isRequired
    })
  ).isRequired
};

export default RightNav;
