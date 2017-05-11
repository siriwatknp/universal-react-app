import React, {
  PropTypes,
} from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { configureStore } from './store';

const store = configureStore();

// Import Routes
import routes from './routes';

const App = () => {
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        {routes}
      </Router>
    </Provider>
  );
};

App.propTypes = {};
App.defaultProps = {};

export default App;
