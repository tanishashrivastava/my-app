import React, { useState,useCallback, useRef } from 'react';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const App = () => {
  
  const [rowData] = useState([
    {
        "name": "Tushar Saxena",
        "description": "i am the king of the seven worlds :",
        "userid": "tushar123",
        "email": "tushar057@gmail.com",
        "password": "tushar057",
        "databaseName": "Tushar Saxena",
        "databaseDescription": "database size of 100",
        "lastlogin": "Mar 01 2022 11:51:39",
        "type": "tenant",
        "id": "7"
    },
    {
        "name": "Jeff Mathew",
        "description": "i am a coding god",
        "userid": "jeff1234",
        "email": "jeff123@gmail.com",
        "password": "jeff123",
        "databaseName": "Jeff Mathew",
        "databaseDescription": "database size of 100",
        "lastlogin": "Mar 01 2022 11:51:39",
        "type": "tenant",
        "id": "8"
    },
    {
        "name": "Rohit singh",
        "description": "i am pro gamer",
        "userid": "rohit123",
        "email": "rohit@gmail.com",
        "password": "rohit",
        "databaseName": "Rohit singh",
        "databaseDescription": "database size of 100",
        "type": "tenant",
        "lastlogin": "Mar 01 2022 11:51:39",
        "id": "11"
    },
    {
        "name": "Naveen",
        "description": "i am a fan of Spiderman",
        "userid": "naveen768",
        "email": "naveen768@gmail.com",
        "password": "naveen768",
        "databaseDescription": "database size of 100",
        "databaseName": "Naveen",
        "lastlogin": "Mar 01 2022 11:51:39",
        "type": "tenant",
        "id": "12"
    },
    {
        "name": "harsh",
        "description": "i live in indore",
        "userid": "harsh768",
        "email": "harsh768@gmail.com",
        "password": "harsh768",
        "databaseName": "harsh",
        "databaseDescription": "database size of 100",
        "lastlogin": "Mar 01 2022 11:51:39",
        "type": "tenant",
        "id": "13"
    },
    {
        "name": "test1",
        "description": "i live in indore",
        "userid": "test1",
        "email": "test1@gmail.com",
        "password": "test1",
        "databaseDescription": "database size of 100",
        "databaseName": "test1",
        "lastlogin": "Mar 01 2022 11:51:39",
        "type": "tenant",
        "id": "14"
    },
    {
        "name": "test11",
        "description": "i live in indore",
        "userid": "test11",
        "email": "test11@gmail.com",
        "password": "test1",
        "databaseDescription": "database size of 100",
        "databaseName": "test11",
        "lastlogin": "Mar 01 2022 11:51:39",
        "type": "tenant",
        "id": "15"
    },
    {
        "name": "test12",
        "description": "i live in indore",
        "userid": "test12",
        "email": "test12@gmail.com",
        "password": "test12",
        "databaseDescription": "database size of 100",
        "databaseName": "test12",
        "lastlogin": "Mar 01 2022 11:51:39",
        "type": "tenant",
        "id": "16"
    },
    {
        "name": "test14",
        "description": "i live in indore",
        "userid": "test14",
        "email": "test14@gmail.com",
        "password": "test14",
        "databaseDescription": "database size of 100",
        "databaseName": "twst14",
        "lastlogin": "Mar 01 2022 11:51:39",
        "type": "tenant",
        "id": "18"
    },
    {
        "name": "test14",
        "description": "i live in indore",
        "userid": "test14",
        "email": "test14@gmail.com",
        "password": "test14",
        "databaseDescription": "database size of 100",
        "databaseName": "twst14",
        "lastlogin": "Mar 01 2022 11:51:39",
        "type": "tenant",
        "id": "18"
    },
    {
        "name": "test15",
        "description": "i live in indore",
        "userid": "test15",
        "email": "test15@gmail.com",
        "password": "test15",
        "databaseDescription": "database size of 100",
        "databaseName": "test15",
        "lastlogin": "Mar 01 2022 11:51:39",
        "type": "tenant",
        "id": "19"
    }
  ]);

  const [columnDefs] = useState([
    { headerName: "Tenant ID", field: "userid", width: 100 },
    { headerName: "Description", field: "description", width: 400 },
    { headerName: "Last Login", field: "lastlogin", width: 200 },
  ]);

  const gridRef = useRef();    
   
   const onCellClicked = (params) => {
    if (params.colDef.field === "userid") {
      console.log(params.data);
    }
   }

   const onFilterTextBoxChanged = useCallback(() => {
    gridRef.current.api.setQuickFilter(
      document.getElementById('filter-text-box').value
    );
  }, []);
   
   const onBtPrevious = useCallback(() => {
     gridRef.current.api.paginationGoToPreviousPage();
    }, []);
    
    const onBtNext = useCallback((params) => {
      console.log(params);
      gridRef.current.api.paginationGoToNextPage();
    }, []);
    
    return (
      <div className="ag-theme-alpine" style={{height: 500, width: 702}}>
        <input
          type="text"
          id="filter-text-box"
          placeholder="Filter..."
          onInput={onFilterTextBoxChanged}
        />
        <button onClick={onBtPrevious}>To Previous</button>
        <button onClick={onBtNext}>To Next</button>
        <AgGridReact
          ref={gridRef}
          rowData={rowData}
          columnDefs={columnDefs}
          onCellClicked={onCellClicked}
          pagination={true}
          paginationPageSize={10}
          suppressPaginationPanel={true}
          defaultColDef={{
            getQuickFilterText: function(params) {
              if (params.colDef.field === "userid") {
                return params.value;
              }
              return "";
            }
          }}
        >  
        </AgGridReact>
      </div>
  );
};

export default App;







// import React from 'react';
// import { AgGridReact } from 'ag-grid-react';
// import '.App.css';
// import { Table } from './Table';

// import 'ag-grid-community/dist/styles/ag-grid.css';
// import 'ag-grid-community/dist/styles/ag-theme-alpine.css';


// const App = () => {
//   const [rowData, setRowData] = useState([]);
//   const gridRef = useRef(null);

   

//   const [columnDefs] = useState([
//     { field: "make", sortable: true, filter: true, checkboxSelection: true },
//     { field: "model", sortable: true, filter: true },
//     { field: "price", sortable: true, filter: true },
//   ]);


//   useEffect(() => {
//     fetch('https://www.ag-grid.com/example-assets/small-row-data.json')
//         .then(result => result.json())
//         .then(rowData => setRowData(rowData))
// }, []);


//   const onButtonClick = e => {
//     const selectedNodes = gridRef.current.api.getSelectedNodes()
//     const selectedData = selectedNodes.map(node => node.data)
//     const selectedDataStringPresentation = selectedData.map(node => `${node.make} ${node.model}`).join(', ')
//     alert(`Selected nodes: ${selectedDataStringPresentation}`)
//   }
// function App() {
//   return (
//     <div className="App">
//       <h1>React-Application</h1>
//       <Table/>
//     </div>
//     );
    // <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
    //   <button onClick={onButtonClick}>Get selected rows</button>
    //   <AgGridReact
    //     ref={gridRef}
    //     rowData={rowData}
    //     columnDefs={columnDefs}
    //     rowSelection="multiple">
    //   </AgGridReact>
    // </div>
  
// }

// export default App;