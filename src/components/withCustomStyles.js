// withCustomStyles.js
import React from 'react';

const withCustomStyles = (WrappedComponent, customStyles) => {
  return function WithCustomStyles(props) {
    return <WrappedComponent {...props} customStyles={customStyles} />;
  };
};

export default withCustomStyles;