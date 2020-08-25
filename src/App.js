import React from 'react';
import logo from './logo.svg';
import './App.css';
import ErrorBoundary from 'antd/lib/alert/ErrorBoundary';
import { ConnectedRouter } from 'connected-react-router';
import { Switch } from 'react-router-dom';
function App() {
  return (
    <ErrorBoundary>
      <ConnectedRouter>
        <Switch>
          
        </Switch>
      </ConnectedRouter>
    </ErrorBoundary>
  );
}

export default App;