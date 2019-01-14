import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import TimerButton from './TimerButton';
import TimerForm from './TimerForm';

class ToggleableTimerForm extends Component {
  state = { isOpen: false };

  handleFormOpen = () => {
    this.setState({ isOpen: true });
  };

  handleFormClose = () => {
    this.setState({ isOpen: false });
  };

  handleFormSubmit = timer => {
    // Pull onFormSubmit from props, call it, close form:
    const { onFormSubmit } = this.props;

    onFormSubmit(timer);
    this.setState({ isOpen: false });
  };

  render() {
    const { isOpen } = this.state;

    return (
      <View style={[styles.container, !isOpen && styles.buttonPadding]}>
        {isOpen ? (
          <TimerForm
            onFormSubmit={this.handleFormSubmit}
            onFormClose={this.handleFormClose}
          />
        ) : (
          <TimerButton
            title="+"
            color="black"
            onPress={this.handleFormOpen}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  buttonContainer: {
    paddingHorizontal: 15,
  },
});

export default ToggleableTimerForm;
