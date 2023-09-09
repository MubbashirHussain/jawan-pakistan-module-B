import '../../App.css'
import { Link } from "react-router-dom";

type Props = {
    p?: any
}
function About(props: Props) {
    const { p } = props
    return (
        <>
            <h1>About Page</h1>
            <div>
                <Link to="/">Home</Link>
                <br />
                <Link to="/about">About</Link>
                <br />
                <Link to="/services">services</Link>
                <br />
                <Link to="/admin/dashboard">admin</Link>
            </div>
        </>
    )
}
export default About;