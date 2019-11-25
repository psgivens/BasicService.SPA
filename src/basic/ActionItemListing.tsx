import React from 'react';

// import TextInput from '../controls/TextInput';
// import Button from '../controls/Button';
// import { ActionItem } from 'src/basic/actions/PingSaga';

import * as container from './actionItemListing/actionItemListingContainer';
import { ActionItem } from './actions/PingSaga';
import Button from 'src/controls/Button';
// import { ActionItem } from './actions/PingSaga';

type ThisProps =
  container.StateProps
  & container.ConnectedDispatch
  & container.AttributeProps

type ComponentState = {} & {
}

// TODO: Move this into the css
const listingsStyle = {
  width: '300px'
}

class ActionItemListing extends React.Component<ThisProps, ComponentState> {
  constructor(props: ThisProps) {
    super(props)
    this.onEdit = this.onEdit.bind(this)
    this.onNewPressed = this.onNewPressed.bind(this)
  }

  public render() {
    return (
      <>
        <div className="blade" style={listingsStyle}>
          <div className="blade-title">
            Action Items
            <Button onClick={this.onNewPressed} text="( + )" />
          </div>
          <div className="blade-body">

            {this.props.actionItems!.map(value => {
              return (
                <div key={value.id} className="list-item" >
                  {value.description}
                  <Button onClick={this.onEdit(value)} text="Select" />
                </div>
              )
            })}
          </div>
        </div>
      </>
    )
  }

  private onEdit(item: ActionItem) {
    return (event: React.SyntheticEvent<HTMLButtonElement>) => {
      event.preventDefault()
      this.props.selectItem!(item)
    }
  }

  private onNewPressed(event: React.SyntheticEvent<HTMLButtonElement>) {
    event.preventDefault()
    this.setState({ ...this.state, isItemSelected: true })
    this.props.newActionItem!()
  }
}

export default container.connectContainer(ActionItemListing)