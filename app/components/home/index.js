import React from 'react';
import {
    Text,
    View,
    ScrollView
} from 'react-native';
import styles from './style';
import colors from '../../theme/colors';

export default class Home extends React.Component  {

  static navigatorButtons = {

      rightButtons: [
        {
          disableIconTint: false,
          showAsAction: 'ifRoom',
          buttonFontSize: 20,
          icon: require('../../img/home.png'),
          id: 'add',
        },

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
      // if you want to listen on navigator events, set this up
      this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    }

    onNavigatorEvent(event) { // this is the onPress handler for the two buttons together
    if (event.type == 'NavBarButtonPress') { // this is the event type for button presses
      if (event.id == 'edit') { // this is the same id field from the static navigatorButtons definition
        alert( 'Edit button pressed');
      }
      if (event.id == 'add') {
        alert( 'Add button pressed');
      }
    }
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
