import * as types from './actionTypes';

export function acceptTask(token) {
  return {
    type: types.ACCEPT_TASK,
    token: token
  };
}

export function completeTask(token) {
  return {
    type: types.COMPLETE_TASK,
    token: token
  };
}