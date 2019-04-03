import { LOAD_ALBUMS, LOAD_ALBUM, ADD_ALBUM, EDIT_ALBUM, DELETE_ALBUM } from '../actions/actionTypes'

export function loadAlbums(albums) {
  return { type: LOAD_ALBUMS, albums: albums }
}

export function loadAlbum(album) {
  return { type: LOAD_ALBUM, album: album }
}

export function addAlbum(data) {
  return { type: ADD_ALBUM, id: data.id, title: data.title , artist: data.artist, cover_url: data.cover_url, notes: data.notes}
}

export function editAlbum(data) {
  return { type: EDIT_ALBUM, id: data.id, title: data.title , artist: data.artist, cover_url: data.cover_url, notes: data.notes}
}

export function deleteAlbum(index) {
  return { type: DELETE_ALBUM, index: index }
}
