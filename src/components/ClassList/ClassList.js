import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

export default class ClassList extends Component {
  constructor() {
    super()
    
    this.state = {
      students : []
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:3005/students/?class=${this.props.match.params.class}`).then( (res) => {
      this.setState({
        students : res.data
      });
    });
  }

  render() {
    const classTitle = this.props.match.params.class;
    const studentNames = this.state.students.map( (student, i) => (<Link to={`/student/${this.state.students[i].id}`} key={student.id}><h3>{student.first_name} {student.last_name}</h3></Link>))
    return (
      <div className="box">
        <Link to="/"><button>Back to Home</button></Link>
        <h1>{classTitle}</h1>
        <h2>ClassList:</h2>
        {studentNames}
      </div>
    )
  }
}