import { useNavigate } from 'react-router-dom';
import './App.css'
import AppRouter from './config/routers/routes';
import Button from '@mui/material/Button';

function App() {
  let Navigate = useNavigate()
  return (
    <>
      <div className="flex justify-center">

        <div className="flex justify-between max-w-md text-center">
          <Button variant="contained" sx={{m:3}} onClick={() => Navigate("/")}>Home</Button>
          <Button variant="contained" sx={{m:3}} onClick={() => Navigate("/signup")}>SignUp</Button>
          <Button variant="contained" sx={{m:3}} onClick={() => Navigate("/login")}>Login</Button>
        </div>
      </div>

      <AppRouter />
    </>
  )
}
export default App;