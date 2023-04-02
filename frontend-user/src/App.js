import { Routes, Route } from "react-router-dom"
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';

function App() {
  return (
    <Routes>

     
      <Route path="/login" element={<LoginPage/>}/>
      
      
      
      <Route path="*" element={<div>404</div>} />
      

    </Routes> 
  );
}

export default App;