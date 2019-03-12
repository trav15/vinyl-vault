
import { combineReducers } from 'redux'
import albumsReducer from './albumsReducer'

const rootReducer = combineReducers({
    albums: albumsReducer
});

export default rootReducer;
