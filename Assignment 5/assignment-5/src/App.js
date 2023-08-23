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
    console.log("btn Clicked")
    console.log(inpVal)
  }


  return (
    <>
      <div className="container">
        <div className="row my-5 m-0 p-0">
          <div className="w-100 p-1 border my-2 rounded border-secondary">
            <Input InputValue={InputValue} TableData={TableData} inpVal={inpVal}></Input>
          </div>
          <SearchBTN SearchBtn={SearchBtn} ></SearchBTN>
        </div>
        <div className="row my-3">
          {!Searched ? <DataTable TableData={TableData}></DataTable> : null}
        </div>
        {Searched ? <Card></Card> : null}

      </div>

    </>
  );
}

export default App;
