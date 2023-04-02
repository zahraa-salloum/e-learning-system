import Button from "../Button";
import Input from "../Input";
import {useState } from "react";
import axios from "axios";


const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const[error,setError]=useState("");
  
  const handleEmail=(e)=>{
        setEmail(e.target.value)
    }
   const handlePassword=(e)=>{
       setPassword(e.target.value)
    }
    // const validateEmail=(email) =>{
    //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //   return emailRegex.test(email);}
  
    // const validatePassword=(password)=> {
    //       const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    //       return passwordRegex.test(password);
    //     }
        
    
    const handleSubmit=()=>{
    //   if (validateEmail(email)){
    //       if(validatePassword(password)){
      
            let data = {
                "email": email,
                "password": password
              };

      axios.post("http://localhost:3000/auth/login",data).then((res) => {
          console.log(res.data)
          localStorage.setItem('token',res.data.token);
          localStorage.setItem('user_id',res.data.user.id);
        //   window.location.href="http://localhost:3000/code_editor"  
  }
      ).catch((err) => {
          console.log(err);
      })
//   }else(setError("Invalid credentials"))
//   }else(setError("Invalid credentials"))
    }
  
      return(
        <>
          <div className="form_container">
          <h1>Log In</h1>
          <Input label_name={"Email"} input_type={"email"} onChange={handleEmail} size="40" />
          <Input label_name={"password"} input_type={"password"} onChange={handlePassword}/>
          <Button name_button={"Login"} onSubmit={handleSubmit}/>
          <p className="error"><br/>{error}</p>
          </div>
          </> 
      );
    }
  
  export default LoginForm;
  