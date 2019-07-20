import { combineReducers } from "redux"
import CONSTANTS from "./constants"
import types from "./types"


const manageTopic = (state = {
  topics: []
}, action) => {
  switch (action.type) {
    case types.ADD_TOPIC:
      return { 
        ...state,
        topics: [action.payload, ...state.topics]
      }
    case types.REMOVE_TOPIC:
      return { 
        ...state,
        topics: [
          ...state.topics.slice(0, action.payload),
          ...state.topics.slice(action.payload + 1)
        ]
      }
    case types.REFRESH_TOPIC:
      return { 
        ...state,
        topics: [
          action.payload.topic,
          ...state.topics.slice(0, action.payload.index),
          ...state.topics.slice(action.payload.index + 1)
        ]
      }
    default:
      return state
  }
}


const reducer = combineReducers({
  manageTopic
});

export default reducer;
