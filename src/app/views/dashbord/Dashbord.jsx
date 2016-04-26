'use strict';

import React, { Component }      from 'react';
import {
  PageContainer
}             from '../../containers';

import classNames from 'classnames';
import { Link }   from 'react-router';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.init();
  }

  init() {
    this.state = {
      animated    : true,
      viewEnters  : false
    };
  }

  componentWillMount() {
    this.state = {
      viewEnters  : true
    };
  }

  processViewAnimationClasses() {
    const homeViewClasses = classNames({
      'animatedViews'    : this.state.animated,
      'view-enter'       : this.state.viewEnters
    });
    return homeViewClasses;
  }

  render() {
    return(
      <div
        key="dashboardView"
        className={this.processViewAnimationClasses()}>

      </div>
    );
  }
}

Dashboard.propTypes= {
  actions: React.PropTypes.object
};

export default Dashboard;
