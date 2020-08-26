import {connectRouter} from 'connected-react-router';
import {combineReducers} from 'redux';
import selectData from './select'
import theaters from './resTheater'
const reducer = history => (
    combineReducers(
        {
            selectData
            ,theaters
            ,router : connectRouter(history)
        }
    )
)
export default reducer;