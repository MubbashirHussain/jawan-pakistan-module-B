import {Link } from "react-router-dom"



function Home() {
    return (
        <>
            <h1>Home</h1>
            <div >

                <Link to="/"> Home </Link>
                <Link to="/about"> About </Link>
                <Link to="/services"> Services </Link>
                <Link to="/products"> Products </Link>
            </div>
        </>
    )
}
export default Home;