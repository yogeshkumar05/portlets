import axios from "axios";
import store from './../store'
var count=0;
export function fetchStreamingData() {
  count++;
  axios.get("http://rest.learncode.academy/api/reacttest/tweets")
    .then((response) => {
      response.data.count=count;
      store.dispatch({ type: "FETCH_STREAM_FULFILLED", payload: response.data })
    })
    .catch((err) => {
      store.dispatch({ type: "FETCH_STREAM_REJECTED", payload: err })
    })
}
