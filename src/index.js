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
  constructor()
  {
    super();
    this.state={
            displayPort:false
        }
  }
  render()
  { 
        var displayStyle;
        displayStyle={display: "none"}; 
    
        if (this.state.displayPort) {
          displayStyle = {display: "block"};
        }
    //alert(window.innerHeight)
  return(
    <div>
      <header><h1 className="main-header">Portlets Demo</h1></header>
      <div className="portlet-container">
        <div className="portlet">
          <StreamingApi/>
        </div>
        <div className="portlet">
          <button className="resizeBtn" onClick={()=>{this.setState({displayPort:true})}} >+</button>
                <button className="resizeBtn" onClick={()=>{this.setState({displayPort:false})}} >-</button>
                <div style={displayStyle}>
          <h3>Tree Nodes</h3>
          <TreeNode node={treeData} />
          </div>
        </div>
        <div className="portlet">
          <Demograph/>
        </div>

      <hr/>
        <footer className="footer">
            <div>&copy; 2017 Portlets Demo</div>
        </footer>
    </div>
     </div>
     
     
  )
  }
}
var display =[]

ReactDOM.render(
  <DisplayPortlets/>,
  document.getElementById("container")
);


