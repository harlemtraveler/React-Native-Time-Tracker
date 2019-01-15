import React, { Component } from 'react';
// Components
import Timer from './Timer';
import TimerForm from './TimerForm';

class EditableTimer extends Component {
  state = { editFormOpen: false };

  handleEditPress = () => {
    this.openForm();
  };

  handleFormClose = () => {
    this.closeForm();
  };

  handleSubmit = timer => {
    const { onFormSubmit } = this.props;

    onFormSubmit(timer);
    this.closeForm();
  };

  closeForm = () => {
    this.setState({ editFormOpen: false });
  };

  openForm = () => {
    this.setState({ editFormOpen: true });
  };

  render() {
    // Pull editFormOpen from state & all other attributes from props
    const {
      id,
      title,
      project,
      elapsed,
      isRunning,
      onStopPress,
      onStartPress,
      onRemovePress
    } = this.props;
    const { editFormOpen } = this.state;

    //
    if (editFormOpen) {
      return (
        <TimerForm
          id={id}
          title={title}
          project={project}
          onFormSubmit={this.handleSubmit}
          onFormClose={this.handleFormClose}
        />
      );
    }
    return (
      <Timer
        id={id}
        title={title}
        project={project}
        elapsed={elapsed}
        isRunning={isRunning}
        onStopPress={onStopPress}
        onStartPress={onStartPress}
        onRemovePress={onRemovePress}
        onEditPress={this.handleEditPress}
      />
    );
  }
}

export default EditableTimer;
