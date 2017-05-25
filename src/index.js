import React from 'react';
import ReactDOM from 'react-dom';
import TreeNode from './view/TreeNode';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
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

ReactDOM.render(
  <TreeNode node={treeData} />,
  document.getElementById("container")
);


