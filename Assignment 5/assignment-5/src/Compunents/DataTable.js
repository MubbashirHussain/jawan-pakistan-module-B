import '../App.css'
function DataTable({ TableData }) {
    return (
        <>
            <table id="Data_table" className="cart_Table table table-striped table-bordered">
                <thead className="table-dark">
                    <tr>
                        <td>ID </td>
                        <td>User Name</td>
                        <td>Age</td>
                        <td>Institute</td>
                        <td>Category</td>
                        <td>Status</td>
                    </tr>
                </thead>
                <tbody>
                    {TableData.map((x, i) => {
                        return (
                            <tr key={i}>
                                <td>{x.id}</td>
                                <td>{x.UserName}</td>
                                <td>{x.age}</td>
                                <td>{x.institute} </td>
                                <td>{x.Category} </td>
                                <td><li className={x.IsActive ? "li-active" : "li-unactive"}>{x.IsActive ? "Active" : "Un-Active"}</li></td>
                            </tr>
                        );

                    })}
                </tbody>
            </table>        </>
    )
}
export default DataTable;