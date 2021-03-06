import React from 'react';
import ReactDOM from 'react-dom';
import { addNodeAction } from './../actions/treeActions'
import { DropdownButton, MenuItem, SplitButton, Modal, Button } from 'react-bootstrap';

export default class TreeNode extends React.Component {
  constructor(props) {
    super(props);
    let nodes = this.props.node;
    this.state = {
      showChildren: true,
      treeData: nodes,
      showModal: false,
      addEditFlag: false,
      deleteFlag: false,
      nodeTextValue: "",
      disableNode: false
    };

    this.toggleChildren = this.toggleChildren.bind(this);
    this.addNode = this.addNode.bind(this);
    this.updateNode = this.updateNode.bind(this);
    this.deleteNode = this.deleteNode.bind(this);
    this.handleNodeTextChange = this.handleNodeTextChange.bind(this);
  }

  handleNodeTextChange(event) {
    this.setState({ nodeTextValue: event.target.value });
  }

  toggleChildren() {
    this.setState({ showChildren: !this.state.showChildren });
  }
  addNode() {
    addNodeAction(this.state.treeData, this.state.nodeTextValue)
    let treeData = this.state.treeData;
    if (treeData.childNodes == undefined)
      treeData.childNodes = [];
    treeData.childNodes.push({ title: this.state.nodeTextValue });
    this.setState({ treeData, showModal: false });
    this.setState({ showModal: false });
  }
  updateNode() {
    let treeData = this.state.treeData;
    treeData.title = this.state.nodeTextValue;
    this.setState({ treeData, showModal: false });
    this.setState({ showModal: false });
  }
  deleteNode() {
    let treeData = this.state.treeData;
    treeData.title = "";
    treeData.childNodes = [];
    this.setState({ treeData, showModal: false, deleteFlag: false });
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.node != undefined && nextProps.node != this.props.node) {
      this.setState({ treeData: nextProps.node })
    }

  }

  render() {
    let modalTitle = this.state.addEditFlag == true ? "Add New Child for Node: " + this.state.treeData.title : "Update the Node";
    modalTitle = this.state.deleteFlag == true ? "Delete Node: " + this.state.treeData.title : modalTitle;

    let modalBody = this.state.deleteFlag == true ? "Are you sure you want to delete the node?" : <input type="text" value={this.state.nodeTextValue} onChange={this.handleNodeTextChange} />;

    let modalFooter = this.state.addEditFlag == true ? <Button onClick={this.addNode}>Add</Button> : <Button onClick={this.updateNode}>Update</Button>
    modalFooter = this.state.deleteFlag == true ? <Button onClick={this.deleteNode}>Yes</Button> : modalFooter;


    var childNodes;
    if (this.state.treeData.childNodes != null) {
      childNodes = this.state.treeData.childNodes.map(function (treeDataEntry, index) {
        return (<li key={index}><TreeNode node={treeDataEntry} />

        </li>);
      });
    }

    var displayStyle;
    if (!this.state.showChildren) {
      displayStyle = { display: "none" };
    }

    return (
      <div className="tree-div">
        {
          this.state.treeData.title != "" ?
            <SplitButton bsStyle="default" bsSize="small" title={this.state.treeData.title} onClick={this.toggleChildren} id="split-button-basic" disabled={this.state.disableNode}>
              <MenuItem eventKey="1" onClick={() => { this.setState({ showModal: true, addEditFlag: true }) }}>Add New Child</MenuItem>
              <MenuItem eventKey="2" onClick={() => { this.setState({ showModal: true, addEditFlag: false, nodeTextValue: this.state.treeData.title }) }}>Edit Node</MenuItem>
              <MenuItem eventKey="3" onClick={() => { this.setState({ showModal: true, deleteFlag: true }) }}>Delete Node</MenuItem>
            </SplitButton> : ""
        }
        <ul style={displayStyle}>
          {childNodes}
        </ul>

        <Modal show={this.state.showModal} onHide={() => { this.setState({ showModal: false }) }}>
          <Modal.Header closeButton>
            <Modal.Title>{modalTitle}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {modalBody}
          </Modal.Body>
          <Modal.Footer>
            {modalFooter}
            <Button onClick={() => { this.setState({ showModal: false }) }}>Cancel</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}