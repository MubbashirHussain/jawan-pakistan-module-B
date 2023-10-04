import { Routes, Route } from "react-router-dom"
import { Home, Login, NotFound, SignUp, ProtectedRoute, Admin, Main } from "../../screens";
import UserQiuz from "../../screens/UserQuiz";

function AppRouter() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/admin/*" element={<ProtectedRoute FirstScreen={<Admin />} />} />
                <Route path="/quiz" element={<Main />} />
                <Route path="/quiz/:id" element={<UserQiuz />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    )
}
export default AppRouter;