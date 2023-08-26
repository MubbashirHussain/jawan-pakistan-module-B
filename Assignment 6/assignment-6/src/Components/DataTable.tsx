import '../App.css'

type Props = {
    TableData: any[],
    DataStructure: any[]

}

function DataTable(props: Props) {
    const { TableData, DataStructure } = props
    return (
        <>
            <table id="Data_table" className="cart_Table table table-striped table-bordered">
                <thead className="table-dark">
                    <tr>
                        {DataStructure.map((x: any, i: number) => {
                            return (
                                <td key={i}>{x.Heading}</td>);
                        })}
                    </tr>
                </thead>
                <tbody>
                    {TableData.map((x: any, i: any) => {
                        return (
                            <tr key={i}>
                                {DataStructure.map((y: any, i: number) => {
                                    return (y.key !== "IsActive" ? <td key={i}>{x[y.key]}</td> : <td><li className={x[y.key] ? "li-active" : "li-unactive"}>{x[y.key] ? "Active" : "Un-Active"}</li></td>);
                                })}
                            </tr>
                        );

                    })}
                </tbody>
            </table>
        </>
    )
}
export default DataTable;