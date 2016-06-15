import * as types from '../actions/actionTypes';
import {fakeUsersData} from './fakeUsersData';

export default function me(state = fakeUsersData.user1, action = {}) {
  let accepted, completed, requests, index;
  switch (action.type) {
    case types.ACCEPT_TASK:
      requests = state.requests;
      accepted = state.acceptedTasks;
      index = requests.indexOf(action.token);
      if (index > -1) {
        accepted.unshift(requests[index]);
        requests.splice(index, 1);
      }
      return Object.assign({}, state, {
        requests: requests.slice(),
        acceptedTasks: accepted.slice()
      });
    case types.COMPLETE_TASK:
      accepted = state.acceptedTasks;
      completed = state.completedTasks;
      index = accepted.indexOf(action.token);
      if (index > -1) {
        completed.unshift(accepted[index]);
        accepted.splice(index, 1);
      }
      return Object.assign({}, state, {
        completedTasks: completed.slice(),
        acceptedTasks: accepted.slice()
      });
    default:
      return state;
  }
}