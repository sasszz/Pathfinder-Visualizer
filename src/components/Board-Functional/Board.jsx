import React, {useEffect, useState} from 'react'
import Node from '../Node/Node';
import Header from '../Header/Header';

const Board = () => {
  const [grid, setGrid] = useState([]);
  const [startRow, setStartRow] = useState(10);
  const [startCol, setStartCol] = useState(10);
  // const startRowRef = useRef(startRow);

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
      isStart: row === startRow && col === startCol,
      previousNode: null,
    };
  };

  useEffect(() => {
    setGrid(getInitialGrid());
    }, []);

  return (
    <>
    <Header></Header>
    <div className="grid justify-items-center">
      {grid.map((row, rowIdx) => {
        // {console.log(row)}
        return (
          <div key={rowIdx} className="inline-flex">
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
      </>
  );
}


// const getInitialGrid = () => {
//   const grid1 = [];
//   for (let row = 0; row < 30; row++) {
//     const currentRow = [];
//     for (let col = 0; col < 50; col++) {
//       currentRow.push(createNode(col, row));
//     }
//     grid1.push(currentRow);
//   }
//   console.log(grid1)
//   return grid1;
// }

// const createNode = (col, row) => {
//   return {
//     col,
//     row,
//     isStart: row === this.startRow && col === this.startCol,
//     previousNode: null,
//   };
// };



export default Board