import React from "react";
import QuizAppAdmin from './Quizadd';
import QuizIcon from '@mui/icons-material/Quiz';
import Avatar from '@mui/material/Avatar';
import LogoutIcon from '@mui/icons-material/Logout';
import EditQuizForm from "./EditQuiz";
import { CS_Drawer } from "../../Components";
import { blue } from '@mui/material/colors';
import { useNavigate } from "react-router-dom";
import { FirebaseGetData, FirebaseLogout, FirebaseUpdateData  ,isUserLogin } from "../../config/Firebase/firebaseMethords";


let Defaultdata = [{ route: "newquiz", text: "Add New Quiz", Icon: <QuizIcon />, RouteComponent: <QuizAppAdmin /> }]

let Logout = () => {
    let Navigate = useNavigate()

    React.useEffect(() => {
        FirebaseLogout()
        Navigate("/quiz")
    }, [])
    return (<></>)
}

let UpdateData = (data: any) => {
    FirebaseUpdateData("qiuzList", data.id, data)
        .then((res) => console.log(res, "Updated Successfully"))
        .catch((er) => console.log(er, "Data not Update for Some Reson"))
}

const Admin = () => {
    let [data, setdata] = React.useState<any>(Defaultdata)
    let [User, setUser] = React.useState<any>()
    let gettingData = () => {
        FirebaseGetData('qiuzList/')
            .then((res: any) => {
                let ResData: any = Object.values(res);
                data = [...Defaultdata]
                for (let i = 0; i < ResData.length; i++) { data.push({ route: `${ResData[i].QuizInfo.QuizName.split(" ").join("")}`, text: `${ResData[i].QuizInfo.QuizName}`, Icon: <QuizIcon />, RouteComponent: <EditQuizForm QuizData={ResData[i]} DatasetFX={UpdateData} /> }) }
                setdata([...data])
                data.push({ route: "Logout", text: "Logout", Icon: <LogoutIcon />, RouteComponent: <Logout /> })
                setdata([...data])
            }).catch((er: any) => console.log(er))
        isUserLogin()
            .then((user: any) => FirebaseGetData(`user/${user.uid}`).then((res: any) => (setUser(res))))
            .catch(() => { })

    }
    React.useEffect(() => {
        gettingData()
    }, [])





    return (
        <>
            <CS_Drawer
                CompPathName="/admin"
                NavListArray={data}
                NavConfig={{}}
                Logo={
                    <div className="flex h-full justify-center items-center">
                        <Avatar className="text-center text-3xl" sx={{ bgcolor: blue[500], height: 42, width: 42, fontSize: "1.5rem" }} alt={`${User?.UserName}`} src="./" />
                    </div>
                }
            />
        </>
    )
}

export default Admin