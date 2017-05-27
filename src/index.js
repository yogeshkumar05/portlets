import React from 'react';
import ReactDOM from 'react-dom';
import TreeNode from './view/TreeNode';
import StreamingApi from './view/StreamingApi';
import Demograph from './view/Demograph';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import '../styles/main.scss'
import Constants from './common/constants';
import { DropdownButton, ButtonGroup, MenuItem, Button, ButtonToolbar } from 'react-bootstrap';
import { Provider } from "react-redux"
import store from "./store"
const container = document.getElementById('container')
var treeData = Constants.DEFAULT_TREE_DATA;
var streamingData = Constants.DEFAULT_STREAMING_DATA;

class DisplayPortlets extends React.Component {
  constructor() {
    super();
    this.state = {
      displayPort: true
    }
  }

  render() {
    var displayStyle;
    displayStyle = { display: "none" };

    if (this.state.displayPort) {
      displayStyle = { display: "block" };
    }
    return (
      <div>
        <header><h1 className="main-header">Portlets Demo</h1></header>
        <div className="portlet-container">
          <div className="portlet">
            <StreamingApi data={streamingData} />
          </div>
          <div className="portlet">
            <button className="resizeBtn" onClick={() => { this.setState({ displayPort: true }) }} >+</button>
            <button className="resizeBtn" onClick={() => { this.setState({ displayPort: false }) }} >-</button>
            <div style={displayStyle}>
              <h3>Tree Nodes</h3>
              <TreeNode node={treeData} addFn={this.test} />
            </div>
          </div>
          <div className="portlet">
            <Demograph />
          </div>

          <hr />
          <footer className="footer">
            <div>&copy; 2017 Portlets Demo</div>
          </footer>
        </div>
      </div>


    )
  }
}

ReactDOM.render(<Provider store={store}>
  <DisplayPortlets /></Provider>, container
);


