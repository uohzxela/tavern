import * as types from '../actions/actionTypes';

const initialState = {
  org0: {
    name: "Direct Relief",
    description: "Keytar seitan affogato paleo. Mustache kinfolk pinterest try-hard lo-fi actually. Tumblr letterpress portland, williamsburg godard biodiesel stumptown schlitz tilde bespoke gochujang crucifix lumbersexual DIY farm-to-table.",
    photoUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Direct-Relief-Square.png",
    token: 'org0'
  },
  org1: {
    name: "Samaritan's Purse",
    description: "Keytar seitan affogato paleo. Mustache kinfolk pinterest try-hard lo-fi actually. Tumblr letterpress portland, williamsburg godard biodiesel stumptown schlitz tilde bespoke gochujang crucifix lumbersexual DIY farm-to-table.",
    photoUrl: "https://pbs.twimg.com/profile_images/1752337872/sp_logo_mark_wh_bkgd_400x400.png",
    token: 'org1'
  },
  org2: {
    name: "AmeriCares",
    description: "Keytar seitan affogato paleo. Mustache kinfolk pinterest try-hard lo-fi actually. Tumblr letterpress portland, williamsburg godard biodiesel stumptown schlitz tilde bespoke gochujang crucifix lumbersexual DIY farm-to-table.",
    photoUrl: "https://pbs.twimg.com/profile_images/672058727416127488/HaDtoiZl.jpg",
    token: 'org2'
  },
  org3: {
    name: "The Salvation Army",
    description: "Keytar seitan affogato paleo. Mustache kinfolk pinterest try-hard lo-fi actually. Tumblr letterpress portland, williamsburg godard biodiesel stumptown schlitz tilde bespoke gochujang crucifix lumbersexual DIY farm-to-table.",
    photoUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/The_Salvation_Army.svg/868px-The_Salvation_Army.svg.png",
    token: 'org3'
  },
  org4: {
    name: "Doctor Without Borders",
    description: "Keytar seitan affogato paleo. Mustache kinfolk pinterest try-hard lo-fi actually. Tumblr letterpress portland, williamsburg godard biodiesel stumptown schlitz tilde bespoke gochujang crucifix lumbersexual DIY farm-to-table.",
    photoUrl: "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-1/p320x320/11041567_10153008302732385_5012964870070649179_n.png?oh=a329c2357cd25a857a47f4bdbf5ccd3f&oe=57CE6AEF",
    token: 'org4'
  },
  org5: {
    name: "American Red Cross",
    description: "Keytar seitan affogato paleo. Mustache kinfolk pinterest try-hard lo-fi actually. Tumblr letterpress portland, williamsburg godard biodiesel stumptown schlitz tilde bespoke gochujang crucifix lumbersexual DIY farm-to-table.",
    photoUrl: "http://equipfm.org/wp-content/uploads/2016/01/American-Red-Cross.jpg",
    token: 'org5'
  },
};

export default function organizations(state = initialState, action = {}) {
  switch (action.type) {

    default:
      return state;
  }
}