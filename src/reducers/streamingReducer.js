export default function reducer(state = {
  tweets: [],
  error: null,
  count:1
}, action) {

  switch (action.type) {
    case "FETCH_STREAM_REJECTED": {
      return Object.assign({}, state, { error: action.payload })
    }
    case "FETCH_STREAM_FULFILLED": {
      return Object.assign({}, state, { tweets: action.payload, count:action.payload.count });
    }
  }
  return state
}






