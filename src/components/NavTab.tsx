import { NavLink } from 'react-router-dom';
// import './styles/main.css';

const NavBar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/'>
            info
          </NavLink>
        </li>
        <li>
          <NavLink to='/posts'>
            posts
          </NavLink>
        </li>
        <li>
          <NavLink to='/albums'>
            albums
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
