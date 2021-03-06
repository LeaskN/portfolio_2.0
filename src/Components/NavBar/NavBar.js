import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar(){
    return(
        <div className='navBar'>
            <Link to='/'>Logo</Link>
            <Link to='/'>Landing</Link>
            <Link to='/about'>About</Link>
            <Link to='/'>Projects</Link>
            <Link to='/'>Contact</Link>
            <Link to='/'>Resume</Link>
            <Link to='/'>light and dark</Link>
        </div>
    )
}

export default NavBar;