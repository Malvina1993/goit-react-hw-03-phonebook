import css from './Filter.module.css'
import React, { Component } from 'react'

export default class Filter extends Component {
    state = {
        filter: this.props.filter
    }
    handleChange = (e) => { 
    
        this.setState({
            filter: e.target.value
        })

        this.props.onChange(e.target.value);
        
    }

  render() {
    return (
      <div>
        <p className={css.filterTittle}>Find contacts by name</p>
        <input
          className={css.input}
                type="text"
                name="filter"
                value={this.state.filter}
                onChange={this.handleChange}
            />
      </div>
    )
  }
}
