const shiraPhoto = "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-1/p320x320/1977107_10152627757458362_977960513_n.jpg?oh=186a0a878ee9c605a97959433d3cc66f&oe=5807910B";
const alexPhoto = "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-1/c0.53.320.320/p320x320/422175_10151344829720287_81819786_n.jpg?oh=a9435a6f0deb9e65e8769ae430e1ca47&oe=57CFDA18";
const kelvinPhoto = "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-1/p320x320/11140073_10153842338282729_8305250301472142611_n.jpg?oh=83034e7868ffa584bf112a3607a1cf74&oe=57C1575B";
const random1 = "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-1/c66.66.828.828/s320x320/11170362_10206552081865969_3086531596201734129_n.jpg?oh=7874d119a074cddadcc0e41e99cf2cfc&oe=580797AD"

export const fakeUsersData = {
  user0: {
    name: "Kelvin Koa",
    team: "Engineering",
    photoUrl: "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-1/p320x320/11140073_10153842338282729_8305250301472142611_n.jpg?oh=83034e7868ffa584bf112a3607a1cf74&oe=57C1575B",
    acceptedTasks: ["task0", "task1"],
    completedTasks: [],
    requests: [],
    token: 'user0',
    achievementsInProgress: ['achv0'],
    achievementsEarned: ['achv1', 'achv2', 'achv3', 'achv4'],
    bio: "jack of all trades"
  },
  user1: {
    name: "Hirokazu Shirasuna",
    team: "Product",
    photoUrl: shiraPhoto,
    acceptedTasks: ["task1", "task2"],
    completedTasks: [],
    requests: ["task0"],
    token: 'user1',
    achievementsInProgress: ['achv0'],
    achievementsEarned: ['achv1', 'achv2', 'achv3', 'achv4', 'achv5'],
    bio: "product manager at Picsart"
  },
  user2: {
    name: "Yan Tianqi",
    team: "Data Science",
    photoUrl: "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-1/p320x320/12274672_10207534892397672_5752122759331273895_n.jpg?oh=fc6685f3dc8a054c95130f3acf325d4a&oe=57D709EA",
    acceptedTasks: ["task1"],
    completedTasks: [],
    requests: [],
    token: 'user2',
    achievementsInProgress: ['achv0'],
    achievementsEarned: ['achv1', 'achv2', 'achv3', 'achv4'],
    bio: "data lover"
  },
  user3: {
    name: "Misa Truong",
    team: "Business Dev",
    photoUrl: random1,
    acceptedTasks: ["task0", "task1"],
    completedTasks: [],
    requests: [],
    token: 'user3',
    achievementsInProgress: ['achv0'],
    achievementsEarned: ['achv1', 'achv2', 'achv3', 'achv4'],
    bio: "Aspiring artist"
  },
  user4: {
    name: "Tom Kosnik",
    team: "Stanford",
    photoUrl: "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-1/c0.67.320.320/p320x320/12920359_10157052857975179_6636440801707457682_n.jpg?oh=a5c2b7f136d4f1a9b982c936522ec85e&oe=57E4D50D",
    acceptedTasks: ["task0", "task1"],
    completedTasks: [],
    requests: [],
    token: 'user4',
    achievementsInProgress: ['achv0'],
    achievementsEarned: ['achv1', 'achv2', 'achv3', 'achv4'],
    bio: "I love mentoring startup founders!"
  },
};