import Button from "../Button";



const Withdraw = ({option,withdraw, onChange}) => {
    return (
        <div className="container_clear">
            <select className="input_clear" name="classes" id="classes" onChange={onChange}>
            <option value="">Choose Class</option>
            {option}
            </select>
            <Button name_button={"Withdraw"} onSubmit={withdraw} />
        </div>
    );
}
export default Withdraw;