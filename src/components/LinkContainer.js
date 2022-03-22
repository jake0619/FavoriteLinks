import React from 'react'
import Form from './Form'
import Table from './Table'
// import Table from './Table';
// import Form from './Form';

class LinkContainer extends React.Component {
  constructor(props) {
    super(props)
    
    /* TODO - Create state object for storing favLinks */
    this.state = {
      Links: []
    }
  }

  handleRemove = (index) => {
    /*
            TODO - Create logic for setting the state to filter array and remove favLink at index
        */
    let stateLinks = this.state.Links
    stateLinks.splice(index, 1)
    this.setState({
      links: stateLinks
    }) 
  }

  handleSubmit = (favLink) => {
    /*
            TODO - Create logic to setState and add new favLink to favLinks array in state
        */
    
    let stateLinks = this.state.Links
    stateLinks.push(favLink)
    this.setState({
      Links: stateLinks
    })
    console.log(this.state.Links)
  }

  render() {
    return (
      <div className="container">
        <h1>My Favorite Links</h1>
        <p>Add a new url with a name and link to the table.</p>
        {/*TODO - Add Table Component */}
        <Table links={this.state.Links} removeLink={this.handleRemove}/> 

        <br />

        <h3>Add New</h3>
        {/*TODO - Add Form Component */}
        <Form formSubmit={this.handleSubmit}/>
      </div>
    )
  }
}

export default LinkContainer
