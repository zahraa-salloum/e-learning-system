import { Routes, Route } from "react-router-dom"
import WelcomePage from "./Pages/WelcomePage";
import LoginPage from './Pages/LoginPage';
import RegisterPage from "./Pages/RegisterPage"; 

function App() {
  return (
    <Routes>

      <Route path="/" element={<RegisterPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/welcome" element={<WelcomePage />} />
      
      
      <Route path="*" element={<div>404</div>} />
      

    </Routes> 
  );
}

export default App;