import {Link } from "react-router-dom"



function Services() {
    return (
        <>
            <h1>Services</h1>
            <div >

                <Link to="/"> Home </Link>
                <Link to="/about"> About </Link>
                <Link to="/services"> Services </Link>
                <Link to="/products"> Products </Link>
            </div>
        </>
    )
}
export default Services;