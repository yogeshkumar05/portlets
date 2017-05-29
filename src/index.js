import React from 'react';
import ReactDOM from 'react-dom';
import TreeNode from './view/TreeNode';
import TreeView from './view/TreeView';
import StreamingApi from './view/StreamingApi';
import Demograph from './view/Demograph';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import '../styles/main.scss'
import Constants from './common/constants';
import { DropdownButton, ButtonGroup, MenuItem, Button, ButtonToolbar } from 'react-bootstrap';
import { Provider } from "react-redux"
import store from "./store"
const container = document.getElementById('container')
class DisplayPortlets extends React.Component {
  render() {
    
    return (
      <div>
        <header><h1 className="main-header">Portlets Demo</h1></header>
        <div className="portlet-container">
          <div className="portlet">
            <StreamingApi/>
          </div>
          <div className="portlet">
            <TreeView />
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


