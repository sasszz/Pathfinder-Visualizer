import React, {useEffect, useState} from 'react'
import Node from '../Node/Node';

const Board = () => {
  const [grid, setGrid] = useState([]);

  useEffect(() => {
    setGrid(getInitialGrid());
    }, []);

  return (
    <div className="grid">
      {grid.map((row, rowIdx) => {
        // {console.log(row)}
        return (
          <div key={rowIdx}>
            {row.map((node, nodeIdx) => {
              const {row, col} = node;
              console.log(col)
              return (
                <Node
                key={nodeIdx}
                col={col}
                row={row}
                ></Node>
                );
              })}
            </div>
          );
        })}
      </div>
  );
}


const getInitialGrid = () => {
  const grid1 = [];
  for (let row = 0; row < 5; row++) {
    const currentRow = [];
    for (let col = 0; col < 5; col++) {
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
    previousNode: null,
  };
};



export default Board