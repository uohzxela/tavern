import * as types from '../actions/actionTypes';

const cookiePhoto = "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-1/c0.0.200.200/p200x200/13177728_789104797887207_935597912605799808_n.jpg?oh=bcc8605bcd34fadd9134e5d51bc83e03&oe=580479D5";
const catPhoto = "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-1/c0.0.319.319/1654021_752396951451256_1598812519_n.jpg?oh=6d02984bf0300c18ba6e374d0fefd3ec&oe=57C36D2B";
const bottlePhoto = "https://external-lax3-1.xx.fbcdn.net/safe_image.php?d=AQAZAI8YUDSpQ7UD&w=100&h=100&url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fb%2Fbb%2FBouteille_nb.jpg%2F720px-Bouteille_nb.jpg&cfs=1&f&fallback=hub_likes";

const initialState = {
  task0: {
    name: "Recycle 20 bottles in 1 week",
    description: "Keytar seitan affogato paleo. Mustache kinfolk pinterest try-hard lo-fi actually. Tumblr letterpress portland, williamsburg godard biodiesel stumptown schlitz tilde bespoke gochujang crucifix lumbersexual DIY farm-to-table.",
    timeLimit: "1 week",
    photoUrl: bottlePhoto,
    token: 'task0'
  },
  task1: {
    name: "Cat Rescue",
    description: "Keytar seitan affogato paleo. Mustache kinfolk pinterest try-hard lo-fi actually. Tumblr letterpress portland, williamsburg godard biodiesel stumptown schlitz tilde bespoke gochujang crucifix lumbersexual DIY farm-to-table.",
    timeLimit: "24 hrs",
    photoUrl: catPhoto,
    token: 'task1'
  },
  task2: {
    name: "Cookie Man",
    description: "Keytar seitan affogato paleo. Mustache kinfolk pinterest try-hard lo-fi actually. Tumblr letterpress portland, williamsburg godard biodiesel stumptown schlitz tilde bespoke gochujang crucifix lumbersexual DIY farm-to-table.",
    timeLimit: null,
    photoUrl: cookiePhoto,
    token: 'task2'
  },
  task3: {
    name: "Hold the Door!",
    description: "Hold the door for 5 people in a day. Why? Because Hodor, 'nuff said.",
    timeLimit: "24 hrs",
    photoUrl: "https://pbs.twimg.com/media/CjGzLSoXAAk5bkZ.jpg",
    token: 'task3'
  },
};

export default function tasks(state = initialState, action = {}) {
  switch (action.type) {

    default:
      return state;
  }
}