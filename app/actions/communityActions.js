import * as types from './actionTypes';

export function toggleFavorite(index) {
  return {
    type: types.TOGGLE_FAVORITE,
    index: index
  };
}

export function toggleAdd(index) {
  return {
    type: types.TOGGLE_ADD,
    index: index
  };
}