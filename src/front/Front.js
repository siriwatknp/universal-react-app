import React, {
  PropTypes,
} from 'react';
import Link from 'react-router/lib/Link';
import { Helmet } from 'react-helmet';

const Front = ({ children }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta property="og:title" content="home" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://react-app-ce8ba.appspot.com/" />
        <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/assez-9815e.appspot.com/o/undefined%2Fundefined%2FHome2.jpg?alt=media&token=d563c7ae-54a6-4315-b5ad-6538da888a83" />

      </Helmet>
      <h1>Hello World.</h1>
      <div className="fb-share-button"
           data-href="https://react-app-ce8ba.appspot.com/"
           data-layout="button_count">
      </div>
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
