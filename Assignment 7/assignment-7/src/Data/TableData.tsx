import {
    randomCreatedDate,
    randomTraderName,
    randomId,
    randomArrayItem,
    random,
} from "@mui/x-data-grid-generator";
import { GridRowsProp } from '@mui/x-data-grid'

const roles = [
    "Marketing",
    "Graphics Desginer",
    "Back end Developer",
    "UI UX Desginer",
    "Front end Developer"
];
const randomRole = () => randomArrayItem(roles)

let SearchKey = "name"
const TableData: GridRowsProp = [
    {
        id: 1,
        name: randomTraderName(),
        age: Math.round(random(18, 40)),
        joinDate: randomCreatedDate(),
        role: randomRole(),
    },
    {
        id: 2,
        name: randomTraderName(),
        age: Math.round(random(18, 40)),
        joinDate: randomCreatedDate(),
        role: randomRole(),
    },
    {
        id: 3,
        name: randomTraderName(),
        age: Math.round(random(18, 40)),
        joinDate: randomCreatedDate(),
        role: randomRole(),
    },
    {
        id: 4,
        name: randomTraderName(),
        age: Math.round(random(18, 40)),
        joinDate: randomCreatedDate(),
        role: randomRole(),
    },
    {
        id: 5,
        name: randomTraderName(),
        age: Math.round(random(18, 40)),
        joinDate: randomCreatedDate(),
        role: randomRole(),
    },
    {
        id: 6,
        name: randomTraderName(),
        age: Math.round(random(18, 40)),
        joinDate: randomCreatedDate(),
        role: randomRole(),
    },
    {
        id: 7,
        name: randomTraderName(),
        age: Math.round(random(18, 40)),
        joinDate: randomCreatedDate(),
        role: randomRole(),
    },
    {
        id: 8,
        name: randomTraderName(),
        age: Math.round(random(18, 40)),
        joinDate: randomCreatedDate(),
        role: randomRole(),
    },
    {
        id: 9,
        name: randomTraderName(),
        age: Math.round(random(18, 40)),
        joinDate: randomCreatedDate(),
        role: randomRole(),
    },
    {
        id: 10,
        name: randomTraderName(),
        age: Math.round(random(18, 40)),
        joinDate: randomCreatedDate(),
        role: randomRole(),
    },
];


const TableHeadingData: any[] = [
    {
        field: 'id',
        headerName: "ID's",
        disableColumnMenu: true,
        maxWith: 20,
        align: "center",
        headerAlign: "center",
        editable: false,
    },
    {
        field: 'name',
        headerName: 'Name',
        disableColumnMenu: true,
        align: "center",
        flex: 5,
        headerAlign: "center",
        editable: true
    },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        disableColumnMenu: true,
        align: "center",
        flex: 5,
        headerAlign: "center",
        editable: true,
    },
    {
        field: 'joinDate',
        headerName: 'Join date',
        type: 'date',
        disableColumnMenu: true,
        align: "center",
        flex: 5,
        headerAlign: "center",
        editable: true,
    },
    {
        field: 'role',
        headerName: 'Department',
        disableColumnMenu: true,
        align: "center",
        flex: 5,
        headerAlign: "center",
        editable: true,
        type: 'singleSelect',
        valueOptions: roles,
    },
    {
        field: 'actions',
        type: 'actions',
        headerName: 'Actions',
        disableColumnMenu: true,
        align: "center",
        flex: 5,
        headerAlign: "center",
        cellClassName: 'actions',
    },
]





const TableStyleObj = {
    border: "1px solid #88888890",
    "& ::-webkit-scrollbar": { width: 0 },
    "& .MuiDataGrid-sortIcon": { color: "#fff", },
    "& .MuiDataGrid-columnHeader": {
        background: "#221f1f",
        color: "#fff",
        ":focus-within , :focus":
            { outline: "none" },
    },
}

export { TableData, roles, TableHeadingData, TableStyleObj , SearchKey } 