import React from 'react';

import TextInput from '../controls/TextInput';
import Button from '../controls/Button';
// import { ActionItem } from 'src/basic/actions/PingSaga';

import * as container from './actionItemEditor/actionItemEditorContainer';
import { ActionItem } from './actions/PingSaga';

type ThisProps = 
  container.StateProps
  & container.ConnectedDispatch
  & container.AttributeProps

type ComponentState = {} & {
  id: number,
  description: string
}

class ActionItemEditor extends React.Component<ThisProps, ComponentState> {
  constructor(props: ThisProps) {
    super(props)
    this.state = {      
        id: 0,
        description: ""    
    }
    this.onDescriptionChanged = this.onDescriptionChanged.bind(this)
    this.onSubmitPressed = this.onSubmitPressed.bind(this)
    this.onClearPressed = this.onClearPressed.bind(this)
  }

  public render() {
    return (
      <>
        <div className="blade">
          <div className="blade-title">
            Other
        </div>
          <div className="blade-body">


            <p>Id: {this.state.id}</p>
            {/* <Hidden
              name="id"
              value={this.state.pomodoro.id} /> */}
            <TextInput
              inputType="text"
              label="Planned"
              name="planned"
              placeholder="Enter a value"
              size={50}
              value={this.state.description}
              onChange={this.onDescriptionChanged} />

            <Button onClick={this.onSubmitPressed} text="Save" />
            <Button onClick={this.onClearPressed} text="Clear" />

          </div>
        </div>
      </>
    )
  }

  private onDescriptionChanged(event: React.SyntheticEvent<HTMLInputElement>) {
    event.preventDefault()
    this.setState({ ...this.state, description: event.currentTarget.value })
  }

  private onSubmitPressed(event: React.SyntheticEvent<HTMLButtonElement>) {
    event.preventDefault()
    this.props.postActionItem!(this.state.description)
  }

  private onClearPressed(event: React.SyntheticEvent<HTMLButtonElement>) {
    event.preventDefault()
    this.setState({ ...this.state, id:0, description: "" })
  }


}

export default container.connectContainer(ActionItemEditor)