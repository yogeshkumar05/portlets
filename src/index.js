import React from 'react';
import ReactDOM from 'react-dom';
import TreeNode from './view/TreeNode';
import StreamingApi from './view/StreamingApi';
import Demograph from './view/Demograph';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import '../styles/main.scss'
import {DropdownButton, ButtonGroup, MenuItem, Button, ButtonToolbar} from 'react-bootstrap';
//import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
var treeData = 
  {
    title: "Tree",
    childNodes: 
    [
      {title: "1"},

      {title: "2", 
          childNodes: 
          [
            {title: "2.1", 
              childNodes: 
              [
                  {title: "2.1.1"}
              ]
            },
          {title: "2.2"}
      ]},

      {title: "3"},
    ]
  };

class DisplayPortlets extends React.Component
{
  render()
  {
    //alert(window.innerHeight)
  return(
    <div>
      <header><h1 className="main-header">Portlets Demo</h1></header>
      <div className="portlet-container">
        <StreamingApi/>
        <div style={{height:window.innerHeight}} className="portlet">
          <h3>Tree Nodes</h3>
          <TreeNode node={treeData} />
        </div>
      <Demograph/>
     </div>
     <hr/>
        <footer>
            <div>&copy2017 Portlets Demo</div>
            </footer>
    </div>
  )
  }
}
var display =[]

ReactDOM.render(
  <DisplayPortlets/>,
  document.getElementById("container")
);


