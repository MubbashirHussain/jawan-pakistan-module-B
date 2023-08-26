import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Input from './Components/InputAndSelect';
import SearchBTN from './Components/SearchBTN';
import DataTable from './Components/DataTable';
import Card from './Components/Card';
import SelectOp from './Components/SelectOp';

import { useState } from 'react';
import { Student_Data, DataStructure as S_DataStructure } from './Data/Student-data.js'
import { data, DataStructure as D_DataStructure } from "./Data/Data"

function App() {
  const [DataSelect, setDataSelect]: any = useState({
    inData: Student_Data,
    DataStructure: S_DataStructure,
    U_name: "UserName"
  })
  const [inpVal, setInpVal] = useState("")
  const [TableData, setTableData] = useState(DataSelect.inData)
  const [Searched, setSearched]: any = useState(null)
  const [Select, setSelect] = useState(null)

  let SearchBtn = () => {
    Filtering(Select)
    if (inpVal.length > 0) {
      let Arr = [...DataSelect.inData.filter((x: any) => {
        if (x[DataSelect.U_name].toLowerCase() === inpVal.toLowerCase()) {
          return x
        }
        return null
      })]
      setSearched((Arr.length > 0) ? Arr  : null)
    }
  }

  let Filtering = (Category: any) => {
    if (Category != null && Category !== "Category") {
      let NewTablData = DataSelect.inData.filter((x: any, i: number) => x.Category === Category)
      setTableData([...NewTablData])
    } else {
      setTableData(DataSelect.inData)
    }

  }

  let DataSelectde = (SelectedValue: string) => {
    if (SelectedValue === "data") {
      setDataSelect({
        inData: data,
        DataStructure: D_DataStructure,
        U_name: "username"
      })
      setTableData([...data])
    } else {

      setDataSelect({
        inData: Student_Data,
        DataStructure: S_DataStructure,
        U_name: "UserName"
      })
      setTableData([...Student_Data])
    }

  }

  return (
    <>
      <div className="container">
        <div className="row my-5 m-0 p-0">
          <div className="w-100 p-1 border my-2 rounded border-secondary">
            <Input setInpVal={setInpVal} TableData={DataSelect.inData} setSelect={setSelect} inpVal={inpVal} ></Input>
          </div>
          <SearchBTN SearchBtn={SearchBtn}></SearchBTN>
          <div className="p-1"></div>
          <>
            <SelectOp SelectName='Select Data' Options={["Student_Data", "data"]} SelectReturn={DataSelectde}></SelectOp>
          </>
        </div>
        <div className="row my-3">
          <DataTable TableData={TableData} DataStructure={DataSelect.DataStructure} ></DataTable>
        </div>
        {Searched ? <Card Searched={Searched} DataStructure={DataSelect.DataStructure}></Card> : null}

      </div>

    </>
  );
}

export default App;
