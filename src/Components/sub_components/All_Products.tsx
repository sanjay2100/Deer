import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { postProduct } from '../../Types/ProductTypes';
import AlertSnackBar from '../Alert';
import { GetUserProduct } from '../../Api/VendorApi';

const columns: GridColDef[] = [
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'price', headerName: 'Price', width: 130 },
    { field: 'quantity', headerName: 'Quantity', width: 130 },


];









const paginationModel = { page: 0, pageSize: 5 };

export default function DataTable() {
const [Data, setData] = React.useState<any | null>(null)
const [isLoading, setIsLoading] = React.useState<boolean>(false)
const [AlertMessage, setAlertMessage] = React.useState<string | null>(null)
const [AlertType, setAlertType] = React.useState<string>("success")
const [AlertOpen, setAlertOpen] = React.useState<boolean>(false)

const handleAlertOpen = (message: string, type: string) => {
    setAlertMessage(message)
    setAlertType(type)
    setAlertOpen(true)
}

const handleAlertClose = () => {
    setAlertOpen(false)
}
    React.useEffect(() => {
        GetUserProduct(setData, setIsLoading, handleAlertOpen)
    }, [])
    return (
        <Paper sx={{ height: 400, width: '100%' }}>
            <AlertSnackBar open={AlertOpen} message={AlertMessage} severity={AlertType} handleClose={handleAlertClose} />
            <DataGrid
                rows={Data ? Data : []}
                columns={columns}
                initialState={{ pagination: { paginationModel } }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
                getRowId={(row)=>row._id}
                sx={{ border: 0 }}
                loading={isLoading}
            />
        </Paper>
    );
}
