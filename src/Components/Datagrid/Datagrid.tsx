import React, { useState } from "react";

import { CustomCellRendererProps } from "ag-grid-react";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

// interface PillProps {
//   text:string,
//   status?:string
// }

const CustomPill = (props: CustomCellRendererProps) => {
  let style: String = "";

  switch (props.value) {
    case "Complete":
      style = "green";
      break;
    case "Ongoing":
      style = "yellow";
      break;
    case "Overdue":
      style = "red";
      break;

    default:
      style = "gray";
      break;
  }

  return (
    <>
      <span className={`bg-${style}-100 text-${style}-800 text-xs font-medium me-2 px-3 py-1 rounded-full dark:bg-${style}-900 dark:text-${style}-300 hover:cursor-pointer`}>
        {props.value}
      </span>
    </>
  );
};

const Datagrid = () => {
  const [rowData, setRowData] = useState([
    { Task: "Design", Due: "24/9/2024", Status: "Complete", Done: true },
    { Task: "Design", Due: "24/9/2024", Status: "Ongoing", Done: true },
    { Task: "Design", Due: "24/9/2024", Status: "Overdue", Done: true },
    { Task: "Design", Due: "24/9/2024", Status: "Complete", Done: true },
  ]);

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = useState([
    { field: "Task", filter: "agSetColumnFilter", checkboxSelection: true },
    { field: "Due", filter: "agDateColumnFilter" },
    { field: "Status", cellRenderer: CustomPill },
    { field: "Done" },
  ]);

  return (
    <>
      <div className="w-full ag-theme-quartz h-96">
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          className="dark:bg-dark-200"
        />
      </div>
    </>
  );
};

export default Datagrid;
