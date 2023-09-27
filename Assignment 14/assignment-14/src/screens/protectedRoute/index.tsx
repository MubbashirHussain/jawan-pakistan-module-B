import { useNavigate } from "react-router-dom"
import React from "react"
import { FirebaseGetData } from "../../config/Firebase/firebaseMethords";
import { getAuth, onAuthStateChanged } from "firebase/auth";



function ProtectedRoute(props: any) {
    const { FirstScreen, SecondScreen } = props
    const [Screen, setScreen] = React.useState(<h1>Loading...</h1>)
    // const [isadmin, setadmin] = React.useState(false)

    let Navigate = useNavigate()
    const auth = getAuth();
    // let location = useLocation();
    // console.log(location.state)

    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log(user)
            console.log(user.uid)
            FirebaseGetData(`user/${user.uid}`)
                .then((res: any) => {console.log(res) ;
                 setScreen(res.Role === "admin" ? FirstScreen : SecondScreen)})
        } else {
            Navigate("/login")
        }
    });

    return (<>{Screen}</>)
}
export default ProtectedRoute;