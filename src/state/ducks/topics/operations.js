import * as actions from "./actions"

const addTopic = (name) => dispatch => {
  let date = new Date()
  const topic = {
    name: name,
    time: date.getTime()
  }
  dispatch(actions.addTopic(topic))
}

const removeTopic = actions.removeTopic

const refreshTopic = (index) => (dispatch, getState) => {
  let date = new Date()
  let oldTopic = getState().topicsState.manageTopic.topics[index]
  const topic = {
    name: oldTopic.name,
    time: date.getTime()
  }

  dispatch(actions.refreshTopic(index, topic))
}

export default {
  addTopic,
  removeTopic,
  refreshTopic
}
