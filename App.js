import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View
} from 'react-native';
// Components
import EditableTimer from './components/EditableTimer';
import ToggleableTimerForm from './components/ToggleableTimerForm';

export default class App extends Component {
  render() {
    return (
      <View style={styles.appContainer}>
        <View style={styles.titleContainer}>
          <Text>Timers</Text>
        </View>
        <ScrollView style={styles.timerList}>
          <ToggleableTimerForm isOpen={false}/>

          <EditableTimer
            id="1"
            title="Moew the lawn"
            project="House Chores"
            elapsed="8986300"
            isRunning
          />
          <EditableTimer
            id="2"
            title="Bake squash"
            project="Kitchen Chores"
            elapsed="3890985"
            editFormOpen
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    paddingTop: 35,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#D6D7DA',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  timerList: {
    paddingBottom: 15,
  },
});

/*
  COMPONENTS
  ----------

  ToggleableTimerForm:
    - Is responisible for displaying either a "+" button or a forrm to create a new timer.

    Props:
    - "isOpen" - this is the conditional to determine what to diplay:
      - true = display the TimerForm
      - false = display the "+" TimerButton


  EditableTimer:
    - This is the compoennts that will house the timers in the list of timers


    Props:
    - "elapsed" - displays time elapsed while the timer was running
    - "isRunning" - specifies wether the timer is is running
    - "editFormOpen" - specifies wether to show the timer's face or its edit form.
      - Props work as booleans.
      - If a value is not explicityly set, it is read to be true.
      - If a prop is absent, it is read to be falsy
*/
