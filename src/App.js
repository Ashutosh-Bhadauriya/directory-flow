import React from "react";
import ReactFlow from "react-flow-renderer";
// import "./App.css";

const elementOne = [
  {
    id: "1",
    // type: "input",
    data: { label: "📁 src" },
    position: { x: 100, y: 80 },
  },

  {
    id: "2",
    data: { label: "📁 main" },
    position: { x: 280, y: 180 },
  },
  {
    id: "3",
    data: { label: "📁 test" },
    position: { x: 80, y: 210 },
  },
  {
    id: "4",
    data: { label: "📁 java" },
    position: { x: 350, y: 250 },
  },
  {
    id: "5",
    data: { label: "📁 ttsu" },
    position: { x: 440, y: 320 },
  },
  {
    id: "6",
    data: { label: "📁 game" },
    position: { x: 530, y: 390 },
  },
  {
    id: "7",
    data: { label: "📁 ai" },
    position: { x: 530, y: 390 },
  },
  {
    id: "8",
    data: { label: "📁 tictactoe" },
    position: { x: 530, y: 390 },
  },
  {
    id: "9",
    data: { label: "DiscreteGameState.java" },
    position: { x: 530, y: 390 },
  },
  {
    id: "10",
    data: { label: "Position.java" },
    position: { x: 530, y: 390 },
  },
  {
    id: "11",
    data: { label: "📁 heuristic" },
    position: { x: 530, y: 390 },
  },
  {
    id: "12",
    data: { label: "GameIntellegenceAgent.java" },
    position: { x: 530, y: 390 },
  },
  {
    id: "13",
    data: { label: "MinimaxAgent.java" },
    position: { x: 530, y: 390 },
  },
  {
    id: "14",
    data: { label: "📁 tictactoe" },
    position: { x: 530, y: 390 },
  },
  {
    id: "15",
    data: { label: "StateEvaluator.java" },
    position: { x: 530, y: 390 },
  },
  {
    id: "16",
    data: { label: "TictactoeEvaluator.java" },
    position: { x: 530, y: 390 },
  },
  {
    id: "17",
    data: { label: "📁 java" },
    position: { x: 530, y: 390 },
  },
  {
    id: "18",
    data: { label: "📁 ttsu" },
    position: { x: 530, y: 390 },
  },
  {
    id: "19",
    data: { label: "📁 game" },
    position: { x: 530, y: 390 },
  },
  {
    id: "20",
    data: { label: "📁 ai" },
    position: { x: 530, y: 390 },
  },
  {
    id: "21",
    data: { label: "📁 tictactoe" },
    position: { x: 530, y: 390 },
  },
  {
    id: "22",
    data: { label: "📁 heuristic" },
    position: { x: 530, y: 390 },
  },
  {
    id: "23",
    data: { label: "📁 tictactoe" },
    position: { x: 530, y: 390 },
  },
  {
    id: "24",
    data: { label: "TictactoeEvaluatorTest.java" },
    position: { x: 530, y: 390 },
  },
  {
    id: "25",
    data: { label: "📁 tictactoe" },
    position: { x: 530, y: 390 },
  },
  {
    id: "26",
    data: { label: "TicTacToeMinimaxAgent.java" },
    position: { x: 530, y: 390 },
  },
  {
    id: "27",
    data: { label: "GameBoardTest.java" },
    position: { x: 530, y: 390 },
  },
  {
    id: "28",
    data: { label: "TicTacToeBoardPrinterTest.java" },
    position: { x: 530, y: 390 },
  },
  {
    id: "29",
    data: { label: "TicTacToeGameRunner.java" },
    position: { x: 530, y: 390 },
  },
  {
    id: "30",
    data: { label: "TicTacToeGameState.java" },
    position: { x: 530, y: 390 },
  },
  {
    id: "31",
    data: { label: "GameBoard.java" },
    position: { x: 530, y: 390 },
  },
  {
    id: "32",
    data: { label: "TicTacToeBoardPrinter.java" },
    position: { x: 530, y: 390 },
  },
  {
    id: "33",
    data: { label: "TicTacToeGameRunner.java" },
    position: { x: 530, y: 390 },
  },
  {
    id: "34",
    data: { label: "TicTacToeGameState.java" },
    position: { x: 530, y: 390 },
  },
  {
    id: "35",
    data: { label: "TicTacToeMain.java" },
    position: { x: 530, y: 390 },
  },

  {
    id: "e1-1",
    source: "1",
    target: "2",
    style: { stroke: "red" },
    animated: true,
  },
  {
    id: "e1-2",
    source: "1",
    target: "3",
    style: { stroke: "red" },
    animated: true,
  },
  {
    id: "e1-3",
    source: "2",
    target: "4",
    style: { stroke: "red" },
    animated: true,
  },
  {
    id: "e1-4",
    source: "4",
    target: "5",
    style: { stroke: "red" },
    animated: true,
  },
  {
    id: "e1-5",
    source: "5",
    target: "6",
    style: { stroke: "red" },
    animated: true,
  },
  {
    id: "e1-6",
    source: "6",
    target: "7",
    style: { stroke: "red" },
    animated: true,
  },
  {
    id: "e1-7",
    source: "6",
    target: "8",
    style: { stroke: "red" },
    animated: true,
  },
  {
    id: "e1-8",
    source: "6",
    target: "9",
    style: { stroke: "red" },
    animated: true,
  },
  {
    id: "e1-9",
    source: "6",
    target: "10",
    style: { stroke: "red" },
    animated: true,
  },
  {
    id: "e1-10",
    source: "7",
    target: "11",
    style: { stroke: "red" },
    animated: true,
  },
  {
    id: "e1-11",
    source: "7",
    target: "12",
    style: { stroke: "red" },
    animated: true,
  },
  {
    id: "e1-12",
    source: "7",
    target: "13",
    style: { stroke: "red" },
    animated: true,
  },
  {
    id: "e1-13",
    source: "11",
    target: "14",
    style: { stroke: "red" },
    animated: true,
  },
  {
    id: "e1-14",
    source: "11",
    target: "15",
    style: { stroke: "red" },
    animated: true,
  },
  {
    id: "e1-15",
    source: "14",
    target: "16",
    style: { stroke: "red" },
    animated: true,
  },
  {
    id: "e1-16",
    source: "3",
    target: "17",
    style: { stroke: "red" },
    animated: true,
  },
  {
    id: "e1-17",
    source: "17",
    target: "18",
    style: { stroke: "red" },
    animated: true,
  },
  {
    id: "e1-18",
    source: "18",
    target: "19",
    style: { stroke: "red" },
    animated: true,
  },
  {
    id: "e1-19",
    source: "19",
    target: "20",
    style: { stroke: "red" },
    animated: true,
  },
  {
    id: "e1-20",
    source: "19",
    target: "21",
    style: { stroke: "red" },
    animated: true,
  },
  {
    id: "e1-21",
    source: "20",
    target: "22",
    style: { stroke: "red" },
    animated: true,
  },
  {
    id: "e1-22",
    source: "22",
    target: "23",
    style: { stroke: "red" },
    animated: true,
  },
  {
    id: "e1-23",
    source: "23",
    target: "24",
    style: { stroke: "red" },
    animated: true,
  },
  {
    id: "e1-24",
    source: "20",
    target: "25",
    style: { stroke: "red" },
    animated: true,
  },
  {
    id: "e1-25",
    source: "25",
    target: "26",
    style: { stroke: "red" },
    animated: true,
  },
  {
    id: "e1-26",
    source: "21",
    target: "27",
    style: { stroke: "red" },
    animated: true,
  },
  {
    id: "e1-27",
    source: "21",
    target: "28",
    style: { stroke: "red" },
    animated: true,
  },
  {
    id: "e1-28",
    source: "21",
    target: "29",
    style: { stroke: "red" },
    animated: true,
  },
  {
    id: "e1-29",
    source: "21",
    target: "30",
    style: { stroke: "red" },
    animated: true,
  },
  {
    id: "e1-30",
    source: "8",
    target: "31",
    style: { stroke: "red" },
    animated: true,
  },
  {
    id: "e1-31",
    source: "8",
    target: "32",
    style: { stroke: "red" },
    animated: true,
  },
  {
    id: "e1-32",
    source: "8",
    target: "33",
    style: { stroke: "red" },
    animated: true,
  },
  {
    id: "e1-33",
    source: "8",
    target: "34",
    style: { stroke: "red" },
    animated: true,
  },
  {
    id: "e1-34",
    source: "8",
    target: "35",
    style: { stroke: "red" },
    animated: true,
  },
];

const elementTwo = [
  {
    id: "1",
    // type: "input",
    data: { label: ".gitignore" },
    position: { x: 0, y: 0 },
  },
];

const App = () => {
  return (
    <>
      <div style={{ height: "100vh", width: "150vw" }}>
        <ReactFlow elements={elementOne} />
      </div>
    </>
  );
};

export default App;
