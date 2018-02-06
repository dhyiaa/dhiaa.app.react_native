const colors = require('../theme/colors');

var sharedOptions = {
  navigatorStyle:{
       statusBarColor: colors.darkSecondary,
       navBarBackgroundColor: colors.pramiry,
       navBarTextColor: colors.thirdly,
  }
};
module.exports =  [
  {
      screen: 'Home',
      icon: require('../img/home.png'),
      title: 'Home ',
      navigatorStyle:{
           statusBarColor: colors.darkSecondary,
           selectedTopTabIndicatorColor: colors.secondry,
           selectedTopTabTextColor: colors.secondry ,
           topTabTextColor: colors.thirdly,
           navBarTextColor: colors.thirdly,
           navBarBackgroundColor: colors.pramiry
      },
      topTabs: [
              {title: 'Requests',screenId: 'Home'},
              {title: 'Chats',  screenId: 'Friends'},
              {title: 'Calls',  screenId: 'Home'},
          ]
        },
        {
          screen: 'Friends',
          icon: require('../img/friend.png') ,
          title: 'Friends ',
          ...sharedOptions
        },{
          screen: 'Groups',
          icon: require('../img/group.png'),
          title: 'Groups ',
          ...sharedOptions
        },
        {
          screen: 'More',
          icon:  require('../img/list.png') ,
          title: 'More ... ',
          ...sharedOptions
        }
];
