import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import reducer from './modules/reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './middlewares/saga';

export const history = createBrowserHistory();
const SagaMiddleware = createSagaMiddleware();

const Store = () => {
  const store = createStore(
    reducer(history),
    {},
    composeWithDevTools(
      applyMiddleware(routerMiddleware(history), SagaMiddleware),
    ),
  );
  SagaMiddleware.run(rootSaga);
  return store;
};

export default Store;
