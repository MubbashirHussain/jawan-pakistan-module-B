import '../App.css'
function SearchBTN(props:any) {
    const {SearchBtn} = props
    return (
        <>
            <button className="btn btn-primary" onClick={()=>{SearchBtn()}}>Search</button>
        </>
    )
}
export default SearchBTN;