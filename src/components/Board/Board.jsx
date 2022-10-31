import React, { useEffect, useState, Component } from 'react'
import Node from '../Node/Node';
import Header from '../Header/Header';

const START_NODE_ROW = 10;
const START_NODE_COL = 15;
const FINISH_NODE_ROW = 10;
const FINISH_NODE_COL = 35;

export default class Board extends Component {

  constructor() {
    super();
    this.state = {
      grid: [],
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
            // {console.log(row)}
            return (
              <div key={rowIdx} className="inline-flex">
                {row.map((node, nodeIdx) => {
                  const { row, col, isFinish, isStart } = node;
                  console.log(isFinish)
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
  console.log(grid1)
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
