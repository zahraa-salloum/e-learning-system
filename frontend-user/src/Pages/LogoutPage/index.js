import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";



const LogoutPage = () => {

    const navigator = useNavigate();
    localStorage.clear()
    const byeNavigation = () => {
        navigator('/register');
    }
    

    return (
        <>
        <Button name_button={"BYE BYE !!"} onSubmit={byeNavigation} />
       </>
    );
}
export default LogoutPage;