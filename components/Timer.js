import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { millisecondsToHuman } from '../utils/TimerUtils';
import TimerButton from './TimerButton';

class Timer extends Component {

  render() {
    const { elapsed, title, project, onEditPress } = this.props;
    const elapsedString = millisecondsToHuman(elapsed);

    return (
      <View style={styles.timerContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text>{project}</Text>
        <Text style={styles.elapsedTime}>{elapsedString}</Text>

        <View style={styles.buttonGroup}>
          <TimerButton
            small
            color="blue"
            title="Edit"
            onPress={onEditPress}
          />
          <TimerButton color="#DB2828" small title="Remove" />
          <TimerButton color="#21BA45" small title="Start" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  timerContainer: {
    backgroundColor: 'white',
    borderColor: '#d6d7da',
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
    margin: 15,
    marginBottom: 0,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  elapsedTime: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 15,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Timer;
