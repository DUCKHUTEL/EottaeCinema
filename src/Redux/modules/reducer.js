import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import selectData from './select';
import theaters from './resTheater';
import movies from './movies';
import bookingData from './bookingData';
import detail from './detail';
import authSignIn from './authSignIn';
import board from './board';

const reducer = (history) =>
  combineReducers({
    authSignIn,
    board,
    detail,
    selectData,
    theaters,
    movies,
    bookingData,
    router: connectRouter(history),
  });
export default reducer;
