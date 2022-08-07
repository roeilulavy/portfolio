import './Header.css';
import Background from '../../images/Background/shape-bg.png';

export default function Header() {
  return (
    <div className='Header'>
      <div className='Header__container'>
        <div className='Header__text-container'>
          <h2 className='Header__pre-title'>Hello, My name is</h2>
          <h1 className='Header__title'>Roei Lulavy</h1>
          <h2 className='Header__subtitle'>Full-Stack Web Developer</h2>
          <p className='Header__text'>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.</p>
        </div>
        <div className='Header__profile'/>
      </div>
      <img className='Header__background' src={Background} alt='' />
    </div>
  );
}
