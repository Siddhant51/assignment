import React, { useState } from "react";
import "./Tree.css";

function TreeNode({ node }) {
  const { children, label } = node;

  const [showChildren, setShowChildren] = useState(false);
  const [isLabelClicked, setIsLabelClicked] = useState(false); // State to track clicked label

  const handleClick = () => {
    // Only set showChildren if there are actual children
    if (children) {
      setShowChildren(!showChildren);
    }
    setIsLabelClicked(!isLabelClicked); // Toggle label click state
  };

  return (
    <div className="node">
      <div
        className={`label ${isLabelClicked ? "selected" : ""}`} // Conditionally add class
        onClick={handleClick}
      >
        <span>{label}</span>
        {/* Conditionally render arrows based on state */}
        {children && <span className="arrow">{showChildren ? "▲" : "▼"}</span>}
      </div>
      {children && showChildren && (
        <div className="tree">
          <Tree treeData={children} />
        </div>
      )}
    </div>
  );
}

function Tree({ treeData }) {
  return (
    <div>
      {treeData.map((node) => (
        <TreeNode key={node.key} node={node} />
      ))}
    </div>
  );
}

export default Tree;
