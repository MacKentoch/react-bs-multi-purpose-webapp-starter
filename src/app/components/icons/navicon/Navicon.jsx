'use strict';

import React, {Component} from 'react';

class Navicon extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      width,
      height
    } = this.props;

    return (
      <svg
        width="24px"
        height="24px"
        viewBox="0 0 512 512"
        fill="#fff">
        <g>
          <rect x="96" y="241" width="320" height="32"/>
          <rect x="96" y="145" width="320" height="32"/>
          <rect x="96" y="337" width="320" height="32"/>
        </g>
      </svg>
    );
  }
}

Navicon.propTypes = {
  width:  React.PropTypes.string,
  height: React.PropTypes.string
};

Navicon.defaultProps = {
  width:  '24px',
  height: '24px'
};

export default Navicon;
