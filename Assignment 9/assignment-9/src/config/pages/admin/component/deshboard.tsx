//  import '../App.css'
import Cinput from "../../../components/input"
import CDatePicker from "../../../components/DatePicker"
import CGraph from "../../../components/Graph"
import SearchIcon from '@mui/icons-material/Search';
import {
    years,
    lineChartsParams,
    UKGDPperCapita,
    GermanyGDPperCapita,
    FranceGDPperCapita
} from "../../../Data/GraphData"

//  type Props = {
//   p? : any
//  }
function Deshboard() {
    //  const { p } = props
    let inputvalue = (value: string) => console.log(value)
    let onSearch = (value: string) => console.log(value)
    return (
        <>

            <div>
                <Cinput label="Search" IconsBtn={SearchIcon} inputValue={inputvalue} onBtnClick={onSearch} />
            </div>
            <div className="my-3 d-flex justify-content-between">
                <div>
                    <h2>Dashboard</h2>
                    <p className="text-muted">Hi, Samantha. Welcome back  to Sedap Admin!</p>
                </div>
                <div>
                    <CDatePicker label="Filer Periode" />
                </div>
            </div>
            <div className="w-100 d-flex justify-content-center">
                <CGraph
                    years={years}
                    lineChartsParams={lineChartsParams}
                    UKGDPperCapita={UKGDPperCapita}
                    GermanyGDPperCapita={GermanyGDPperCapita}
                    FranceGDPperCapita={FranceGDPperCapita} />
            </div>
        </>
    )
}
export default Deshboard;