import React, { Component } from 'react';
import CheckBox from './containers/CheckBox';

export default class App extends Component{

  handleParentChange = () => {
    this.setState({
      isChecked: true
    })
  }

  render() {
    const { data } = this.props
    return (
      <React.Fragment>
        {data.map(item => {
          return (
            <CheckBox key={item.name} data={item} handleParentChange={this.handleParentChange}/>
          )
        })}
      </React.Fragment>
    )
  }
}