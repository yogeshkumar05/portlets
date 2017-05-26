import axios from "axios";
import store from './../store'
export function fetchStreamingData() {
  axios.get("http://rest.learncode.academy/api/reacttest/tweets")
    .then((response) => {
      store.dispatch({ type: "FETCH_STREAM_FULFILLED", payload: response.data })
    })
    .catch((err) => {
      store.dispatch({ type: "FETCH_STREAM_REJECTED", payload: err })
    })
}
