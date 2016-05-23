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
import classNames           from 'classnames';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topNavBarModel:       topNavBarModel,
      leftSideBarModel:     leftSidenavModel,

      leftSideBarAnimated:  true,
      leftSideBarShow:      true,
      leftSideBarClasses:   {
        'col-sm-3': true,
        'col-md-2': true,
        'sidebar':  true
      }
    };
  }

  render() {
    const leftSideBarClasses = classNames({
      ...this.state.leftSideBarClasses,
      'sideBarAnimated': this.state.leftSideBarAnimated,
      'sideBarHide': !this.state.leftSideBarShow,
      'sideBarShow': this.state.leftSideBarShow
    });

    return (
      <div>
        <TopNavBar
          navModel={this.state.topNavBarModel}
          toggleSideMenu={(e)=>this.toggleSideMenu(e)}
        />
        <PageContainer>
          <SideBar
            sideBarMenus={this.state.leftSideBarModel}
            classes={leftSideBarClasses}/>
          <Main>
            {this.props.children}
          </Main>
        </PageContainer>
      </div>
    );
  }

  toggleSideMenu(event) {
    // event.preventsDefault();
    this.setState({leftSideBarShow: !this.state.leftSideBarShow});
    // console.info('should toggle menu');
  }
}

App.propTypes = {
  children:   React.PropTypes.node
};

export default App;
