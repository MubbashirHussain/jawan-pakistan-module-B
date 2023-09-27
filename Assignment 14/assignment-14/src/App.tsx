import { useNavigate } from 'react-router-dom';
import './App.css'
import AppRouter from './config/routers/routes';

function App() {
  let Navigate = useNavigate()
  return (
    <>
      <AppRouter />
    </>
  )
}
export default App;