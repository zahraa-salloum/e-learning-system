import { Link, useNavigate } from 'react-router-dom';
import Button from '../Button';

const Navbar = () => {
  const navigator = useNavigate();
  const logOut = () => {
    localStorage.clear()
    navigator('/register');
}

  return (
    <div className="nav-links-container">
      <Link to="/enroll">Enroll</Link>
      <Link to="/withdraw">Withdraw</Link>
      <Link to="/download">Download</Link>
      <Button name_button={'Log Out'} onSubmit={logOut} />
    </div>
  );
};

export default Navbar;


            