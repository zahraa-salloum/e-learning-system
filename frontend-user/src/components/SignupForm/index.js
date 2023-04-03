import Input from "../Input";
import Button from "../Button";
import {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignupForm= ()=>{
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState("");
    
    const navigator = useNavigate();
    const signinNavigation = () => {
        navigator('/login');
    }
    const validateEmail=(email) =>{
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);}
    
    const validatePassword=(password)=> {
            const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
            return passwordRegex.test(password);
          }
          
    
    const handleName=(e)=>{
       setName(e.target.value)
    }
    const handleEmail=(e)=>{
        setEmail(e.target.value)
    }
    const handlePassword=(e)=>{
        setPassword(e.target.value)
    }

    const handleSubmit=()=>{
    if (name==="" || email==="" || password===""){
        setError("All input are required")
    }else{
        if (validateEmail(email)){
            if(validatePassword(password)){
                
                let data = {
                    "name": name,
                    "email": email,
                    "password": password
                  };

    axios.post("http://localhost:3000/auth/register",data).then((res) => {

        console.log(res)
        setError("Success..Please log in")
        
        

    }).catch((err) => {
        console.log(err);
    })
    }else(setError("Password must contain 8 chracters, one capital letter, one special character"))
    }else(setError("Invalid email format"))
        }}
    return(
       <div className="container">
             <h1 className="size_heading"> Sign Up</h1>
             <Input label_name={"Name"} input_type={"text"} onChange={handleName}/>
             <Input label_name={"Email"} input_type={"email"} onChange={handleEmail}/>
             <Input label_name={"Password"} input_type={"password"} onChange={handlePassword}/>
             <Button name_button={"Sign Up"} onSubmit={handleSubmit}/>
             <div className="error">{error}</div>
             <p className="user" onClick={signinNavigation}>Already Have An Account?</p>
     </div>
    
    )
    }
    export default SignupForm;