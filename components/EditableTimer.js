import React, { Component } from 'react';
// Components
import Timer from './Timer';
import TimerForm from './TimerForm';

class EditableTimer extends Component {
  state = { editFormOpen: false };

  render() {
    // Pull editFormOpen from state & all other attributes from props
    const { id, title, project, elapsed, isRunning } = this.props;
    const { editFormOpen } = this.state;

    //
    if (editFormOpen) {
      return (
        <TimerForm
          id={id}
          title={title}
          project={project}
        />
      );
    }
    return (
      <TimerForm
        id={id}
        title={title}
        project={project}
        elapsed={elapsed}
        isRunning={isRunning}
      />
    );
  }

}

export default EditableTimer;
