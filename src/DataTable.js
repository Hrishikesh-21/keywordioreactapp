import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Grid, Switch } from '@mui/material';
import { DataTablepie, PieActiveArc } from './Piechart';
import { useState } from 'react';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    //     valueGetter: (params) =>
    //       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function DataTable() {

  const [buttonvalue, setbuttonvalue] = useState(false)

  const switchcomponent = (e) => {
    debugger
    console.log(e, "switch")
    if (e.target.checked === true) {
      setbuttonvalue(true)
    }
    else {
      setbuttonvalue(false)
    }


  }









  return (
    <>
      <Grid container style={{ margin: "5rem" }} justifyContent={'center'}>
        <Grid item xs={1}></Grid>
        <Grid item xs={4} spacing={2}>

          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
                checkboxSelectionVisibleOnly: false
              },
            }}
            pageSizeOptions={[5, 10]}

          />

        </Grid>

        <Grid item xs={1}></Grid>


        <Grid item xs={4} spacing={2} height={2}>

          {

            buttonvalue == true ? <PieActiveArc /> : <DataTablepie />


          }


        </Grid>


        <Grid item xs={1}></Grid>

      </Grid>
      <Grid
      container
      style={{
              display: "flex",
       justifyContent:"flex-end"
  
      }}>
        <Grid xs={10}></Grid>
        <Grid xs={2}>
        <Switch
        size={"15"}
          value={buttonvalue}
          onChange={(e) => {
            switchcomponent(e)
          }}>
        </Switch>
        </Grid>
      </Grid>
    </>
  );
}
