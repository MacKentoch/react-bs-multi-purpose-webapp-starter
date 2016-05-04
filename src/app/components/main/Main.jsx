import React from 'react';

const Main = (props) => {
  return (
    <div className="col-sm-9 col-sm-offset-3 col-md-8 col-md-offset-2 main">
      {props.children}
    </div>
  );
};

Main.PropTypes = {
  children: React.PropTypes.node
};

export default Main;
