import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import selectData from "./select";
import theaters from "./resTheater";
import movices from "./movies";
const reducer = (history) =>
    combineReducers({
        selectData,
        theaters,
        movices,
        router: connectRouter(history),
    });
export default reducer;
