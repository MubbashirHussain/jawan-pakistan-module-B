import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Services from "../pages/services";
import Admin from "../pages/Admin"
import Deshboard from "../pages/admin/component/deshboard";

function AppRouter() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/services" element={<Services />}></Route>
                <Route path="/admin/*" element={<Admin />}>
                </Route>
            </Routes>
        </Router>

    )
}
export default AppRouter;
