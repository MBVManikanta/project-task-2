import React from 'react';

const withLogging = (Component) => {
  return (props) => {
    console.log('Component Rendered');
    return <Component {...props} />;
  };
};

export default withLogging;
