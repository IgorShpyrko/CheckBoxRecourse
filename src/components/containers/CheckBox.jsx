import React, { Component } from 'react';

const styles = {
  divWrapper: {
    margin: '10px',
    padding: '5px',
    border: '1px solid black'
  }
}

export default class CheckBox extends Component{
  state = {
    isChecked: false
  }

  handleChange = () => {
    this.setState({
      isChecked: !this.state.isChecked
    })
    if(this.state.isChecked === false){
      if(this.props.parentChange){
        this.props.parentChange()
      }
    }
  }

  handleParentChange = () => {
    this.setState({
      isChecked: true
    })
    if(this.props.parentChange){
      this.props.parentChange()
    }
  }

  componentDidUpdate() {
    if(this.props.parentCheked === false){
      if(this.state.isChecked === true){
        this.setState({
          isChecked: false
        })
      }
    }
  }

  render () {
    return (
      <React.Fragment>
        <div style={styles.divWrapper}>
          <input type="checkbox" checked={ this.state.isChecked } onChange={this.handleChange}/>
          <span>{this.props.data.name}</span>
        {this.props.data.children && this.props.data.children.map(item => {
          return (
            item ? <CheckBox key={item.name} data={item} parentCheked={this.state.isChecked} parentChange={this.handleParentChange}/> : null
          )
        })}
        </div>
      </React.Fragment>
    )
  }
}