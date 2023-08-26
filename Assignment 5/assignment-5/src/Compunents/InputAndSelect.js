import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
function Input({ InputValue, inpVal, TableData, setSelect, setSearched }) {


    let Category = TableData.map((x) => x.Category)
    Category = [...new Set(Category)]

    return (
        <>
            <input type="text" value={inpVal} onChange={(e) => { InputValue(e.target.value)}} className="border-0 p-1" style={{ width: '79%' }} placeholder="Search By Name" />
            <select style={{ width: '20%' }} onChange={(e) => { setSelect(e.target.value) }} className="btn-primary btn h-100 rounded">
                <option value={null} defaultValue={null}>Category</option>
                {Category.map((x, i) => {
                    return (<option className='p-2' value={x} key={i} >{x}</option>)
                })}
            </select>
        </>
    )
}
export default Input;