import {connectedRouter} from 'connected-react-router';
import {combineReducers} from 'redux';

const reducer = history => (
    combineReducers(
        {
            router : connectedRouter(history)
        }
    )
)

export default reducer;