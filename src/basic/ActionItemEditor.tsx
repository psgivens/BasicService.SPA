import React from 'react';

import TextInput from '../controls/TextInput';
import Button from '../controls/Button';
// import { ActionItem } from 'src/basic/actions/PingSaga';

import * as container from './actionItemEditor/actionItemEditorContainer';
import { ActionItem } from './actions/PingSaga';
// import { ActionItem } from './actions/PingSaga';

type ThisProps =
  container.StateProps
  & container.ConnectedDispatch
  & container.AttributeProps

type ComponentState = {} & {
  item: ActionItem
}

// Mabye: https://alexzywiak.github.io/react-redux-with-typescript/index.html

class ActionItemEditor extends React.Component<ThisProps , ComponentState> {
  constructor(props: ThisProps) {
    super(props)
    this.state = 
      {
        item: props.selectedActionItem as ActionItem
      } 
    this.onDescriptionChanged = this.onDescriptionChanged.bind(this)
    this.onSubmitPressed = this.onSubmitPressed.bind(this)
    this.onClearPressed = this.onClearPressed.bind(this)
    this.onClosePressed = this.onClosePressed.bind(this)
  }

  public render() {
    if (this.props.selectedActionItem) {
      const selectedActionItem = this.props.selectedActionItem! as ActionItem
      return (
        <>
          <div className="blade">
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
        </>
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
    this.setState({ ...this.state, item: { ...this.state.item, description: "", id: 0 } })
  }

  private onClosePressed(event: React.SyntheticEvent<HTMLButtonElement>) {
    event.preventDefault()
    this.props.deselectItem!()
  }


}

export default container.connectContainer(ActionItemEditor)