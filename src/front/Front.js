import React, {
  PropTypes,
} from 'react';
import Link from 'react-router/lib/Link';

const Front = ({ children }) => {
  return (
    <div>
      Hello World.
      <hr/>
      <Link to="/about">
        About
      </Link>
      {children}
    </div>
  );
};

Front.propTypes = {};
Front.defaultProps = {};

export default Front;
