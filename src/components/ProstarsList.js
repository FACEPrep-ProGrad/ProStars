import React, { Component } from 'react';
import Contact from './Prostars'


class ContactList extends Component{
  constructor(props){
    super(props)
    this.state = {
      contacts : this.props.contacts || [],
      firstContacts: this.props.contacts.slice(0,5)
    }
  }
  addNewContact = () => {
    const newContacts = this.state.contacts.filter(c => !this.state.firstContacts.includes(c))
const randomContact = newContacts[Math.floor(Math.random() * newContacts.length)]
this.setState({ firstContacts: [...this.state.firstContacts, randomContact] })
    }
  
  sortByName = () => {
    const sortFirstByName = this.state.firstContacts.sort((a, b) => a.name.localeCompare(b.name))
    this.setState({
      firstContacts: sortFirstByName
    })
  }
  sortByPopularity = () => {
    const sortFirstByPopularity = this.state.firstContacts.sort((a, b) =>b.popularity - a.popularity)
    this.setState({
      firstContacts: sortFirstByPopularity
    })
  }
  deleteContact = (index) => {
    const newFirst = this.state.firstContacts;
    newFirst.splice(index, 1);
    this.setState({firstContacts: newFirst})
  }

  render() {
    console.log(this.props)
    return (
        <div >
            <div className="btn-group" role="group" aria-label="...">
                    <button type="button" className="btn btn-primary" onClick={this.addNewContact}>Get Random Contact</button>
                    <button type="button" className="btn btn-secondary" onClick={this.sortByName}>Sort By Name</button>
                    <button type="button" className="btn btn-info" onClick={this.sortByPopularity}>Sort By popularity</button>
            </div> 
            <table className="table" style= {{textAlign: 'center', margin: 'auto'}}>
                <thead>
                    <tr className="list-group list-group-horizontal-lg">
                        <th className="list-group-item col-lg-3">Picture</th>
                        <th className="list-group-item col-lg-3">Name</th> 
                        <th className="list-group-item col-lg-3">popularity</th>
                        <th className="list-group-item col-lg-3">Action</th>
                    </tr>
                    {this.state.firstContacts.map((contact, index) =>{
                        return (<Contact key={index} {...contact} deleteContact={() => this.deleteContact(index)}/>)
                       
                    })}
                </thead>
            </table>
        </div>
    );
}
}

export default ContactList;