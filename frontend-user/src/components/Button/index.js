


const Button = ({name_button,onSubmit}) => {
    return (
        <button className='button' onClick={onSubmit}>
            {name_button}
        </button>
    );
}
export default Button;