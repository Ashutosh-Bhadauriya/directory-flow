const position = { x: 0, y: 0 };
const edgeType = "smoothstep";

export default [
  {
    id: "1",
    // type: "input",
    data: { label: "Label Generator" },
    sourcePosition: 'left' ,
    targetPosition: 'right',
    position,
  },

  {
    id: "2",
    data: { label: "LabelGen" },
    position,
  },
  {
    id: "3",
    data: { label: "MainLabel.java" },
    position,
  },
  {
    id: "4",
    sourcePosition: "right",
    targetPosition: "left",
    data: { label: "MainLabelByContainer" },
    position,
  },
  {
    id: "5",
    data: { label: "GetLabelByContainer.java" },
    position,
  },
  {
    id: "6",
    data: { label: "getLabelByContainer" },
    position,
  },
  {
    id: "7",
    data: { label: "removeThreadLocalContext" },
    position,
  },
  {
    id: "8",
    data: { label: "setLabelByContainer" },
    position,
  },
  {
    id: "9",
    data: { label: "M4" },
    position,
  },
  {
    id: "10",
    data: { label: "M5" },
    position,
  },
  {
    id: "11",
    data: { label: "GetTLGSAcessor" },
    position,
  },
  {
    id: "12",
    data: { label: "GetTlgsLabel" },
    position,
  },
  {
    id: "13",
    data: { label: "getLabelByIdOldFromTLGS" },
    position,
  },
  {
    id: "14",
    data: { label: "setTLGSAcessor" },
    position,
  },
  {
    id: "15",
    data: { label: "SetTlgsLabel" },
    position,
  },
  // {
  //   id: "16",
  //   data: { label: "TictactoeEvaluator.java" },
  //   position,
  // },
  // {
  //   id: "17",
  //   data: { label: "📁 java" },
  //   position,
  // },
  // {
  //   id: "18",
  //   data: { label: "📁 ttsu" },
  //   position,
  // },
  // {
  //   id: "19",
  //   data: { label: "📁 game" },
  //   position,
  // },
  // {
  //   id: "20",
  //   data: { label: "📁 ai" },
  //   position,
  // },
  // {
  //   id: "21",
  //   data: { label: "📁 tictactoe" },
  //   position,
  // },
  // {
  //   id: "22",
  //   data: { label: "📁 heuristic" },
  //   position,
  // },
  // {
  //   id: "23",
  //   data: { label: "📁 tictactoe" },
  //   position,
  // },
  // {
  //   id: "24",
  //   data: { label: "TictactoeEvaluatorTest.java" },
  //   position,
  // },
  // {
  //   id: "25",
  //   data: { label: "📁 tictactoe" },
  //   position,
  // },
  // {
  //   id: "26",
  //   data: { label: "TicTacToeMinimaxAgent.java" },
  //   position,
  // },
  // {
  //   id: "27",
  //   data: { label: "GameBoardTest.java" },
  //   position,
  // },
  // {
  //   id: "28",
  //   data: { label: "TicTacToeBoardPrinterTest.java" },
  //   position,
  // },
  // {
  //   id: "29",
  //   data: { label: "TicTacToeGameRunner.java" },
  //   position,
  // },
  // {
  //   id: "30",
  //   data: { label: "TicTacToeGameState.java" },
  //   position,
  // },
  // {
  //   id: "31",
  //   data: { label: "GameBoard.java" },
  //   position,
  // },
  // {
  //   id: "32",
  //   data: { label: "TicTacToeBoardPrinter.java" },
  //   position,
  // },
  // {
  //   id: "33",
  //   data: { label: "TicTacToeGameRunner.java" },
  //   position,
  // },
  // {
  //   id: "34",
  //   data: { label: "TicTacToeGameState.java" },
  //   position,
  // },
  // {
  //   id: "35",
  //   data: { label: "TicTacToeMain.java" },
  //   position,
  // },

  {
    id: "e1-1",
    source: "1",
    target: "2",
    style: { strokeWidth: 2 },
    // animated: true,
    arrowHeadType: "arrowclosed",
  },
  {
    id: "e1-2",
    source: "3",
    target: "4",
    animated: true,
  },
  {
    id: "e1-3",
    source: "5",
    target: "6",
    // style: { stroke: "red" },
    animated: true,
  },
  {
    id: "e1-4",
    source: "6",
    target: "7",
    // style: { stroke: "red" },
    animated: true,
  },
  {
    id: "e1-5",
    source: "7",
    target: "8",
    style: { strokeWidth: 2 },
    arrowHeadType: "arrowclosed",
  },
  {
    id: "e1-6",
    source: "6",
    target: "7",
    animated: true,
  },
  // {
  //   id: "e1-7",
  //   sourceX: "4",
  //   targetX: "6",
  //   style: { strokeWidth: 2 },
  //   arrowHeadType: "arrowclosed",
  // },
  // {
  //   id: "e1-8",
  //   sourceX: "6",
  //   targetX: "4",
  //   style: { strokeWidth: 2 },
  //   arrowHeadType: "arrowclosed",
  // },
  {
    id: "e1-9",
    source: "8",
    target: "9",
    style: { strokeWidth: 2 },
    arrowHeadType: "arrowclosed",
  },
  {
    id: "e1-10",
    source: "9",
    target: "10",
    style: { strokeWidth: 2 },
    arrowHeadType: "arrowclosed",
  },
  {
    id: "e1-11",
    source: "11",
    target: "12",
    animated: true,
  },
  {
    id: "e1-12",
    source: "12",
    target: "13",
    animated: true,
  },
  {
    id: "e1-13",
    source: "14",
    target: "15",
    animated: true,
  },
  // {
  //   id: "e1-14",
  //   source: "2",
  //   target: "6",
  //   style: { strokeWidth: 2 },
  //   arrowHeadType: "arrowclosed",
  // },
  // {
  //   id: "e1-15",
  //   source: "4",
  //   target: "6",
  //   style: { strokeWidth: 2 },
  //   arrowHeadType: "arrowclosed",
  // },
  // {
  //   id: "e1-16",
  //   source: "3",
  //   target: "17",
  //   style: { stroke: "red" },
  //   animated: true,
  // },
  // {
  //   id: "e1-17",
  //   source: "17",
  //   target: "18",
  //   style: { stroke: "red" },
  //   animated: true,
  // },
  // {
  //   id: "e1-18",
  //   source: "18",
  //   target: "19",
  //   style: { stroke: "red" },
  //   animated: true,
  // },
  // {
  //   id: "e1-19",
  //   source: "19",
  //   target: "20",
  //   style: { stroke: "red" },
  //   animated: true,
  // },
  // {
  //   id: "e1-20",
  //   source: "19",
  //   target: "21",
  //   style: { stroke: "red" },
  //   animated: true,
  // },
  // {
  //   id: "e1-21",
  //   source: "20",
  //   target: "22",
  //   style: { stroke: "red" },
  //   animated: true,
  // },
  // {
  //   id: "e1-22",
  //   source: "22",
  //   target: "23",
  //   style: { stroke: "red" },
  //   animated: true,
  // },
  // {
  //   id: "e1-23",
  //   source: "23",
  //   target: "24",
  //   style: { stroke: "red" },
  //   animated: true,
  // },
  // {
  //   id: "e1-24",
  //   source: "20",
  //   target: "25",
  //   style: { stroke: "red" },
  //   animated: true,
  // },
  // {
  //   id: "e1-25",
  //   source: "25",
  //   target: "26",
  //   style: { stroke: "red" },
  //   animated: true,
  // },
  // {
  //   id: "e1-26",
  //   source: "21",
  //   target: "27",
  //   style: { stroke: "red" },
  //   animated: true,
  // },
  // {
  //   id: "e1-27",
  //   source: "21",
  //   target: "28",
  //   style: { stroke: "red" },
  //   animated: true,
  // },
  // {
  //   id: "e1-28",
  //   source: "21",
  //   target: "29",
  //   style: { stroke: "red" },
  //   animated: true,
  // },
  // {
  //   id: "e1-29",
  //   source: "21",
  //   target: "30",
  //   style: { stroke: "red" },
  //   animated: true,
  // },
  // {
  //   id: "e1-30",
  //   source: "8",
  //   target: "31",
  //   style: { stroke: "red" },
  //   animated: true,
  // },
  // {
  //   id: "e1-31",
  //   source: "8",
  //   target: "32",
  //   style: { stroke: "red" },
  //   animated: true,
  // },
  // {
  //   id: "e1-32",
  //   source: "8",
  //   target: "33",
  //   style: { stroke: "red" },
  //   animated: true,
  // },
  // {
  //   id: "e1-33",
  //   source: "8",
  //   target: "34",
  //   style: { stroke: "red" },
  //   animated: true,
  // },
  // {
  //   id: "e1-34",
  //   source: "8",
  //   target: "35",
  //   style: { stroke: "red" },
  //   animated: true,
  // },
];

const elementTwo = [
  {
    id: "1",
    // type: "input",
    data: { label: ".gitignore" },
    position: { x: 0, y: 0 },
  },
];