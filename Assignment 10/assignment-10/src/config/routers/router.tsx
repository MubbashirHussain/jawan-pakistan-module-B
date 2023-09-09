import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import About from "../pages/about";
import Home from "../pages/home";
import Products from "../pages/products";
import Services from "../pages/services";
import SingleCard from "../pages/singleCard";

function AppRouter() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/products/:id" element={<SingleCard />} />
                </Routes>
            </Router>
        </>
    )
}

export default AppRouter