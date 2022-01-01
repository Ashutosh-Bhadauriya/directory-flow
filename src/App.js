import React, { useState, useCallback } from "react";
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  removeElements,
  isNode,
} from "react-flow-renderer";
import initialElements from "./initialElement.js";
import initialElements2 from "./initialElement2.js";
import dagre from "dagre";
// import "./layouting.css";

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const nodeWidth = 172;
const nodeHeight = 36;

const getLayoutedElements = (elements, direction = "TB") => {
  const isHorizontal = direction === "LR";
  dagreGraph.setGraph({ rankdir: direction });

  elements.forEach((el) => {
    if (isNode(el)) {
      dagreGraph.setNode(el.id, { width: nodeWidth, height: nodeHeight });
    } else {
      dagreGraph.setEdge(el.source, el.target);
    }
  });

  dagre.layout(dagreGraph);

  return elements.map((el) => {
    if (isNode(el)) {
      const nodeWithPosition = dagreGraph.node(el.id);
      el.targetPosition = isHorizontal ? "left" : "top";
      el.sourcePosition = isHorizontal ? "right" : "bottom";

      el.position = {
        x: nodeWithPosition.x - nodeWidth / 2 + Math.random() / 1000,
        y: nodeWithPosition.y - nodeHeight / 2,
      };
    }

    return el;
  });
};

const layoutedElements = getLayoutedElements(initialElements);

const App = () => {
  const [elements, setElements] = useState(layoutedElements);
  const onConnect = (params) =>
    setElements((els) =>
      addEdge({ ...params, type: "smoothstep", animated: true }, els)
    );
  const onElementsRemove = (elementsToRemove) =>
    setElements((els) => removeElements(elementsToRemove, els));

  const onLayout = useCallback(
    (direction) => {
      const layoutedElements = getLayoutedElements(elements, direction);
      setElements(layoutedElements);
    },
    [elements]
  );

  return (
    <>
      <div className="layoutflow" style={{ height: "100vh", width: "100vw" }}>
        <ReactFlowProvider>
          <ReactFlow
            elements={elements}
            onConnect={onConnect}
            onElementsRemove={onElementsRemove}
            connectionLineType="smoothstep"
          />
          <div className="controls">
            <button onClick={() => onLayout("LR")}>horizontal layout</button>
          </div>
        </ReactFlowProvider>
      </div>
    </>
  );
};

export default App;

// import React from "react";
// import ReactFlow from "react-flow-renderer";

// const elements = [
//   {
//     id: "1",
//     data: { label: "Input Node" },
//     // targetPosition: 'right',
//     // sourcePosition: 'left',
//     position: { x: 250, y: 25 },
//   },

//   {
//     id: "2",
//     data: { label: <div>Default Node</div> },
//     position: { x: 100, y: 125 },
//   },
//   {
//     id: "3",
//     data: { label: "Output Node" },
//     position: { x: 250, y: 250 },
//   },
//   {
//     id: "4",
//     data: { label: "Output Node" },
//     position: { x: 10, y: 250 },
//   },
//   {
//     id: "5",
//     data: { label: "Output Node" },
//     position: { x: 500, y: 250 },
//   },
//   {
//     id: "6",
//     data: { label: "Input Node" },
//     targetPosition: 'right',
//     sourcePosition: 'left',
//     position: { x: 250, y: 25 },
//   },

//   { id: "e1-2", source: "1", target: "2", animated: true },
//   { id: "e2-3", source: "2", target: "3" },
// ];

// export default () => (
//   <div style={{ height: "100vh", width: "100vw" }}>
//     <ReactFlow elements={elements} />
//   </div>
// );
