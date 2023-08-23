import '../App.css'
function SearchBTN({SearchBtn}) {
    return (
        <>
            <button className="btn btn-primary" onClick={()=>{SearchBtn()}}>Search</button>
        </>
    )
}
export default SearchBTN;