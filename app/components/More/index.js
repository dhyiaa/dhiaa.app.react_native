import React from 'react';
import {
    Text,
    View
} from 'react-native';
import styles from './style';

export default class Friends extends React.Component{
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit App.js
                </Text>
                <Text style={styles.instructions}>
                    ok ok ok dhiaa works
                </Text>
            </View>
        );
    }
}


