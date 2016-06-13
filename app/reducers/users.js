import * as types from '../actions/actionTypes';
import {fakeUsersData} from './fakeUsersData';

export default function users(state = fakeUsersData, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}