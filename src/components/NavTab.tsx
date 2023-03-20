import { NavLink } from 'react-router-dom';
import '../styles/navtab.css';

const NavTab: React.FC = () => {
  return (
    <nav className='navtab'>
      <ul className='navtab__container'>
        <li>
          <NavLink
            to='/'
            className="navtab__link"
            style={
              ({isActive}) => (
              isActive 
              ? {
                  borderBottom: '2px solid white'
                }
              :{}
              )
            }>
            info
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/posts'
            className="navtab__link"
            style={
              ({isActive}) => (
              isActive 
              ? {
                  borderBottom: '2px solid white'
                }
              :{}
              )
            }>
            posts
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/albums'
            className="navtab__link"
            style={
              ({isActive}) => (
              isActive 
              ? {
                  borderBottom: '2px solid white'
                }
              :{}
              )
            }>
            albums
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavTab;
