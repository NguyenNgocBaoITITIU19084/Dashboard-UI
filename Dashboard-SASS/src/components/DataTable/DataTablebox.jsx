import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { FaRegEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import './DataTablebox.scss';

const DataTablebox = ({ columns, rows }) => {
  const actionColumn = {
    field: 'action',
    headerName: 'Action',
    width: 100,
    renderCell: (params) => {
      return (
        <div className='action'>
          <FaRegEdit
            style={{ color: 'green' }}
            onClick={() => handleEdit(params.row.id)}
          />
          <MdDelete
            style={{ color: 'tomato' }}
            onClick={() => handleDelete(params.row.id)}
          />
        </div>
      );
    },
  };

  const handleDelete = (id) => {
    console.log(`deleted item with id: ${id}`);
  };

  const handleEdit = (id) => {
    console.log(`edit item with id: ${id}`);
  };

  return (
    <div className='table'>
      <Box sx={{ height: '100%', width: '100%' }}>
        <DataGrid
          className='data-grid'
          slotProps={{
            toolbar: {
              quickFilterProps: true,
            },
          }}
          slots={{ toolbar: GridToolbar }}
          rows={rows}
          columns={[...columns, actionColumn]}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
    </div>
  );
};

export default DataTablebox;
