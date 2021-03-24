import './styles.css';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

function NavBar(){
  return(
    <nav className="main-navbar"> 
      <Logo />
      <Link to="/home" className="logo-text"> DS Delivery </Link>
    </nav>
  )
}

export default NavBar;