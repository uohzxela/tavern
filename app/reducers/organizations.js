import * as types from '../actions/actionTypes';

const initialState = {
  org0: {
    name: "Direct Relief",
    description: 'Direct Relief is a nonprofit, nonpartisan organization with a stated mission to “improve the health and lives of people affected by poverty or emergency situations by mobilizing and providing essential medical resources needed for their care."',
    photoUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Direct-Relief-Square.png",
    token: 'org0'
  },
  org1: {
    name: "Samaritan's Purse",
    description: "Samaritan's Purse is an evangelical Christian humanitarian organization that provides aid to people in physical need as a key part of Christian missionary work.",
    photoUrl: "https://pbs.twimg.com/profile_images/1752337872/sp_logo_mark_wh_bkgd_400x400.png",
    token: 'org1'
  },
  org2: {
    name: "AmeriCares",
    description: 'AmeriCares is a non-profit disaster relief and global health organization providing immediate response to emergency medical needs and supporting long-term health care initiatives for people in the United States and around the world.',
    photoUrl: "https://pbs.twimg.com/profile_images/672058727416127488/HaDtoiZl.jpg",
    token: 'org2'
  },
  org3: {
    name: "The Salvation Army",
    description: 'The Salvation Army is a Christian church and international charitable organisation structured in a quasi-military fashion.',
    photoUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/The_Salvation_Army.svg/868px-The_Salvation_Army.svg.png",
    token: 'org3'
  },
  org4: {
    name: "Doctor Without Borders",
    description: 'Médecins Sans Frontières, or Doctors Without Borders, is an international humanitarian-aid non-governmental organization and Nobel Peace Prize laureate, best known for its projects in war-torn regions.',
    photoUrl: "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-1/p320x320/11041567_10153008302732385_5012964870070649179_n.png?oh=a329c2357cd25a857a47f4bdbf5ccd3f&oe=57CE6AEF",
    token: 'org4'
  },
  org5: {
    name: "American Red Cross",
    description: 'The American Red Cross is a humanitarian organization that provides emergency assistance, disaster relief and education inside the United States.',
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