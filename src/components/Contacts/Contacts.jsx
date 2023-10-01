import Contact from 'components/Contact/Contact';
import React, { Component } from 'react'

export default class Contacts extends Component {  


    onFilterChange = () => { 
        
        return (this.props.contacts.filter((contact) => contact.name.toLowerCase().includes(this.props.filterName.toLowerCase())));
    }


  render() {
    return (
        <div>
            
            <ul>
                {this.onFilterChange().map((contact) => {
                    return (
                        <Contact
                            key={contact.id}
                            name={contact.name}
                            number={contact.number}
                            onContactDelete={this.props.onContactDelete}
                        />
                    )
                 })
                        
                }
            </ul>
        </div>
    )
  }
}
