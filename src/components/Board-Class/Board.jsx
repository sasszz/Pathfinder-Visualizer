import React, { useEffect, useState, Component } from 'react'
import Node from '../Node/Node';
import Header from '../Header/Header';


  // CHANGE START
  document.onmouseover = function(e) {
  // console.log(e.target.id);
}

  document.onmousedown = (e) => {
    e.preventDefault();
    if (e.target.className === "node node-start") {
      e.target.className = "node"
      console.log("start");
      document.onmouseup = (e) => {
        e.target.className = "node node-start"
        let id = e.target.id
        let coordinates = id.split("-");
        let sr = parseInt(coordinates[0]);
        let sc = parseInt(coordinates[1]);
        console.log(sr, sc)
        // set state for sr/sc
        return sr, sc;
      }
    }
    if (e.target.className === "node node-finish") {
      e.target.className = "node"
      console.log("finish");
      document.onmouseup = (e) => {
        e.target.className = "node node-finish"
        let id = e.target.id
        let coordinates = id.split("-");
        let fr = parseInt(coordinates[0]);
        let fc = parseInt(coordinates[1]);
        console.log(fr, fc)
        // set state for fr/fc
        // get initial grid - after?
        return fr, fc;
      }
    }
  }

const START_NODE_ROW = 10;
const START_NODE_COL = 10;
const FINISH_NODE_ROW = 10;
const FINISH_NODE_COL = 35;

export default class Board extends Component {

  constructor() {
    super();
    this.state = {
      grid: []
    };
  }

  componentDidMount() {
    const grid = getInitialGrid();
    this.setState({ grid });
  }

  render() {
    const { grid } = this.state;

    return (
      <>
        <Header></Header>
        <div className="grid justify-items-center">
          {grid.map((row, rowIdx) => {
            return (
              <div key={rowIdx} className="inline-flex">
                {row.map((node, nodeIdx) => {
                  const { row, col, isFinish, isStart } = node;
                  console.log(isStart)
                  return (
                    <Node
                      key={nodeIdx}
                      col={col}
                      row={row}
                      isFinish={isFinish}
                      isStart={isStart}
                    ></Node>
                  );
                })}
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

const getInitialGrid = () => {
  const grid1 = [];
  for (let row = 0; row < 30; row++) {
    const currentRow = [];
    for (let col = 0; col < 50; col++) {
      currentRow.push(createNode(col, row));
    }
    grid1.push(currentRow);
  }
  return grid1;
}

const createNode = (col, row) => {
  return {
    col,
    row,
    isStart: row === START_NODE_ROW && col === START_NODE_COL,
    isFinish: row === FINISH_NODE_ROW && col === FINISH_NODE_COL,
    previousNode: null,
  };
};