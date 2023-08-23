import '../App.css'
function Card({ children }) {
    return (
        <>
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-4 col-10">
                    <div className="Custom-card hover-effect mt-4"><img src="http://dorsin.react.themesbrand.com/assets/images/testimonials/user-3.jpg" alt="client" className="img-fluid d-block img-thumbnail rounded-circle" />
                        <div className="border shadow rounded">
                            <ul className="p-5">
                                <li className="list-none fw-bold  "><span className="text-secondary">ID</span>  :   9 </li>
                                <li className="list-none fw-bold  "><span className="text-secondary">Name</span>  :   "Junaed </li>
                                <li className="list-none fw-bold  "><span className="text-secondary">Age</span> :   17 </li>
                                <li className="list-none fw-bold  "><span className="text-secondary">Institute</span> :   "Jawan </li>
                                <li className="list-none fw-bold  "><span className="text-secondary">Category</span> :   "UI </li>
                                <li className="list-none fw-bold  "><span className="text-secondary">Status</span> :   true </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Card;