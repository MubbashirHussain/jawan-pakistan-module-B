import '../App.css'
type Props = {
    Searched: any,
    DataStructure: any
}
function Card(props: Props) {
    const { Searched, DataStructure } = props
    return (
        <>
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-4 col-10">
                    <div className="Custom-card hover-effect mt-4"><img src="http://dorsin.react.themesbrand.com/assets/images/testimonials/user-3.jpg" alt="client" className="img-fluid d-block img-thumbnail rounded-circle" />
                        <div className="border shadow rounded">
                            <ul className="p-5">
                                {DataStructure.map((x: any, i: number) => {
                                    return (
                                        <div key={i}>
                                            {x.key !== "IsActive" ? <li key={i} className="list-none fw-bold  "><span className="text-secondary">{x.Heading}</span>  {":"} {Searched[0][x.key]} </li> : <li key={i} className={`list-none fw-bold ${Searched[0][x.key] ? "li-active" : "li-unactive"}`}><span className="text-secondary">{x.Heading}</span>  {":"} {Searched[0][x.key] ? "Active" : "Un-Active"} </li>}
                                        </div>

                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Card;