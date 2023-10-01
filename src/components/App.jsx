import { Component } from "react"
import Form from "./Form/Form";
import Contacts from "./Contacts/Contacts";
import Filter from "./Filter/Filter";


export class App extends Component{
  state = {
    contacts: [],
    filter: '',
    
  }

  formSubmitHandle = (data, id) => {
    this.setState({
      contacts: [{ id, ...data }, ...this.state.contacts],
    
    })

  }

  filterChangeHandle = data => {
    this.setState({
      filter: data
    })
  };

  onContactDelete = (name) => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.name !== name)
    })
  };
  

  render() {
    return (
      <div
        style={{
          padding: '32px',
          height: '100vh',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <p>Phonebook</p>
        <Form
          onSubmit={this.formSubmitHandle}
          contacts={this.state.contacts}
        />
        <p>Contacts</p>
        <Filter
            filter={this.state.filter}
            onChange={this.filterChangeHandle}
        />

        <Contacts
          contacts={this.state.contacts}
          filterName={this.state.filter}
          onContactDelete={this.onContactDelete}
        />

      </div>
    );
  }
};
