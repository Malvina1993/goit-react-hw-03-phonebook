import css from './Form.module.css';

import React, { Component } from 'react';
import { nanoid } from 'nanoid';



export default class Form extends Component {
    state = {
        name: '',
        number: '',
    }

    
    
    handleChange = (e) => {
        
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value,
        });

        
    }

    handleFormSubmit = (e) => { 
        e.preventDefault();

        this.setState({
            name: '',
            number: '',
           
        });

        if (this.props.contacts.some((contact) => contact.name === this.state.name)) { 
            alert('This contact already exists');
            return;
        }


        this.props.onSubmit(this.state, nanoid())
       
    }

  render() {
      return (
        <div>
            
            <form className={css.form} onSubmit={this.handleFormSubmit}>
                <label className={css.label}>Name</label>
                    <input
                        className={css.input}
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        required
                    />
                <label className={css.label}>Number</label>
                  <input
                      className={css.input}
                      type="tel"
                      name="number"
                      value={this.state.number}
                      onChange={this.handleChange}
                      required
                  />
                {/* <label className={css.label}>Message</label>
                <textarea className={css.textarea} name="message" /> */}
                <button className={css.button} type='submit'>Add contact</button>
            </form>   
       </div>
    )
  }
}
