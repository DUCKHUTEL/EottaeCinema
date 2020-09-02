import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import selectData from "./select";
import theaters from "./resTheater";
import movies from "./movies";
import bookingData from "./bookingData";
const reducer = (history) =>
  combineReducers({
    selectData,
    theaters,
    movies,
    bookingData,
    router: connectRouter(history),
  });
export default reducer;
