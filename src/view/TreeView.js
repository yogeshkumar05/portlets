import { DropdownButton, ButtonGroup, MenuItem, Button, Modal, ButtonToolbar } from 'react-bootstrap';
import React, {Component} from 'react';
import Constants from './../common/constants';
import TreeNode from './TreeNode';
import { connect } from "react-redux"
class TreeView extends Component
{
      constructor(props) {
    super(props);
    let initialData={};
    this.state = {
      displayPort: true,
      treeData :Constants.DEFAULT_TREE_DATA,
      newParent:"",
      showModal:false
    };

    this.addParent=this.addParent.bind(this);
    this.handleNodeTextChange=this.handleNodeTextChange.bind(this);
  }
  handleNodeTextChange(event)
  {
    this.setState({newParent:event.target.value})
  }

  addParent()
  {
    alert("add")
    let currentTree=this.state.treeData;
    let newTree={};
    newTree.title=this.state.newParent;
    newTree.childNodes=[];
    newTree.childNodes.push(currentTree)
    currentTree=newTree;
    alert(newTree.title)
    this.setState({treeData:currentTree, showModal:false})

    console.info(`treedata
    ${JSON.stringify(this.state.treeData)}`)

  }
  componentWillReceiveProps(nextProps)
  {
    alert("receive")
    console.info(`receive
    ${JSON.stringify(nextProps)}`)
  }

    render()
    {
       
        var displayStyle;
    displayStyle = { display: "none" };

    if (this.state.displayPort) {
      displayStyle = { display: "block" };
    }
        return(<div>
            <button className="resizeBtn" onClick={() => { this.setState({ displayPort: true }) }} >+</button>
            <button className="resizeBtn" onClick={() => { this.setState({ displayPort: false }) }} >-</button>
            <div style={displayStyle}>
              <h3>Tree Nodes</h3>
             <Button bsStyle="info" onClick={()=>this.setState({showModal:true})}>+ Add A New Tree Root</Button>
              <TreeNode node={this.state.treeData} />
            </div>

            <Modal show={this.state.showModal} onHide={() => { this.setState({ showModal: false }) }}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Parent Node</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input type="text" value={this.state.nodeTextValue} onChange={this.handleNodeTextChange} />
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