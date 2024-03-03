import React, { useState } from "react";
import "./Main.css";
import { items, positions } from "../assets/data";

const Main = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(5); // Set the desired page size

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(positions.length / pageSize)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const getVisibleItems = () => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, items.length);
    return items.slice(startIndex, endIndex);
  };

  const getVisiblePositions = () => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, positions.length);
    return positions.slice(startIndex, endIndex);
  };

  return (
    <div className="main">
      <div className="top">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            // justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>Event Name</h1>
          {/* <p>(Venue Details)</p> */}
        </div>
        <div>
          <div className="horizontal-menu">
            <div className="items">Event Details</div>
            <div className="items">Assign/Coordinator</div>
            <div className="items">Session Management</div>
            <div className="items">Generate SOW</div>
          </div>
        </div>
      </div>
      <div className="center">
        <div className="left">
          <h2>Assign Coordinator</h2>
          <select>
            <option>Search Coordinator</option>
          </select>
          <p>Add New Coordinator</p>
        </div>
        <div className="right">
          <h2>Event Name</h2>
          <div className="dates">
            <div className="date">Start:</div>
            <div className="date">End:</div>
          </div>
          <div className="down">Venue Address:</div>
        </div>
      </div>
      <div className="bottom">
        <h2>Assign Coordinator</h2>
        <div className="middle">
          <div className="left">
            <div className="vertical-menu">
              {items.map((item) => (
                <div key={item.title} className="items">
                  <div className="title">{item.title}</div>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="right">
            <h2>Positions</h2>
            <div className="table-container-page2">
              <table>
                <thead>
                  <tr>
                    <th>Position</th>
                    <th>Time</th>
                    <th>Info</th>
                    <th>Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {getVisiblePositions().map((position, index) => (
                    <tr key={index}>
                      <td>{position.position}</td>
                      <td>{position.time}</td>
                      <td>{position.info}</td>
                      <td>{position.quantity}</td>
                      <td>
                        <select>
                          <option>Select Contractor</option>
                          <option>Contractor 1</option>
                          <option>Contractor 2</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="pagination">
              <button disabled={currentPage === 1} onClick={handlePreviousPage}>
                ❮
              </button>
              <span>
                Page {currentPage} of {Math.ceil(positions.length / pageSize)}
              </span>
              <button
                disabled={
                  currentPage === Math.ceil(positions.length / pageSize)
                }
                onClick={handleNextPage}
              >
                ❯
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="save">
        <button>Save Edits</button>
      </div>
    </div>
  );
};

export default Main;
