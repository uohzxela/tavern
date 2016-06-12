import * as types from './actionTypes';

export function acceptTask(index) {
  return {
    type: types.ACCEPT_TASK,
    index: index
  };
}

export function completeTask(index) {
  return {
    type: types.COMPLETE_TASK,
    index: index
  };
}