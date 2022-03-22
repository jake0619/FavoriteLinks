import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)

    /*
            TODO - set initial state for link name and URL 
        */
    this.state = {
      Name: "",
      URL: ""

    }
  }

  handleNameChange = (event) => {
    /*
            TODO - Logic for changing state based on form changes
        */
    //console.log(event.target.value)
    this.setState({
      Name: event.target.value
    })
  }

  handleURLChange = (event) => {
    /*
            TODO - Logic for changing state based on form changes
        */
    this.setState({
      URL: event.target.value
    })
  }

  onFormSubmit = (event) => {
    // to prevent page reload on form submit
    event.preventDefault()

    /*
            TODO - Logic for calling props to handle submission and setting state changes
        */
    //console.log(this.state)
    this.props.formSubmit(this.state)
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        {/* TODO - Logic for returning a form element with labels and inputs for link name and URL */}
        <label>Name</label>
        <input type="text" onChange={this.handleNameChange}></input>
        <label>URL</label>
        <input type="text" onChange={this.handleURLChange}></input>
        <input type="submit"></input>
      </form>
    )
  }
}

export default Form
