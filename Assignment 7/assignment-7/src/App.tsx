import React from 'react';
import './App.css';
import { Container } from '@mui/material';
import Cinput from './Components/input';
import SearchIcon from '@mui/icons-material/Search';
import CSelect from './Components/Select';
import Ctable from './Components/DataTable';
import Cswitch from './Components/SwitchBtn';
import CDatePicker from './Components/DatePicker';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { TableData, roles, TableHeadingData, TableStyleObj , SearchKey} from "./Data/TableData"
function App() {

  const [DataFortable, setDataForTable] = React.useState(TableData)
  const [DataStructure, setDataStructure] = React.useState(TableHeadingData)
  const [ThemeMode, setThememode] = React.useState(false)
  const [Inputaval, setInputVal] = React.useState("")
  let SelectOptions = roles.map((x: string, i: number) => ({ text: x, value: x }))
  const darkTheme = createTheme({ palette: { mode: ThemeMode ? "dark" : "light", }, });
  let SwitchMode = (mode: boolean) => setThememode(mode)







  let getSelectedValue = (value: any) => {
    if (value != null && value !== "none") {
      let FilteredData = TableData.filter((x: any) => x.role === value)
      setDataForTable([...FilteredData])
    }
  }


  let searchBtn = () => {
    if (Inputaval.length > 0) {
      let Arr = [...TableData.filter((x: any) => {
        if (x[SearchKey].toLowerCase() === Inputaval.toLowerCase()) {
          return x
        }
        return null
      })]
      setDataForTable([...(Arr.length > 0) ? Arr : TableData])
    }
  }



  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div style={{ backgroundColor: darkTheme.palette.mode === "dark" ? "#2a2e2e" : "#e6e6e7" }}>
        <Container maxWidth="lg" sx={{ p: "20px 0", minHeight: "100vh" }}>
          <div className="SwitchParent"> <Cswitch SwitchState={SwitchMode} /> </div>
          <Cinput label="Search by name" IconsBtn={SearchIcon} inputValue={setInputVal} onBtnClick={searchBtn} />
          <CSelect label="Category" Options={SelectOptions} SelectedValue={getSelectedValue} sx={{ m: " 10px 0 0 0" }} />
          <CDatePicker sx={{ width: "100%", m: "10px  0" }} label="Basic Data Picker" SelectedDate={(date: any) => { console.log(date) }} />
          <Ctable ColHeadings={DataStructure} TableRowsData={DataFortable} StyleObj={TableStyleObj} />
        </Container>

      </div >
    </ThemeProvider>

  );
}

export default App;
