'use strict';

import React, { Component } from 'react';
import { topNavBarModel }   from '../../models/topNavigationBar';
import { leftSidenavModel }      from '../../models/leftSidenav';
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
      leftSideBarModel: leftSidenavModel
    };
  }

  render() {
    return (
      <div>
        <TopNavBar navModel={this.state.topNavBarModel} />
        <PageContainer>
          <SideBar sideBarMenus={this.state.leftSideBarModel} />
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
