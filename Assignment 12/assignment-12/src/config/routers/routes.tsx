import {BrowserRouter  as Router , Routes , Route,}from "react-router-dom" 
import Home from "../pages/home";
import NotFound from "../pages/NotFoundPage";
import FormPage from "../pages/Form";
 function AppRouter () {
     return (
         <>
                <Routes>
                    <Route path="/"  element={<Home/>}/>
                    <Route path="/form"  element={<FormPage/>}/>
                    <Route path="/form/:id"  element={<FormPage/>}/>
                    <Route path="*"  element={<NotFound/>}/>
                </Routes>
         </>
     )
 }
 export default AppRouter;