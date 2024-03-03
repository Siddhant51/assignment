import React, { useState, useEffect } from "react";
import "./Table.css";
import { dummyData } from "../assets/data";
import { FaSearch, FaSort, FaSortDown, FaSortUp } from "react-icons/fa";

function Table() {
  const [data, setData] = useState(dummyData);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(15);
  const [displayedData, setDisplayedData] = useState([]);
  const [sortColumn, setSortColumn] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    updateTableData();
  }, [currentPage, pageSize, sortColumn, sortOrder]);

  const updateTableData = () => {
    let sortedData = [...data];
    if (sortColumn) {
      sortedData = sortedData.sort((a, b) => {
        const valueA = a[sortColumn];
        const valueB = b[sortColumn];

        if (sortOrder === "asc") {
          return valueA.localeCompare(valueB);
        } else {
          return valueB.localeCompare(valueA);
        }
      });
    }

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, sortedData.length);
    const newDisplayedData = sortedData.slice(startIndex, endIndex);
    setDisplayedData(newDisplayedData);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(data.length / pageSize)) {
      setCurrentPage(currentPage + 1);
    }
  };

  //   const handlePageSizeChange = (event) => {
  //     setPageSize(parseInt(event.target.value));
  //     setCurrentPage(1);
  //   };

  const handleSort = (column) => {
    if (column === sortColumn) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortOrder("asc");
    }
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <div className="table-container">
      <div className="table-header">
        <h1>Event Table</h1>
        <label>
          <FaSearch style={{ fontSize: "larger" }} />
          <input type="text" placeholder="Search here..." />
        </label>
      </div>
      <div className="table">
        <table border="1">
          <thead>
            <tr>
              <th
                style={{ width: "1200px" }}
                onClick={() => handleSort("EventName")}
              >
                Event Name{" "}
                {sortColumn === "EventName" ? (
                  sortOrder === "asc" ? (
                    <FaSortUp />
                  ) : (
                    <FaSortDown />
                  )
                ) : (
                  <FaSort />
                )}
              </th>
              <th>Event Start</th>
              <th onClick={() => handleSort("EventEnd")}>
                Event End{" "}
                {sortColumn === "EventEnd" ? (
                  sortOrder === "asc" ? (
                    <FaSortUp />
                  ) : (
                    <FaSortDown />
                  )
                ) : (
                  <FaSort />
                )}
              </th>
              <th onClick={() => handleSort("ClientName")}>
                Client Name{" "}
                {sortColumn === "ClientName" ? (
                  sortOrder === "asc" ? (
                    <FaSortUp />
                  ) : (
                    <FaSortDown />
                  )
                ) : (
                  <FaSort />
                )}
              </th>
              <th>Contact Info</th>
              <th>Venue</th>
              <th>City</th>
              <th>State</th>
              <th>Zip Code</th>
            </tr>
          </thead>
          <tbody>
            {displayedData.map((item, index) => (
              <tr key={index}>
                <td>{item.EventName}</td>
                <td>{formatDate(item.EventStart)}</td>
                <td>{formatDate(item.EventEnd)}</td>
                <td>{item.ClientName}</td>
                <td>{item.ContactInfo}</td>
                <td>{item.Venue}</td>
                <td>{item.City}</td>
                <td>{item.State}</td>
                <td>{item.ZipCode}</td>
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
          Page {currentPage} of {Math.ceil(data.length / pageSize)}
        </span>
        <button
          disabled={currentPage === Math.ceil(data.length / pageSize)}
          onClick={handleNextPage}
        >
          ❯
        </button>
      </div>
    </div>
  );
}

export default Table;
