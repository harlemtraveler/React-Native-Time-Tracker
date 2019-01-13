import React, { Component } from 'react';
import {StyleSheet, TextInput, Text, View } from 'react-native';
import TimerButton from './TimerButton';

class TimerForm extends Component {
  /*
    STATE - Use ternery to base on props value:

    Since we check & define state based on props, we use constructor.
    We're using constructor for state initialization instead of
    defining state as a class property.
    Also, we need to avoid initializing input values as undefined.
    This is because input field values can NEVER be undefined.
    This is why we used a ternery function to check props for an
    existing value and to set to empty stateful string if none exist.
  */
  constructor(props) {
    super(props);

    const { id, title, project } = props;

    this.state = {
      // If "id" exist, render its prop values, else stateful empty string
      title: id ? title : '',
      project: id ? project : '',
    };
  }

  handleTitleChange = title => {
    this.setState({ title });
  };

  handleProjectChange = project => {
    this.setState({ project });
  };

  render() {
    const { id } = this.props;
    const { title, project } = this.state;

    const submitText = id ? 'Update' : 'Create';

    return (
      <View style={styles.formContainer}>
        <View style={styles.attributeContainer}>
          <Text style={styles.textInputTitle}>Title</Text>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              underlineColorAndroid={"transparent"}
              onChangeText={this.handleTitleChange}
              value={title}
            />
          </View>
        </View>

        <View style={styles.attributeContainer}>
          <Text style={styles.textInputTitle}>Project</Text>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              underlineColorAndroid={"transparent"}
              onChangeText={this.handleProjectChange}
              value={project}
            />
          </View>
        </View>

        <View style={styles.buttonGroup}>
          <TimerButton small color="#21BA45" title={submitText} />
          <TimerButton small color="#DB2828" title="Cancel" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: 'white',
    borderColor: '#D6D7DA',
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
    margin: 15,
    marginBottom: 0,
  },
  attributeContainer: {
    marginVertical: 8,
  },
  textInputContainer: {
    borderColor: '#D6D7DA',
    borderRadius: 2,
    borderWidth: 1,
    marginBottom: 5,
  },
  textInput: {
    height: 30,
    padding: 5,
    fontSize: 12,
  },
  textInputTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default TimerForm;
