'use strict';

import React        from 'react';
import { Link }     from 'react-router';
import { Navicon }  from '../../icons';

const showHideSideBarButton = (props) => {
  return (
    <li>
      <a onClick={()=>props.onMenuClick()}>
        <Navicon
          width="24px"
          height="24px"
        />
      </a>
    </li>
  );
};

showHideSideBarButton.propTypes = {
  label:        React.PropTypes.string.isRequired,
  onMenuClick:  React.PropTypes.func
};

export default showHideSideBarButton;
