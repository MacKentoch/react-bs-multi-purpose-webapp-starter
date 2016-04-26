'use strict';

import React, { Component } from 'react';
import { Link }             from 'react-router';
import HumburgerMenu        from './humburgerMenu/HumburgerMenu.jsx';
import NavBarBrand          from './navBarBrand/NavBarBrand.jsx';

class TopNavBar extends Component {

  renderLeftNavButton() {
    if (this.props.navModel.leftLinks) {
      const leftNavButton = this.props.navModel.leftLinks.map((aLinkBtn, index) => {
        return (
          <li key={index}>
            <Link
              to={aLinkBtn.link}
              onClick={(ev) => this.props.handleLeftNavItemClick(ev, aLinkBtn.view)}>
              {aLinkBtn.label}
            </Link>
          </li>
        );
      });
      return  leftNavButton;
    }
    return null;
  }

  renderRightNavButton() {
    if (this.props.navModel.rightLinks) {
      const rightNavButton = this.props.navModel.rightLinks.map((aLinkBtn, index) => {
        return (
          <li key={index}>
            <Link
              to={aLinkBtn.link}
              onClick={(ev) => this.props.handleRightNavItemClick(ev, aLinkBtn.view)}>
                {aLinkBtn.label}
            </Link>
          </li>
        );
      });
      return  rightNavButton;
    }
    return null;
  }

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="containersCustom">
          <div className="navbar-header">
            <HumburgerMenu />
            <NavBarBrand brand={this.props.brand} />
          </div>
          
          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              {this.renderLeftNavButton()}
            </ul>
            <ul className="nav navbar-nav navbar-right">
              {this.renderRightNavButton()}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

TopNavBar.propTypes = {
  brand:                    React.PropTypes.string,
  handleLeftNavItemClick:   React.PropTypes.func,
  handleRightNavItemClick:  React.PropTypes.func,
  navModel:                 React.PropTypes.shape({
    leftLinks:  React.PropTypes.arrayOf(
      React.PropTypes.shape({
        label: React.PropTypes.string.isRequired,
        link : React.PropTypes.string.isRequired
      })
    ).isRequired,
    rightLinks:  React.PropTypes.arrayOf(
      React.PropTypes.shape({
        label: React.PropTypes.string.isRequired,
        link : React.PropTypes.string.isRequired
      })
    ).isRequired
  })
};

TopNavBar.defaultProps  = {
  brand  : 'brand'
};

export default TopNavBar;
