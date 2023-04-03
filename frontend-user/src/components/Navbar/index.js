import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="nav-links-container">
      <Link to="/enroll">Enroll</Link>
      <Link to="/withdraw">Withdraw</Link>
      <Link to="/download">Download</Link>
      <Link to="/logout">Logout</Link>
    </div>
  );
};

export default Navbar;


            