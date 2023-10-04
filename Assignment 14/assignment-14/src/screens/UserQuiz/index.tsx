import React from "react"
import { CS_PageLoader} from "../../Components"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import { Divider } from "@mui/material"
import { useNavigate, useParams } from "react-router-dom"
import { FirebaseGetData } from "../../config/Firebase/firebaseMethords"
// import { useNavigate } from "react-router-dom"
const UserQiuz = () => {
  // const [modalOpen, setModalOpen] = React.useState(false)
  // const [progressValue, setprogressValue] = React.useState<number>(10)
  const [ShowingResult, setShowingResult] = React.useState(false)
  const [QuizData, setQuizData] = React.useState<any>()
  const [QuestionIndex, setQuestionIndex] = React.useState<number>(0)
  const [Marks, setMarks] = React.useState<number>(0)
  let Params = useParams()
  let Navigate = useNavigate()

  React.useEffect(() => {
    FirebaseGetData(`qiuzList/${Params.id}`)
      .then((res: any) => { setQuizData(res); console.log(QuizData); console.log("res", res.QuizQuestion) })
      .catch((er) => { console.log(er) })
  }, [])

  let CheckingAns = (value: string) => {
    QuizData.QuizQuestion[QuestionIndex].CorrectAns === value ? setMarks(p => p + 1) : null
    if(QuestionIndex + 1 < QuizData.QuizQuestion.length){
      setQuestionIndex(p => p + 1)
    }else{
      setShowingResult(true)
    }
    console.log(Marks)
  }
  console.log(QuizData?.QuizQuestion[0]?.Options)
  // let Comp: any =
  //   <div className=" bg-slate-50 shadow-md p-5 rounded flex flex-col justify-center items-center">
  //     <p className="capitalize py-5 text-center font-semibold break-words leading-8 tracking-wide">
  //       As soon as you Can Click on
  //       <span className="text-blue-600 inline-block font-bold p-1 border-blue-600 mx-1 text-lg">Start button</span>
  //       your time will Start.
  //       You have to compelete you Quiz within given time.
  //       which is
  //       <span className="text-blue-600 inline-block font-bold p-1 border-blue-600 mx-1 text-lg">30 minutes </span>
  //     </p>
  //     <div className="text-center"><Button variant="contained" onClick={() => { setModalOpen(false) }}> Start </Button></div>
  //   </div>

  return (
    !QuizData ? <CS_PageLoader /> :
      <>
        <div className="min-h-screen flex justify-center items-center z-50 w-screen">
          <Container maxWidth="md" sx={{ p: "0 !important" }} className="min-h-max rounded-md overflow-hidden bg-gray-100 ">
            {ShowingResult ? <>
              <span className="block h-1 w-full bg-blue-500"></span>
              <div className="flex flex-col gap-y-5 items-center p-5">
                <h1 className="text-3xl font-bold text-center my-5">Result</h1>
                <h1 className="text-lg font-semibold text-center">Thanks For Given a Quiz 😊</h1>
                <h1 className="text-lg font-semibold text-center">Your Marks is <span className="inline-block rotate-180 text-gray-400">^</span></h1>
                <h1 className="text-2xl font-semibold text-center bg-green-100 py-1 px-3 rounded-md">{Marks} <span className="text-green-600 text-sm"> Out of</span> {QuizData.QuizQuestion.length}</h1>
                <Button variant="contained" onClick={() => { Navigate('/quiz') }}> {`<`} Back To Quiz </Button>
              </div>
              <span className="block h-1 w-full bg-blue-500"></span>
            </> : <>
            <span className="block h-1 w-full bg-blue-500"></span>
              <div className="flex p-5 gap-3 flex-col">

                <div className="flex justify-between py-3">
                  <span>Question {(QuestionIndex) + 1} / {QuizData.QuizQuestion.length}</span>
                 
                </div>
                <div className="text-2xl font-semibold bg-blue-50 ">{QuizData?.QuizQuestion[QuestionIndex]?.Question} </div>
                <Divider />
                <div className="flex flex-col gap-y-5 my-3">
                  {QuizData?.QuizQuestion[QuestionIndex]?.Options.map((x: any, i: number) => <Button key={i} sx={{ py: 2 }} variant="outlined" onClick={() => CheckingAns(x)}>{x}</Button>)}
                </div>
              </div>
            <span className="block h-1 w-full bg-blue-500"></span>
              </>}
          </Container>
        </div>
        {/* {modalOpen && <CS_Modal ChildComponent={Comp} OpenState={{ State: modalOpen }} />} */}
      </>
  )
}

export default UserQiuz