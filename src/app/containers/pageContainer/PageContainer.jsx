import React from 'react';

const PageContainer = (props) => {
  return (
    <div className="container-fluid">
      <div className="row">
        {props.children}
      </div>
    </div>
  );
};

PageContainer.propTypes = {
  children: React.PropTypes.children
};

export default PageContainer;
