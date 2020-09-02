import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import selectData from "./select";
import theaters from "./resTheater";
import detail from "./detail";
const reducer = (history) =>
  combineReducers({
    selectData,
    theaters,
    detail,
    router: connectRouter(history),
  });
export default reducer;
