import { DropdownButton, ButtonGroup, MenuItem, Button, Modal, ButtonToolbar } from 'react-bootstrap';
import React, { Component } from 'react';
import Constants from './../common/constants';
import TreeNode from './TreeNode';
import { connect } from "react-redux"
import { addParentAction, createInitialTree } from './../actions/treeActions';
class TreeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayPort: true,
      treeData: {},
      newParent: "",
      showModal: false,
      screenMinimized: false//to control screen minimize or maximize
    };

    this.addParent = this.addParent.bind(this);
    this.handleNodeTextChange = this.handleNodeTextChange.bind(this);
    this.minimizePortlet = this.minimizePortlet.bind(this);
    this.maximizePortlet = this.maximizePortlet.bind(this);
  }

  componentWillMount() {
    createInitialTree();//create tree from initial data
  }

  handleNodeTextChange(event) {
    this.setState({ newParent: event.target.value });//handle new root value change
  }

  addParent() {
    addParentAction(this.state.newParent);
    this.setState({ showModal: false })
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data != undefined && this.props.data != nextProps.data)
      this.setState({ treeData: nextProps.data })
  }

  maximizePortlet() {
    this.setState({ screenMinimized: false });
  }

  minimizePortlet() {
    this.setState({ screenMinimized: true });
  }

  render() {

    var displayPortStyle;
    //dont display the portlet if screen is minimized, else display
    if (this.state.screenMinimized) {
      displayPortStyle = { display: "none" };
    }
    else {
      displayPortStyle = { display: "block" };
    }

    //display option to minimize or maximize portlet
    let maximizeController = this.state.screenMinimized ?
      <button title="maximize" className="resizeBtn" onClick={this.maximizePortlet} >+</button> :
      <button title="minimize" className="resizeBtn" onClick={this.minimizePortlet} >-</button>;

    return (<div>
      {maximizeController}
      <div style={displayPortStyle}>
        <h3>Tree Nodes</h3>
        <Button bsStyle="info" bsSize="small" onClick={() => this.setState({ showModal: true })}>+ Add A New Tree Root</Button>
        <TreeNode node={this.state.treeData} />
      </div>

      <Modal show={this.state.showModal} onHide={() => { this.setState({ showModal: false }) }}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Parent Node</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="text" value={this.state.newParent} onChange={this.handleNodeTextChange} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.addParent}>Add</Button>
          <Button onClick={() => { this.setState({ showModal: false }) }}>Cancel</Button>
        </Modal.Footer>
      </Modal>

    </div>)
  }
}
export default connect(state => (
  {
    data: state.treeReducer.treeData
  }
))(TreeView);