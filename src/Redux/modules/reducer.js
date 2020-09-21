import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import selectData from './select';
import theaters from './resTheater';
import movies from './movies';
import bookingData from './bookingData';
import checkBookData from './checkBookData';
import detail from './detail';
import signIn from './signIn';
import signUp from './signUp';
import auth from './auth';

const reducer = (history) =>
  combineReducers({
    auth,
    signUp,
    signIn,
    detail,
    selectData,
    theaters,
    movies,
    checkBookData,
    bookingData,
    router: connectRouter(history),
  });
export default reducer;
