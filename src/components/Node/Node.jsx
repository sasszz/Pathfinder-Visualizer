import React, { Component } from 'react'
import './Node.css';


export default class Node extends Component {
  render() {
    const {
      col,
      row,
      isFinish,
      isStart,
    } = this.props;

    const color =
      isFinish ? 'node-finish' :
      isStart ? 'node-start' :
      '';


    return (
      <div
        className={`node ${color}`}
        id={`${row}-${col}`}
      ></div>
    )
  }
}