import { tab } from '@testing-library/user-event/dist/tab'
import '../App.css'
function Input ({InputValue , inpVal ,TableData}) {



    let Category = new Set([])
    console.log(TableData)
    console.log(Category)
    return (
        <>
         <input type="text" value={inpVal} onChange={(e)=>{InputValue(e.target.value)}} className="border-0 p-1" style={{ width: '79%' }} placeholder="Search By Name" />
            <select name id style={{ width: '20%' }} className="btn-primary h-100 rounded">
              <option value="Category" selected={true}>Category</option>
            </select>
        </>
    )
}
export default Input;