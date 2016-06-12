import * as types from '../actions/actionTypes';

const cookiePhoto = "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-1/c0.0.200.200/p200x200/13177728_789104797887207_935597912605799808_n.jpg?oh=bcc8605bcd34fadd9134e5d51bc83e03&oe=580479D5";
const catPhoto = "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-1/c0.0.319.319/1654021_752396951451256_1598812519_n.jpg?oh=6d02984bf0300c18ba6e374d0fefd3ec&oe=57C36D2B";

const initialState = {
  task0: {
    name: "Recycle 20 bottles in 1 week",
    description: "Keytar seitan affogato paleo. Mustache kinfolk pinterest try-hard lo-fi actually. Tumblr letterpress portland, williamsburg godard biodiesel stumptown schlitz tilde bespoke gochujang crucifix lumbersexual DIY farm-to-table.",
    timeLimit: "1 week",
    photoUrl: cookiePhoto
  },
  task1: {
    name: "Cat Rescue",
    description: "Keytar seitan affogato paleo. Mustache kinfolk pinterest try-hard lo-fi actually. Tumblr letterpress portland, williamsburg godard biodiesel stumptown schlitz tilde bespoke gochujang crucifix lumbersexual DIY farm-to-table.",
    timeLimit: "24 hrs",
    photoUrl: catPhoto
  }
};

export default function tasks(state = initialState, action = {}) {
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