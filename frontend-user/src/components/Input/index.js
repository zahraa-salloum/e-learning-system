


const Input=({label_name,input_type,onChange},)=>{  
    return(
    <div className="input">
        <label>{label_name}</label>
        <input type={input_type} onChange={onChange} required/>
    </div>
    );
}
export default Input;