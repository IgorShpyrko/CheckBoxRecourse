import React, { Component } from 'react';
import CheckBox from './containers/CheckBox';

export default class App extends Component{
  state = {
    isChecked: false
  }

  handleChange = () =>{
    this.setState({
      isChecked: !this.state.isChecked
    })
  }

  render() {
    console.log(this.props)
    const { data } = this.props
    return (
      <React.Fragment>
        {data.map(item => {
          return (
            <React.Fragment>
              <input type="checkbox" />
              <span>{item.name}</span>
              <CheckBox key={item.name} parentChecked={this.state.isChecked} data={item && item.children}/>
            </React.Fragment>
          )
        })}
      </React.Fragment>
    )
  }
}