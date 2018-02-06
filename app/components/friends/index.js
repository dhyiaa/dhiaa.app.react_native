import React from 'react';
import {
    Text,
    View,
    ScrollView
} from 'react-native';
import styles from './style';
import colors from '../../theme/colors';
export default class Home extends React.Component{

  static navigatorButtons = {
    fab: {
      collapsedId: 'addFriend',
      collapsedIcon: require('../../img/add.png'),
      collapsedIconColor: colors.pramiry,
      backgroundColor:  colors.secondry,
    },
      rightButtons: [
        {
          disableIconTint: true,
          showAsAction: 'ifRoom',
          buttonFontSize: 20,
          icon: require('../../img/search.png'),
          id: 'add',
        }
      ]
    };

  constructor(props) {
   super(props);


 }
    render() {
        return (
            <ScrollView >
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit App.js
                </Text>
                <Text style={styles.instructions}>
                    ok ok ok dhiaa works
                </Text>
                <Text style={styles.instructions}>
                    ok ok ok dhiaa works
                </Text>
                <Text style={styles.instructions}>
                    ok ok ok dhiaa works
                </Text>
                <Text style={styles.instructions}>
                    ok ok ok dhiaa works
                </Text>
                <Text style={styles.instructions}>
                    ok ok ok dhiaa works
                </Text>
                <Text style={styles.instructions}>
                    ok ok ok dhiaa works
                </Text>

                <Text style={styles.instructions}>
                    ok ok ok dhiaa works
                </Text>
                <Text style={styles.instructions}>
                    ok ok ok dhiaa works
                </Text>
                <Text style={styles.instructions}>
                    ok ok ok dhiaa works
                </Text>
                <Text style={styles.instructions}>
                    ok ok ok dhiaa works
                </Text>
                <Text style={styles.instructions}>
                    ok ok ok dhiaa works
                </Text>

                <Text style={styles.instructions}>
                    ok ok ok dhiaa works
                </Text>
                <Text style={styles.instructions}>
                    ok ok ok dhiaa works
                </Text>

                <Text style={styles.instructions}>
                    ok ok ok dhiaa works
                </Text>
            </ScrollView>
        );
    }
}
