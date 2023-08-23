import '../App.css'
function Card({ Searched }) {
    return (
        <>
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-4 col-10">
                    <div className="Custom-card hover-effect mt-4"><img src="http://dorsin.react.themesbrand.com/assets/images/testimonials/user-3.jpg" alt="client" className="img-fluid d-block img-thumbnail rounded-circle" />
                        <div className="border shadow rounded">
                            <ul className="p-5">
                                <li className="list-none fw-bold  "><span className="text-secondary">ID</span>          {Searched.id} </li>
                                <li className="list-none fw-bold  "><span className="text-secondary">Name</span>        {Searched.UserName} </li>
                                <li className="list-none fw-bold  "><span className="text-secondary">Age</span>         {Searched.age} </li>
                                <li className="list-none fw-bold  "><span className="text-secondary">Institute</span>   {Searched.institute} </li>
                                <li className="list-none fw-bold  "><span className="text-secondary">Category</span>    {Searched.Category} </li>
                                <li className={`list-none fw-bold  ${Searched.IsActive ? "li-active" : "li-unactive"} `}><span className="text-secondary">Status</span>      {Searched.IsActive ? "Active" : "Un-Active"} </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Card;