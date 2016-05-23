'use strict';

import React        from 'react';
import { Navicon }  from '../../icons';

const showHideSideBarButton = (props) => {
  return (
    <li>
      <button
        onClick={props.onMenuClick}>
        <Navicon
          width="24px"
          height="24px"
        />
    </button>
    </li>
  );
};

showHideSideBarButton.propTypes = {
  label:        React.PropTypes.string.isRequired,
  onMenuClick:  React.PropTypes.func
};

export default showHideSideBarButton;
