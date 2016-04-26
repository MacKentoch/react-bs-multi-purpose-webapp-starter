'use strict';

import React, { Component }      from 'react';
import classNames from 'classnames';

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
        <h1>
          DASHBOARD
        </h1>
      </div>
    );
  }
}

Dashboard.propTypes= {
  actions: React.PropTypes.object
};

export default Dashboard;
