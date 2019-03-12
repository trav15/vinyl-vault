import { LOAD_ALBUMS, ADD_ALBUM, TOGGLE_ALBUM, DELETE_ALBUM } from '../actions/actionTypes'

export function loadAlbums(albums) {
  return { type: LOAD_ALBUMS, albums: albums }
}

export function addAlbum(id, title) {
  return { type: ADD_ALBUM, id: id, title: title }
}

export function toggleAlbum(index) {
  return { type: TOGGLE_ALBUM, index: index }
}

export function deleteAlbum(index) {
  return { type: DELETE_ALBUM, index: index }
}
