import React from 'react';
import { connect } from 'react-redux';

class Details extends React.Component{
  render() {
    if(!this.props.car){
      return <div>Choose car</div>
    }
    return (
      <div>
        <h2>{this.props.car.name}</h2>
        <img src={this.props.car.url} width={300} alt=" "/>
        <p>{this.props.car.desc}</p>
        <p>
          Speed: {this.props.car.speed},
          Weight: {this.props.car.weight}
        </p>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    car: state.active
  }
}

export default connect(mapStateToProps)(Details)