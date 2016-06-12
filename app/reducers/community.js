import * as types from '../actions/actionTypes';

const shiraPhoto = "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-1/p320x320/1977107_10152627757458362_977960513_n.jpg?oh=186a0a878ee9c605a97959433d3cc66f&oe=5807910B";
const alexPhoto = "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-1/c0.53.320.320/p320x320/422175_10151344829720287_81819786_n.jpg?oh=a9435a6f0deb9e65e8769ae430e1ca47&oe=57CFDA18";
const kelvinPhoto = "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-1/p320x320/11140073_10153842338282729_8305250301472142611_n.jpg?oh=83034e7868ffa584bf112a3607a1cf74&oe=57C1575B";
const random1 = "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-1/c66.66.828.828/s320x320/11170362_10206552081865969_3086531596201734129_n.jpg?oh=7874d119a074cddadcc0e41e99cf2cfc&oe=580797AD"

const initialState = {
  posts: [
    {
      id: 0, 
      photoUrl: shiraPhoto, 
      name: "Shira", 
      status: 'has just completed the "Recycle 20 bottles in 1 week" challenge!',
      bio: "An altruistic guy",
      message: "Keytar seitan affogato paleo. Mustache kinfolk pinterest try-hard lo-fi actually. Tumblr letterpress portland, williamsburg godard biodiesel stumptown schlitz tilde bespoke gochujang crucifix lumbersexual DIY farm-to-table.", 
      favorited: false, 
      added: false, 
      time: "1 min"
    },
    {
      id: 1, 
      photoUrl: random1, 
      name: "Kelvin", 
      status: 'finished his first volunteer trip to an animal shelter!',
      bio: "An altruistic guy",
      message: "Cliche lo-fi yr taxidermy biodiesel chia. Squid salvia bushwick portland, retro austin four dollar toast post-ironic meggings chillwave stumptown.", 
      favorited: false, 
      added: false, 
      time: "10 min"
    },
    {
      id: 2, 
      photoUrl: alexPhoto, 
      name: "Alex", 
      status: 'earned the title: Cookie Man by giving out 20 cookies!',
      bio: "An altruistic guy",
      message: "Art party cornhole four loko, artisan synth try-hard raw denim. Mlkshk quinoa venmo, leggings yuccie marfa gochujang tilde chicharrones messenger bag. ", 
      favorited: false, 
      added: false, 
      time: "21 hrs"
    },
    {
      id: 0, 
      photoUrl: shiraPhoto, 
      name: "Shira", 
      status: 'has just completed the "Recycle 20 bottles in 1 week" challenge!',
      bio: "An altruistic guy",
      message: "Keytar seitan affogato paleo. Mustache kinfolk pinterest try-hard lo-fi actually. Tumblr letterpress portland, williamsburg godard biodiesel stumptown schlitz tilde bespoke gochujang crucifix lumbersexual DIY farm-to-table.", 
      favorited: false, 
      added: false, 
      time: "1 min"
    },
    {
      id: 1, 
      photoUrl: random1, 
      name: "Kelvin", 
      status: 'finished his first volunteer trip to an animal shelter!',
      bio: "An altruistic guy",
      message: "Cliche lo-fi yr taxidermy biodiesel chia. Squid salvia bushwick portland, retro austin four dollar toast post-ironic meggings chillwave stumptown.", 
      favorited: false, 
      added: false, 
      time: "10 min"
    },
    {
      id: 2, 
      photoUrl: alexPhoto, 
      name: "Alex", 
      status: 'earned the title: Cookie Man by giving out 20 cookies!',
      bio: "An altruistic guy",
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