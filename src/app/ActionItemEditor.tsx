import React from 'react';

import TextInput from '../controls/TextInput';
import Button from '../controls/Button';
import { ActionItem } from 'src/basic/actions/PingSaga';

import * as container from './actionItemEditor/actionItemEditorContainer';

type ThisProps = 
  container.StateProps
  & container.ConnectedDispatch
  & container.AttributeProps

type ComponentState = {} & {
  actionItem: ActionItem 
}

class ActionItemEditor extends React.Component<ThisProps, ComponentState> {
  constructor(props: ThisProps) {
    super(props)
    this.onDescriptionChanged = this.onDescriptionChanged.bind(this)
    this.onSubmitPressed = this.onSubmitPressed.bind(this)
  }

  public render() {
    return (
      <>
        <div className="blade">
          <div className="blade-title">
            Other
        </div>
          <div className="blade-body">


            <TextInput
              inputType="text"
              label="Username"
              name="username"
              placeholder="Enter a value"
              value={this.state.actionItem}
              size={30}
              onChange={this.onDescriptionChanged} />
            <TextInput
              inputType="password"
              label="Password"
              name="password"
              placeholder="Enter a value"
              value={this.state.password}
              size={30}
              onChange={this.onPasswordChanged} />
            <Button onClick={this.onSubmitPressed} text="Login" />





            <p>Id: {this.state.pomodoro.id}</p>
            <Hidden
              name="id"
              value={this.state.pomodoro.id} />
            <TextInput
              inputType="text"
              label="Planned"
              name="planned"
              placeholder="Enter a value"
              size={50}
              value={this.state.pomodoro.planned}
              onChange={this.onPlannedChanged} />
            <TextInput
              inputType="text"
              label="Actual"
              name="actual"
              placeholder="Enter a value"
              size={50}
              value={this.state.pomodoro.actual}
              onChange={this.onActualChanged} />

            <Button onClick={this.onSubmitPressed} text="Save" />
            <Button onClick={this.onClearPressed} text="Clear" />









          </div>
        </div>
      </>
    )
  }

  private onDescriptionChanged(event: React.SyntheticEvent<HTMLInputElement>) {
    event.preventDefault()
    this.setState({ ...this.state, username: event.currentTarget.value })
  }

  private onPasswordChanged(event: React.SyntheticEvent<HTMLInputElement>) {
    event.preventDefault()
    this.setState({ ...this.state, password: event.currentTarget.value })
  }

  private onSubmitPressed(event: React.SyntheticEvent<HTMLButtonElement>) {
    event.preventDefault()
    // this.props.login!({
    //   password: this.state.password,
    //   username: this.state.username
    // });  
  }



  private onPlannedChanged(event: React.SyntheticEvent<HTMLInputElement>) {
    event.preventDefault()
    this.setState({ ...this.state, pomodoro: { ...this.state.pomodoro, planned: event.currentTarget.value } })
  }
  private onActualChanged(event: React.SyntheticEvent<HTMLInputElement>) {
    event.preventDefault()
    this.setState({ ...this.state, pomodoro: { ...this.state.pomodoro, actual: event.currentTarget.value } })
  }
  private onSubmitPressed(event: React.SyntheticEvent<HTMLButtonElement>) {
    event.preventDefault()
    this.props.addItem!(
      { ...this.state.pomodoro }
    )
  }
  private onClearPressed(event: React.SyntheticEvent<HTMLButtonElement>) {
    event.preventDefault()
    this.setState({ ...this.state, pomodoro: emptyPomodoro })
  }
}

export default container.connectContainer(ActionItemEditor)