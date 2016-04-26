'use strict';

import React, { Component } from 'react';
import HumburgerMenu        from './humburgerMenu/HumburgerMenu.jsx';
import NavBarBrand          from './navBarBrand/NavBarBrand.jsx';
import RightNav             from './rightNav/RightNav.jsx';
import LeftNav              from './leftNav/LeftNav.jsx';
import SearchForm           from './searchForm/SearchForm.jsx';

class TopNavBar extends Component {

  handlesSubmitSearch(value) {
    console.info(`searching value = ${value}`);
  }

  render() {
    const navModel      = this.props.navModel;
    const hasSearchForm = Object.prototype.hasOwnProperty.call(navModel, 'searchForm');
    const hasLeftNav    = navModel.leftNav  && navModel.leftNav.length  > 0;
    const hasRightNav   = navModel.rightNav && navModel.rightNav.length > 0;

    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <HumburgerMenu />
            <NavBarBrand brand={navModel.brand} />
        </div>

          <div
            id="navbar"
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1">
            {
              hasLeftNav &&
              <LeftNav
                leftNavModel={navModel.leftNav}
              />
            }
            {
              hasRightNav &&
              <RightNav
                rightNavModel={navModel.rightNav}
              />
            }
            {
              hasSearchForm &&
              <SearchForm
                position={''}
                placeHolder={''}
                submitSearch={(value)=>this.handlesSubmitSearch(value)}
              />
            }
          </div>
        </div>
      </nav>
    );
  }
}

TopNavBar.propTypes = {
  navModel: React.PropTypes.shape({
    brand:      React.PropTypes.string,

    searchForm: React.PropTypes.shape({
      position:     React.PropTypes.oneOf(['navbar-left', 'navbar-right']),
      placeHolder:  React.PropTypes.string
    }),

    leftNav:  React.PropTypes.arrayOf(
      React.PropTypes.shape({
        // common
        label:          React.PropTypes.string.isRequired,
        type:           React.PropTypes.oneOf(['button', 'dropdown']).isRequired,
        // button
        buttonLink:     React.PropTypes.string,
        onButtonClick:  React.PropTypes.func,
        // dropdown
        dropdownMenus:  React.PropTypes.arrayOf(
          React.PropTypes.shape({
            label:        React.PropTypes.string,
            link:         React.PropTypes.string,
            isDivider:    React.PropTypes.bool,
            onMenuClick:  React.PropTypes.func
          })
        )
      })
    ),

    rightNav:  React.PropTypes.arrayOf(
      React.PropTypes.shape({
        // common
        label:          React.PropTypes.string.isRequired,
        type:           React.PropTypes.oneOf(['button', 'dropdown']).isRequired,
        // button
        buttonLink:     React.PropTypes.string,
        onButtonClick:  React.PropTypes.func,
        // dropdown
        dropdownMenus:  React.PropTypes.arrayOf(
          React.PropTypes.shape({
            label:        React.PropTypes.string,
            link:         React.PropTypes.string,
            isDivider:    React.PropTypes.bool,
            onMenuClick:  React.PropTypes.func
          })
        )
      })
    )

  })
};

export default TopNavBar;
