import React from 'react'
import './Node.css';


const Node = ({row, col}) => {
  // const {
  //   col,
  //   row,
  // } = this.props;

  return (
    <div className="node"
      id={`node-${row}-${col}`}
    ></div>
  )
}

export default Node