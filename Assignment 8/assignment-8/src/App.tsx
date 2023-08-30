import { Box, Container, Paper, Button } from '@mui/material';
import RestartAltRoundedIcon from '@mui/icons-material/RestartAltRounded';
import './App.css'
import Quiz from "./Data/Quiz";
import React from "react"
function App() {
  const [QueIndex, setQueIndex] = React.useState(0)
  const [Result, setresult] = React.useState(false)
  const [Marks, setMarks] = React.useState(0)


  let NextQue = (value: string) => {
    setMarks((value == Quiz[QueIndex].correctAnswer) ? Marks + 1 : Marks)
    if (QueIndex == 5) setresult(true)
    else setQueIndex(QueIndex + 1)
  }

  let ResetQuiz = () => {
    setQueIndex(0)
    setresult(false)
    setMarks(0)
  }


  return (
    <Container maxWidth="sm" className="Flex-center" sx={{ height: "100%" }}  >
      <Paper className="Flex-center" elevation={16} sx={{ bgcolor: '#fff', p: [5, 3], flexDirection: "column" }}>
        {!Result ? <>
          <Box sx={{ width: "100%", fontWeight: "bold", p: "5px 0", m: "5px  0" }} > Question Count {Quiz.length + " / " + Number(QueIndex + 1)}</Box>
          <Box className="QuesBox">{Quiz[QueIndex].question}</Box>
          <Box sx={{ width: "100%" }} className="Options-Container">
            {Quiz[QueIndex].options.map((x: any, i: number) => <Button variant="outlined" key={i} fullWidth value={x} onClick={() => { NextQue(x) }}>{x}</Button>)}
          </Box>
        </> : <>
          <Box className="QuesBox Flex-center">Your Marks : &nbsp; <span > {Quiz.length + " / " + Marks}</span></Box>
          <Button endIcon={<RestartAltRoundedIcon />} onClick={() => { ResetQuiz() }} variant="outlined" color="secondary" sx={{ m: 2 }}>Reset</Button>
        </>}

      </Paper>
    </Container >
  )
}
export default App;