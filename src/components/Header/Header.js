import { useState } from 'react';
import { Link } from 'react-scroll';
import './Header.css';
import Background from '../../images/Background/shape-bg.png';
import MenuIcon from '../../images/Icons/menu_icon.png';
import CloseIcon from '../../images/Icons/close_icon.png';

export default function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className='Header' id='Home'>
      <nav className={`Header__navigation-container ${isMenuOpen && 'Header__navigation-container-open'}`} onClick={() => isMenuOpen && setIsMenuOpen(false)}>

        <div className='Header__nav-burger_button__container'>
            <img className='Header__nav-burger_button' src={isMenuOpen ? CloseIcon : MenuIcon} alt='Menu' onClick={() => setIsMenuOpen(!isMenuOpen)}/>
        </div>
        
        {isMenuOpen &&
          <ul className='Header__nav-burger'>
            <li>
              <Link className='Header__navigation-item' to="Home" smooth={true} offset={-50} duration={500} onClick={() => setIsMenuOpen(false)}>Home</Link>
            </li>
            <li>
              <Link className='Header__navigation-item' to="About" smooth={true} offset={-50} duration={500} onClick={() => setIsMenuOpen(false)}>About</Link>
            </li>
            <li>
              <Link className='Header__navigation-item' to="Skills" smooth={true} offset={-50} duration={500} onClick={() => setIsMenuOpen(false)}>Skills</Link>
            </li>
            <li>
              <Link className='Header__navigation-item' to="Projects" smooth={true} offset={-50} duration={500} onClick={() => setIsMenuOpen(false)}>Projects</Link>
            </li>
            <li>
              <Link className='Header__navigation-item' to="Contact" smooth={true} offset={-50} duration={500} onClick={() => setIsMenuOpen(false)}>Contact</Link>
            </li>
          </ul>
        }

        <ul className='Header__navigation'>
          <li className='Header__navigation-item'>
            <Link to="Home" smooth={true} offset={-50} duration={500}>Home</Link>
          </li>
          <li className='Header__navigation-item'>
            <Link to="About" smooth={true} offset={-50} duration={500}>About</Link>
          </li>
          <li className='Header__navigation-item'>
            <Link to="Skills" smooth={true} offset={-50} duration={500}>Skills</Link>
          </li>
          <li className='Header__navigation-item'>
            <Link to="Projects" smooth={true} offset={-50} duration={500}>Projects</Link>
          </li>
          <li className='Header__navigation-item'>
            <Link to="Contact" smooth={true} offset={-50} duration={500}>Contact</Link>
          </li>
        </ul>
      </nav>
      <div className='Header__container'>
        <title className='Header__text-container'>
          <h2 className='Header__pre-title'>Hello, My name is</h2>
          <h1 className='Header__title'>Roei Lulavy</h1>
          <h2 className='Header__subtitle'>Full-Stack Web Developer</h2>
          <p className='Header__text'>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.</p>
        </title>
        <div className='Header__profile'/>
      </div>
      <img className='Header__background' src={Background} alt='' />
    </header>
  );
}
