import * as types from '../actions/actionTypes';

const initialState = {
  posts: [
    {
      id: 0, 
      userToken: "user1", 
      status: 'completed the "Recycle 20 bottles in 1 week" challenge!',
      message: "Wow. First time I've ever recycled that many bottles in my life. Seriously Tavern makes my life much better. I am now a happier man.", 
      favorited: false, 
      added: false, 
      time: "1 min"
    },
    {
      id: 1,  
      userToken: "user0", 
      status: 'finished his first volunteer trip to an animal shelter!',
      message: "I highly recommend this volunteer trip. I learnt a lot about the lives of stray animals, and how to take care of them. I even adopted a kitty. Haha.", 
      favorited: false, 
      added: false, 
      time: "10 min"
    },
    {
      id: 2, 
      userToken: "user2", 
      status: 'earned the title: Cookie Man by giving out 20 cookies!',
      message: "Who wants more of my cookies? I still have dozens of cookies left over at home... It's all free!", 
      favorited: false, 
      added: false, 
      time: "21 hrs"
    },
    {
      id: 0, 
      userToken: "user3", 
      status: 'has just completed the "Recycle 20 bottles in 1 week" challenge!',
      message: "Do not underestimate this challenge. Recycling 1 bottle is no mean feat already.", 
      favorited: false, 
      added: false, 
      time: "1 min"
    },
    {
      id: 1,  
      userToken: "user1", 
      status: 'finished his first volunteer trip to an animal shelter!',
      message: "I am very happy today. I adopted a dog!", 
      favorited: false, 
      added: false, 
      time: "10 min"
    },
    {
      id: 2, 
      userToken: "user4", 
      status: 'earned the title: Cookie Man by giving out 20 cookies!',
      message: "I think I'm actually born to be a Cookie Man ever since I started this journey. Thanks Tavern.", 
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