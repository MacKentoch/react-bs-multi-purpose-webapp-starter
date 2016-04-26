'use strict';

import React, { Component } from 'react';
import topNavBarModel       from '../../models/topNavigationBar.model.json';
import leftSideBarModel     from '../../models/leftSidenav.model.json';
import {
  PageContainer
}                           from '../../containers';
import {
  TopNavBar,
  SideBar,
  Main
}                           from '../../components';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topNavBarModel:   topNavBarModel,
      leftSideBarModel: leftSideBarModel
    };
  }

  render() {
    return (
      <div>
        <TopNavBar />
        <PageContainer>
          <SideBar />
          <Main>
            {this.props.children}
          </Main>
        </PageContainer>
      </div>
    );
  }
}

App.propTypes = {
  children:   React.PropTypes.node,
  history:    React.PropTypes.object,
  location:   React.PropTypes.object
};

export default App;
