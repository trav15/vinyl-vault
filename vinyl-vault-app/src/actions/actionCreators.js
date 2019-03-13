import { LOAD_ALBUMS, ADD_ALBUM, EDIT_ALBUM, DELETE_ALBUM } from '../actions/actionTypes'

export function loadAlbums(albums) {
  return { type: LOAD_ALBUMS, albums: albums }
}

export function addAlbum(data) {
  return { type: ADD_ALBUM, id: data.id, title: data.title , artist: data.artist, cover_url: data.cover_url}
}

export function editAlbum(index) {
  return { type: EDIT_ALBUM, index: index }
}

export function deleteAlbum(index) {
  return { type: DELETE_ALBUM, index: index }
}
