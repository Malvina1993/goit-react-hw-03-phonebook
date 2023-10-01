import React, { Component } from 'react'
import css from './Contact.module.css'
export default class Contact extends Component {


  render() {
    return (
        <div className={css.contact}>
            <li className={css.liContact}>{this.props.name}: {this.props.number}</li>
            <button className ={css.delContact} onClick={() => this.props.onContactDelete(this.props.name)}>Delete</button>
        </div>
    )
  }
}
