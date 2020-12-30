import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProtectedRoute from './components/Router/ProtectedRoute';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Chat from './components/chat/Chat';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <ProtectedRoute exact path="/" component={Chat} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route
            render={() => (
              <div style={{ textAlign: 'center' }}>
                <h1>404 Page not found</h1>
              </div>
            )}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
