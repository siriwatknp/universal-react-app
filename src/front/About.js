import React, {
  PropTypes,
} from 'react';
import { Helmet } from 'react-helmet';
import styles from './About.css';

const About = ({ params: { id }}) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta property="og:title" content={`About us - ${id}`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://react-app-ce8ba.appspot.com/about" />
        <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/assez-9815e.appspot.com/o/staging%2Fcostumes%2FImage-Web9.2.jpg?alt=media&token=0e3200df-201e-4eab-adf7-333434ff8872" />

      </Helmet>
      <h3 className="about">This is about page.</h3>
      <div className="fb-share-button"
           data-href="https://react-app-ce8ba.appspot.com/about"
           data-layout="button_count">
      </div>
    </div>
  );
};

About.propTypes = {};
About.defaultProps = {};

export default About;
