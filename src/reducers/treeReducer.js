import constants from './../common/constants';
export default function reducer(state = {
  treeData:Object.assign({},constants.DEFAULT_TREE_DATA)
}, action) {

  switch (action.type) {
    case "ADD_NODE": {
      let Obj=Object.assign({}, state);
      Obj.treeData.title=state.treeData.title;
   return Object.assign({}, state, Obj)
   
    }
    case "UPDATE_NODE": {
       let currentState=Object.assign({}, state.treeData);
        currentState.childNodes.map((item, index)=>
        {
          if(item.title===action.payload.currentNode.title)
          {
            item.title=action.payload.newNode.title
          }
          
        });
return Object.assign({}, state, currentState);
    }
    case "DELETE_NODE":
    {

    }
  }
  return state
}






