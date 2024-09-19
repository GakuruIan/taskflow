import React,{useState} from 'react'

import { AgGridReact } from 'ag-grid-react'; 
import "ag-grid-community/styles/ag-grid.css"; 
import "ag-grid-community/styles/ag-theme-quartz.css";

const Datagrid = () => {
    const [rowData, setRowData] = useState([
        {Task:"Design",Due:"24/9/2024",Status:"Done",Done:true},
        
      ]);
      
      // Column Definitions: Defines the columns to be displayed.
      const [colDefs, setColDefs] = useState([
        { field: "Task" },
        { field: "Due" },
        { field: "Status" },
        {field:"Done"}
      ]);

  return (
    <>
      <div className="w-full ag-theme-quartz h-96">
        <AgGridReact rowData={rowData} columnDefs={colDefs} className='dark:bg-dark-200'/>
      </div>
    </>
  )
}

export default Datagrid