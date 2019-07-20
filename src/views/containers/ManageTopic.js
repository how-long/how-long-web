import React, { Component } from 'react';
import { connect } from 'react-redux';

import moment from 'moment'


import { topicsOperations } from "../../state/ducks/topics"
import { faHome, faSyncAlt, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const mapStateToProps = state => ({
  ...state
})


const mapDispatchToProps = dispatch => ({
  addTopic: (topic) => dispatch(topicsOperations.addTopic(topic)),
  removeTopic: (index) => dispatch(topicsOperations.removeTopic(index)),
  refreshTopic: (index) => dispatch(topicsOperations.refreshTopic(index))
})


class Topic extends Component {
  constructor (props) {
    super(props)

    this.state = {
      topic: '',
    };
  }

  addTopic = () => {
    console.log(this.state.topic)
    this.props.addTopic(this.state.topic);
    this.setState({topic: ''})
  }

  removeTopic = (index) => {
    this.props.removeTopic(index);
  }

  refreshTopic = (index) => {
    this.props.refreshTopic(index);
  }

  handleChange = (event) => {
    this.setState({topic: event.target.value})
  }

  handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      this.addTopic()
    }
  }


  render() {
    return (
      <div>
        <h1>Topics</h1>
        <input type="text" onChange={this.handleChange} onKeyDown={this.handleKeyDown} value={this.state.topic}></input>
        <button onClick={() => this.addTopic()}>Add your topics</button>

        {this.props.topicsState.manageTopic.topics.map((item, key) =>
          <div className="row" key={key}>
            <div className="col-md-2 offset-md-3 text-left">
              <span>{item.name}</span>
            </div>
            <div className="col-md-2">
              <span>{moment(item.time).format("YYYY-MM-DD hh:mm:ss")}</span>
            </div>
            <div className="col-md-3">
              <button className="fa fa-sync-alt" onClick={() => this.removeTopic(key)}><FontAwesomeIcon icon={faTrashAlt} /></button>
              <button onClick={() => this.refreshTopic(key)}><FontAwesomeIcon icon={faSyncAlt} /></button>
            </div>
          </div>
        )}
      </div>
    );
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Topic);
