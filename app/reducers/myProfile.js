import * as types from '../actions/actionTypes';

const shiraPhoto = "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-1/p320x320/1977107_10152627757458362_977960513_n.jpg?oh=186a0a878ee9c605a97959433d3cc66f&oe=5807910B";

const initialState = {
  acceptedTasks: ["task0", "task1"],
  completedTasks: [],
  requests: [],
  photoUrl: shiraPhoto,
  name: "Hirokazu Shirasuna",
  team: "Product",
};

export default function myProfile(state = initialState, action = {}) {
  switch (action.type) {
    case types.TOGGLE_FAVORITE:
      let index = action.index;
      // console.warn(state)
      let posts = state.posts;
      posts[index].favorited = !posts[index].favorited;
      return Object.assign({}, state, {
        posts: Object.assign({}, posts)
      });
      // state.posts[index].favorited = !state.posts[index].favorited;
      // return Object.assign({}, state);
    case types.TOGGLE_ADD:
      index = action.index;
      // state.posts[index].added = !state.posts[index].added;
      // return {
      //   ...state,
      // };
      posts = state.posts;
      posts[index].added = !posts[index].added;
      return Object.assign({}, state, {
        posts: Object.assign({}, posts)
      });
    default:
      return state;
  }
}