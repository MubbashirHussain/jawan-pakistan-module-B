import {BrowserRouter  as Router , Routes , Route }from "react-router-dom" 
import { Home, Login, NotFound, SignUp } from "../../screens";

 function AppRouter () {
     return (
         <>
                <Routes>
                    <Route path="/"  element={<Home/>}/>
                    <Route path="/signup"  element={<SignUp/>}/>
                    <Route path="/login"  element={<Login/>}/>
                    <Route path="*"  element={<NotFound/>}/>
                </Routes>
         </>
     )
 }
 export default AppRouter;