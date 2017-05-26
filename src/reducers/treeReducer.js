const treeReducer = (state = {
  treeData: [],
  error: null
}, action = null) => {

  switch (action.type) {
    case "ADD_NODE": {
      return Object.assign({}, state, {})
    }

    case "EDIT_NODE": {
    }

    case "DELETE_NODE": {
    }
  }

  return state
}
