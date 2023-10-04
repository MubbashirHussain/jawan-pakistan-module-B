import { Button } from '@mui/material'
import { FirebaseSetData } from '../../../config/Firebase/firebaseMethords'


let ClickHandler = ()=>{
    FirebaseSetData(`qiuzList/`,
    {
        QuizInfo: {
            QuizName: "Class Quiz",
            QuizDuration: 30,
            SecretKey: 152,
            QuizOpen: "true",
            QuizDescription:"Assignment Quiz" ,
          },
          QuizQuestion: [
            {
                Question: "Html Stands For _______________________",
                Options: ["Hyper Text Makeup Language",
                    "html",
                    "Case Cading Style Sheet",
                    "Hypertext markup language"
                ],
                CorrectAns: "Hypertext markup language",
            },
            {
                Question: "Css Stands For _______________________",
                Options: [
                    "Casecading Style Sheet",
                    "Java",
                    "Ram",
                    "Hypertext markup language"
                ],
                CorrectAns: "Casecading Style Sheet",
            },
            {
                Question: "Js Stands For _______________________",
                Options: [
                    "Java Style",
                    "Java Script", "Script",
                    "Script Src"
                ],
                CorrectAns: "Java Script",
            },
            {
                Question: "Dom Stands For _______________________",
                Options: [
                    "Document Object Model",
                    "html",
                    "Css",
                    "Java"
                ],
                CorrectAns: "Document Object Model",
            },
            {
                Question: "Ram Stands For _______________________",
                Options: [
                    "Read Only Memory",
                    "Dom",
                    "Random Acccess Memory",
                    "For Pc"
                ],
                CorrectAns: "Random Acccess Memory",
            },
            {
                Question: "Rom Stands For _______________________",
                Options: [
                    "Hyper Text Markup Language", "html",
                    "HTml",
                    "Read Only Memory"
                ],
                CorrectAns: "Read Only Memory",
            },
        ]
    }
    
    ).then(()=>alert("Quiz Successfully Added")).catch(()=>console.log("There is Some problem Please Check it out"))}



const AddData = () => {
  return (
<Button onClick={ClickHandler}>Add DATA</Button>
    )
}

export default AddData