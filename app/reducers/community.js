import * as types from '../actions/actionTypes';

const initialState = {
  posts: [
    {
      id: 0, 
      userToken: "user1", 
      status: 'completed the "Recycle 20 bottles in 1 week" challenge!',
      message: "Keytar seitan affogato paleo. Mustache kinfolk pinterest try-hard lo-fi actually. Tumblr letterpress portland, williamsburg godard biodiesel stumptown schlitz tilde bespoke gochujang crucifix lumbersexual DIY farm-to-table.", 
      favorited: false, 
      added: false, 
      time: "1 min"
    },
    {
      id: 1,  
      userToken: "user0", 
      status: 'finished his first volunteer trip to an animal shelter!',
      message: "Cliche lo-fi yr taxidermy biodiesel chia. Squid salvia bushwick portland, retro austin four dollar toast post-ironic meggings chillwave stumptown.", 
      favorited: false, 
      added: false, 
      time: "10 min"
    },
    {
      id: 2, 
      userToken: "user2", 
      status: 'earned the title: Cookie Man by giving out 20 cookies!',
      message: "Art party cornhole four loko, artisan synth try-hard raw denim. Mlkshk quinoa venmo, leggings yuccie marfa gochujang tilde chicharrones messenger bag. ", 
      favorited: false, 
      added: false, 
      time: "21 hrs"
    },
    {
      id: 0, 
      userToken: "user1", 
      status: 'has just completed the "Recycle 20 bottles in 1 week" challenge!',
      message: "Keytar seitan affogato paleo. Mustache kinfolk pinterest try-hard lo-fi actually. Tumblr letterpress portland, williamsburg godard biodiesel stumptown schlitz tilde bespoke gochujang crucifix lumbersexual DIY farm-to-table.", 
      favorited: false, 
      added: false, 
      time: "1 min"
    },
    {
      id: 1,  
      userToken: "user0", 
      status: 'finished his first volunteer trip to an animal shelter!',
      message: "Cliche lo-fi yr taxidermy biodiesel chia. Squid salvia bushwick portland, retro austin four dollar toast post-ironic meggings chillwave stumptown.", 
      favorited: false, 
      added: false, 
      time: "10 min"
    },
    {
      id: 2, 
      userToken: "user2", 
      status: 'earned the title: Cookie Man by giving out 20 cookies!',
      message: "Art party cornhole four loko, artisan synth try-hard raw denim. Mlkshk quinoa venmo, leggings yuccie marfa gochujang tilde chicharrones messenger bag. ", 
      favorited: false, 
      added: false, 
      time: "21 hrs"
    },
  ]
};

export default function community(state = initialState, action = {}) {
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