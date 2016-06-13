import * as types from '../actions/actionTypes';

const cookiePhoto = "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-1/c0.0.200.200/p200x200/13177728_789104797887207_935597912605799808_n.jpg?oh=bcc8605bcd34fadd9134e5d51bc83e03&oe=580479D5";
const catPhoto = "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-1/c0.0.319.319/1654021_752396951451256_1598812519_n.jpg?oh=6d02984bf0300c18ba6e374d0fefd3ec&oe=57C36D2B";
const bottlePhoto = "https://external-lax3-1.xx.fbcdn.net/safe_image.php?d=AQAZAI8YUDSpQ7UD&w=100&h=100&url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fb%2Fbb%2FBouteille_nb.jpg%2F720px-Bouteille_nb.jpg&cfs=1&f&fallback=hub_likes";

const initialState = {
  achv0: {
    name: "Bottle Master",
    description: "Keytar seitan affogato paleo. Mustache kinfolk pinterest try-hard lo-fi actually. Tumblr letterpress portland, williamsburg godard biodiesel stumptown schlitz tilde bespoke gochujang crucifix lumbersexual DIY farm-to-table.",
    photoUrl: bottlePhoto,
    token: 'achv0'
  },
  achv1: {
    name: "Cat Rescue",
    description: "Keytar seitan affogato paleo. Mustache kinfolk pinterest try-hard lo-fi actually. Tumblr letterpress portland, williamsburg godard biodiesel stumptown schlitz tilde bespoke gochujang crucifix lumbersexual DIY farm-to-table.",
    photoUrl: catPhoto,
    token: 'achv1'
  },
  achv2: {
    name: "Cookie Man",
    description: "Keytar seitan affogato paleo. Mustache kinfolk pinterest try-hard lo-fi actually. Tumblr letterpress portland, williamsburg godard biodiesel stumptown schlitz tilde bespoke gochujang crucifix lumbersexual DIY farm-to-table.",
    photoUrl: cookiePhoto,
    token: 'achv2'
  },
  achv3: {
    name: "Complete 10",
    description: "Keytar seitan affogato paleo. Mustache kinfolk pinterest try-hard lo-fi actually. Tumblr letterpress portland, williamsburg godard biodiesel stumptown schlitz tilde bespoke gochujang crucifix lumbersexual DIY farm-to-table.",
    photoUrl: null,
    count: 10,
    token: 'achv3'
  },
  achv4: {
    name: "Complete 25",
    description: "Keytar seitan affogato paleo. Mustache kinfolk pinterest try-hard lo-fi actually. Tumblr letterpress portland, williamsburg godard biodiesel stumptown schlitz tilde bespoke gochujang crucifix lumbersexual DIY farm-to-table.",
    photoUrl: null,
    count: 25,
    token: 'achv4'
  },
  achv5: {
    name: "Complete 50",
    description: "Keytar seitan affogato paleo. Mustache kinfolk pinterest try-hard lo-fi actually. Tumblr letterpress portland, williamsburg godard biodiesel stumptown schlitz tilde bespoke gochujang crucifix lumbersexual DIY farm-to-table.",
    photoUrl: null,
    count: 50,
    token: 'achv5'
  },
};

export default function achievements(state = initialState, action = {}) {
  switch (action.type) {

    default:
      return state;
  }
}