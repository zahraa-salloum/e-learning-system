import { Routes, Route } from "react-router-dom"
import WelcomePage from "./Pages/WelcomePage";
import LoginPage from './Pages/LoginPage';
import RegisterPage from "./Pages/RegisterPage";
import EnrollPage from "./Pages/EnrollPage";
import WithdrawPage from "./Pages/WithdrawPage";

function App() {
  return (
    <Routes>

      <Route path="/" element={<RegisterPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/welcome" element={<WelcomePage />} />
      <Route path="/enroll" element={<EnrollPage />} />
      <Route path="/withdraw" element={<WithdrawPage />} />
      
      <Route path="*" element={<div>404</div>} />
      

    </Routes> 
  );
}

export default App;