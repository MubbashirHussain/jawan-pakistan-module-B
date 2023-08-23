import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Input from './Compunents/InputAndSelect';
import SearchBTN from './Compunents/SearchBTN';
import DataTable from './Compunents/DataTable';
import Card from './Compunents/Card';
import { useState } from 'react';
import { Student_Data } from './Data/Student-data.js'


function App() {

  const [inpVal, setInpVal] = useState("")
  const [TableData, setTableData] = useState(Student_Data)
  const [Searched, setSearched] = useState(null)
  const [Select, setSelect] = useState(null)

  let InputValue = (value) => {
    setInpVal(value)
  }

  let SearchBtn = () => {
    Filtering(Select)
    setSearched(...Student_Data.filter((x) => {
      if (x.UserName.toLowerCase() === inpVal.toLowerCase()) {
        return x
      }
      return null
    }))
  }

  let Filtering = (Category) => {
    if (Category != null && Category !== "Category") {
      let NewTablData = TableData.filter((x, i) => x.Category === Category)
      setTableData([...NewTablData])
    } else {
      setTableData(Student_Data)
    }

  }

  return (
    <>
      <div className="container">
        <div className="row my-5 m-0 p-0">
          <div className="w-100 p-1 border my-2 rounded border-secondary">
            <Input InputValue={InputValue} TableData={Student_Data} setSelect={setSelect} inpVal={inpVal} setSearched={setSearched}></Input>
          </div>
          <SearchBTN SearchBtn={SearchBtn}></SearchBTN>
        </div>
        <div className="row my-3">
          <DataTable TableData={TableData}></DataTable>
        </div>
        {Searched ? <Card Searched={Searched} ></Card> : null}

      </div>

    </>
  );
}

export default App;
