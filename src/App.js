import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router-dom';
import { history } from './Redux/create';
import { BookPage } from './Pages/BookPage';
import { SchedulePage } from './Pages/SchedulePage';
import Mainpage from './Pages/Mainpage';
import DetailPage from './Pages/DetailPage';
import ShowingPage from './Pages/ShowingPage';
import { ErrorBoundary } from 'react-error-boundary';
import FallbackComponent from './Components/FallbackComponent/FallbackComponent';

function App() {
  return (
    <ErrorBoundary FallbackComponent={FallbackComponent}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/detail" component={DetailPage} />
          <Route exact path="/movies" component={ShowingPage} />
          <Route exact path="/ticketing" component={BookPage} />
          <Route exact path="/schedule" component={SchedulePage} />
          <Route exact path="/" component={Mainpage} />
          <Route component={FallbackComponent} />
        </Switch>
      </ConnectedRouter>
    </ErrorBoundary>
  );
}

export default App;
