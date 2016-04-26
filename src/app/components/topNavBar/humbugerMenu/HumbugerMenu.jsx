'use strict';

import React from 'react';

const HumburgerMenu = () => {
  return (
    <button
      type="button"
      className="navbar-toggle collapsed"
      data-toggle="collapse"
      data-target="#navbar"
      aria-expanded="false"
      aria-controls="navbar">
      <span className="sr-only">Toggle navigation</span>
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
    </button>
  );
};

export default HumburgerMenu;
