import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectOp from './SelectOp';

type Props = {
    setInpVal: any | any,
    inpVal: string,
    TableData: any[],
    setSelect: any,

}


function Input(props: Props) {
    const { setInpVal, inpVal, TableData, setSelect } = props

    let Category: any = TableData.map((x: any) => x.Category)
    Category = [...new Set(Category)]

    return (
        <>
            <input type="text" value={inpVal} onChange={(e) => { setInpVal(e.target.value) }} className="border-0 p-1" style={{ width: '79%' }} placeholder="Search By Name" />
            <SelectOp Options={Category} SelectName='Category' SelectReturn={setSelect}></SelectOp>
        </>
    )
}
export default Input;