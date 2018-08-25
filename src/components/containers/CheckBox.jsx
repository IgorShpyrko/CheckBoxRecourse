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
    isChecked: false,
    isParentChecked: false,
    isChildChecked: false
  }

  handleChange = () => {
    if(this.state.isChecked === false){
      this.setState({
        isParentChecked: true
      })
    }
    if(this.state.isChecked === true){
      this.setState({
        isChildChecked: false
      })
    }
    this.setState({
      isParentChecked: !this.state.isParentChecked
    })
  }

  render () {
    console.log(this.props.data)
    return (
      <React.Fragment>
        <div style={styles.divWrapper}>
          <input type="checkbox" checked={ this.state.isChecked } onChange={this.handleChange}/>
          <span>{this.props.data.name}</span>
        {this.props.data.children && this.props.data.children.map((item, idx) => {
          return (
            item ? <CheckBox key={idx} data={item} isChecked={this.state.isChildChecked} /> : null
          )
        })}
        </div>
      </React.Fragment>
    )
  }
}