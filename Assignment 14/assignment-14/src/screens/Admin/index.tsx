import { CS_Drawer } from "../../Components";
import QuizAppAdmin from './Quizapp';
import QuizIcon from '@mui/icons-material/Quiz';
import { deepOrange } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
let data = [
    { route: "newquiz", text: "Add New Quiz", Icon: <QuizIcon />, RouteComponent: QuizAppAdmin },
]

const Admin = () => {
    return (
        <>
            <CS_Drawer NavListArray={data}
                Logo={<div className="flex h-full justify-center items-center">
                    <Avatar className="text-center text-3xl"  sx={{ bgcolor: deepOrange[500], height: 42, width: 42  ,fontSize : "1.5rem"}} alt="Admin" src="./" />
                </div>} />
        </>
    )
}

export default Admin