import { useNavigate } from "react-router-dom"
import React from "react"
import { CS_PageLoader } from "../../Components";
import { FirebaseGetData , isUserLogin } from "../../config/Firebase/firebaseMethords";



function ProtectedRoute({FirstScreen}: any) {
    const [Screen, setScreen] = React.useState(<CS_PageLoader />)
    let Navigate = useNavigate()

    React.useEffect(() => {
        isUserLogin()
            .then((user: any) => { FirebaseGetData(`user/${user.uid}`).then((res: any) => res.Role === "admin" ? setScreen(FirstScreen) : Navigate("/quiz")) })
            .catch(() => { Navigate('/login') })
    })

    return (<>{Screen}</>)
}

export default ProtectedRoute;