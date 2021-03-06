import { LOAD_ALBUMS, LOAD_ALBUM, ADD_ALBUM, EDIT_ALBUM, DELETE_ALBUM } from '../actions/actionTypes'

function albumsReducer(state = [], action)
{
    switch(action.type) {
        case LOAD_ALBUMS:
            return action.albums;

        case LOAD_ALBUM:
            return action.album;

        case ADD_ALBUM:
            return [
                ...state,
                {
                    id: action.id,
                    title: action.title,
                    artist: action.artist,
                    cover_url: action.cover_url,
                    notes: action.notes

                }
            ];

        case EDIT_ALBUM:
            return [
                ...state,
                {
                    id: action.id,
                    title: action.title,
                    artist: action.artist,
                    cover_url: action.cover_url,
                    notes: action.notes

                }
            ];

        case DELETE_ALBUM:
            return state.filter(album => album.id !== action.index);

        default:
            return state;
    }
}

export default albumsReducer
