import axios from "axios";
import store from './../store'
var count = 0;
export function addParentAction(newNode) {
    store.dispatch({ type: "ADD_PARENT", payload: { newNode } })
}

export function addNodeAction(currentNode, newNode) {
    store.dispatch({ type: "ADD_NODE", payload: { currentNode, newNode } })
}

export function updateNode(currentNode, newNode) {
    store.dispatch({ type: "UPDATE_NODE", payload: { currentNode, newNode } })
}

export function deleteNode(currentNode) {
    store.dispatch({ type: "DELETE_NODE", payload: { currentNode } })
}

export function createInitialTree() {
    store.dispatch({ type: "CREATE_TREE", payload: {} })
}
