'use strict';

import React    from 'react';
import { Link } from 'react-router';

const NavBarBrand = (props) => {
  return (
    <Link
      className="navbar-brand"
      to={props.linkTo}>
      {props.brand}
    </Link>
  );
};

NavBarBrand.propTypes ={
  brand:  React.PropTypes.string,
  linkTo: React.PropTypes.string
};

NavBarBrand.defaultProps = {
  brand: 'brand',
  linkTo: '/'
};

export default NavBarBrand;
