import Enroll from "../../components/Enroll"
import React,{useState, useEffect} from 'react';
import axios from 'axios';



const EnrollPage = () => {
    const [classes, setClasses] = useState([]);
    const [classChosen,setClassChosen]=useState("");
    
    const token = localStorage.getItem('token');
    const user_id = localStorage.getItem('user_id');
    
    const handleClass=(e)=>{
        setClassChosen(e.target.value)
     }

    useEffect(() => {
        const getClasses = () => {
            axios.get('http://localhost:3000/action/classes', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
                }).then(response => {
                    setClasses(response.data)
                    console.log(response.data)
                })
        }
        getClasses()
    },[]) 

    const optionElements = classes.map((c) => (
        <option key={c._id} value={c._id}>
          {c.name}
        </option>
      ));

      const enroll=()=>{
        let data = {
                "studentId": user_id
                };
        axios.post("http://localhost:3000/action/"+ classChosen +"/enroll",data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
            }).then((res) => {
        console.log(res)
                
        }).catch((err) => {
                console.log(err);
            })
            }

    return (
        <div className="container">
            <Enroll option={optionElements} enroll={enroll} onChange={handleClass} />
       </div>
    );
}
export default EnrollPage;