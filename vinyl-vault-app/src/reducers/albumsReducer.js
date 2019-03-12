import { LOAD_ALBUMS, ADD_ALBUM, TOGGLE_ALBUM, DELETE_ALBUM } from '../actions/actionTypes'

function albumsReducer(state = [], action)
{
    switch(action.type) {
        case LOAD_ALBUMS:
            return action.albums;

        case ADD_ALBUM:
            return [
                ...state,
                {
                    id: action.id,
                    title: action.title,
                    done: false
                }
            ];

        case TOGGLE_ALBUM:
            return state.map(album => (album.id === action.index)
                  ? {...album, done: !album.done}
                  : album
            );

        case DELETE_ALBUM:
            return state.filter(album => album.id !== action.index);

        default:
            return state;
    }
}

export default albumsReducer
