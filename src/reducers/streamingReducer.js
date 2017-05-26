export default function reducer(state = {
  tweets: [],
  error: null
}, action) {

  switch (action.type) {
    case "FETCH_STREAM_REJECTED": {
      return Object.assign({}, state, { error: action.payload })
    }
    case "FETCH_STREAM_FULFILLED": {
      return Object.assign({}, state, { tweets: action.payload });
    }
  }
  return state
}






