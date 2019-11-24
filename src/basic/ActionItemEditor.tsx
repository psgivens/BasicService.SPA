import React from 'react';

import TextInput from '../controls/TextInput';
import Button from '../controls/Button';
// import { ActionItem } from 'src/basic/actions/PingSaga';

import * as container from './actionItemEditor/actionItemEditorContainer';
import { ActionItem, emptyActionItem } from './actions/PingSaga';
// import { ActionItem } from './actions/PingSaga';

type ThisProps =
  container.StateProps
  & container.ConnectedDispatch
  & container.AttributeProps

type ComponentState = {} & {
  item: ActionItem
}

// TODO: Add this to documentation
// This might help: https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

class ActionItemEditor extends React.Component<ThisProps , ComponentState> {
  constructor(props: ThisProps) {
    super(props)
    this.state = 
      {
        item: { ...props.selectedActionItem } as ActionItem || emptyActionItem
      } 
    this.onDescriptionChanged = this.onDescriptionChanged.bind(this)
    this.onSubmitPressed = this.onSubmitPressed.bind(this)
    this.onClearPressed = this.onClearPressed.bind(this)
    this.onClosePressed = this.onClosePressed.bind(this)
  }

  static getDerivedStateFromProps(props: ThisProps, state: ComponentState) {
    // Any time the current user changes,
    // Reset any parts of state that are tied to that user.
    // In this simple example, that's just the email.
    if (props.selectedActionItem && props.selectedActionItem!.id !== state.item.id) {
      return { item: { ...props.selectedActionItem! } as ActionItem }
    } else if (!props.selectedActionItem && state.item.id !== 0) {
      return { item: emptyActionItem }
    }
    return null;
  }

  public render() {
    if (this.state.item.id !== 0) {
      const selectedActionItem = this.state.item
      return (
          <div 
            className="blade"
            key={selectedActionItem.id}
            >
            <div className="blade-title">
              Other
        </div>
            <div className="blade-body">


              <p>Id: {selectedActionItem.id}</p>
              {/* <Hidden
              name="id"
              value={this.state.pomodoro.id} /> */}
              <TextInput
                inputType="text"
                label="Planned"
                name="planned"
                placeholder="Enter a value"
                size={50}
                value={selectedActionItem.description}
                onChange={this.onDescriptionChanged} />

              <Button onClick={this.onSubmitPressed} text="Save" />
              <Button onClick={this.onClearPressed} text="Clear" />
              <Button onClick={this.onClosePressed} text="X" />

            </div>
          </div>
      )
    } else {
      return (<></>);
    }
  }

  private onDescriptionChanged(event: React.SyntheticEvent<HTMLInputElement>) {
    event.preventDefault()
    this.setState({ ...this.state, item: { ...this.state.item, description: event.currentTarget.value } })
  }

  private onSubmitPressed(event: React.SyntheticEvent<HTMLButtonElement>) {
    event.preventDefault()
    this.props.postActionItem!(this.state.item.description)
  }

  private onClearPressed(event: React.SyntheticEvent<HTMLButtonElement>) {
    event.preventDefault()
    this.setState({ ...this.state, item: { ...this.state.item, description: this.props.selectedActionItem ? this.props.selectedActionItem!.description : "" } })
  }

  private onClosePressed(event: React.SyntheticEvent<HTMLButtonElement>) {
    event.preventDefault()
    this.props.deselectItem!()
  }


}

export default container.connectContainer(ActionItemEditor)