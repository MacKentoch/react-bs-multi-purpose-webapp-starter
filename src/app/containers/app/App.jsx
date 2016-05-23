'use strict';

import React, { Component } from 'react';
import { topNavBarModel }   from '../../models/topNavigationBar';
import { leftSidenavModel } from '../../models/leftSidenav';
import { PageContainer }    from '../../containers';
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
        <TopNavBar
          navModel={this.state.topNavBarModel}
          toggleSideMenu={(e)=>this.toggleSideMenu(e)}
        />
        <PageContainer>
          <SideBar sideBarMenus={this.state.leftSideBarModel} />
          <Main>
            {this.props.children}
          </Main>
        </PageContainer>
      </div>
    );
  }

  toggleSideMenu(event) {
    event.preventDefault();
    console.info('shluld toggle menu');
  }
}

App.propTypes = {
  children:   React.PropTypes.node
};

export default App;
