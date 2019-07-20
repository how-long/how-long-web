import types from "./types"


export const addTopic = topic =>  ({
  type: types.ADD_TOPIC,
  payload: topic
})

export const removeTopic = index => ({
  type: types.REMOVE_TOPIC,
  payload: index
})

export const refreshTopic = (index, topic) => ({
  type: types.REFRESH_TOPIC,
  payload: {
      index: index,
      topic: topic 
    }
})
