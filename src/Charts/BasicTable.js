import React, { useState, useEffect } from "react";
import { DataGrid } from '@mui/x-data-grid';

const BasicTable = () => {

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'date', headerName: 'Date', width: 130 },
    { field: 'recipient', headerName: 'Recipient', width: 130 },
    { field: 'note', headerName: 'Note', width: 130 },
    { field: 'amount', headerName: 'Amount', width: 130 },
    { field: 'amountInCzk', headerName: 'Amount CZK', width: 130 },
    { field: 'currency', headerName: 'Currency', width: 130 },
    { field: 'mainCategory', headerName: 'Main category', width: 130 },
    { field: 'category', headerName: 'Category', width: 130 },
    { field: 'account', headerName: 'Account', width: 130 },
    { field: 'label', headerName: 'Label', width: 130 },
  ];

  const [data, setData] = useState([])

  var baseUrl = "http://localhost:8088/transactions"

  useEffect(() => {
    const fetchData = async () => {
      await fetch(`${baseUrl}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': "*"
        }
      })
        .then((response) => {
          if (response.ok) {
            response.json().then((json) => {
              console.log(json);
              setData(json)
            });
          }
        }).catch((error) => {
          console.log(error);
        });
    };
    fetchData()
  }, [baseUrl])

  return (
    <div style={{ height: 631, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={10}
        checkboxSelection
      />
    </div>
  );
}

export default BasicTable