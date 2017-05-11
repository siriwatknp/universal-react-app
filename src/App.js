import React, {
  PropTypes,
} from 'react';
import { Router, browserHistory } from 'react-router';

// Import Routes
import routes from './routes';

const App = () => {
  return (
    <Router history={browserHistory}>
      {routes}
    </Router>
  );
};

App.propTypes = {};
App.defaultProps = {};

export default App;
