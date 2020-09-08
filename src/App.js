import React from 'react';
import ErrorBoundary from 'antd/lib/alert/ErrorBoundary';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router-dom';
import { history } from './Redux/create';
import { BookPage } from './Pages/BookPage';
import { SchedulePage } from './Pages/SchedulePage';
import Mainpage from './Pages/Mainpage';
import DetailPage from './Pages/DetailPage';

function App() {
  return (
    <ErrorBoundary>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/detail" component={DetailPage} />
          <Route exact path="/" component={Mainpage} />
          <Route exact path="/ticketing" component={BookPage} />
          <Route exact path="/schedule" component={SchedulePage} />
        </Switch>
      </ConnectedRouter>
    </ErrorBoundary>
  );
}

export default App;
