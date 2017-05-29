import axios from "axios";
import store from './../store'
var count = 0;
export function addNodeAction(currentNode, newNode) {
    store.dispatch({ type: "ADD_NODE", payload: {currentNode, newNode} })
}

export function updateNode(currentNode, newNode) {
    store.dispatch({ type: "UPDATE_NODE", payload: {currentNode, newNode} })
}

export function deleteNode(currentNode) {
    store.dispatch({ type: "DELETE_NODE", payload: {currentNode} })
}
