import constants from './../common/constants';
export default function reducer(state = {
  treeData: {}
}, action) {

  switch (action.type) {
    case "CREATE_TREE"://create tree with initial tree data
      {
        let initialData = {};
        initialData.treeData = constants.DEFAULT_TREE_DATA;
        return Object.assign({}, state, initialData);
      }
    case "ADD_PARENT"://add a new root to the existing tree
      {
        let newTree = {};
        newTree.treeData = { title: action.payload.newNode };
        newTree.treeData.childNodes = [state.treeData]
        return Object.assign({}, state, newTree)
      }
    case "ADD_NODE": {

    }
    case "UPDATE_NODE": {
    }
    case "DELETE_NODE":
      {

      }
  }
  return state
}






