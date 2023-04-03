import Button from "../Button";



const Enroll = ({option,enroll, onChange}) => {
    return (
        <div className="container_clear">
            <select className="input_clear" name="classes" id="classes" onChange={onChange}>
            {option}
            </select>
            <Button name_button={"Enroll"} onSubmit={enroll} />
        </div>
    );
}
export default Enroll;