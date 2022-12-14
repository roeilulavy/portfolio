import './MySkills.css';
import HTML from '../../images/Icons/html_icon.png';
import CSS from '../../images/Icons/css_icon.png';
import JS from '../../images/Icons/java_icon.png';
import REACT from '../../images/Icons/react_icon.png';
import REDUX from '../../images/Icons/redux_icon.png';
import NODE from '../../images/Icons/nodejs_icon.png';
import API from '../../images/Icons/api_icon.png';
import WS from '../../images/Icons/websocket_icon.png';
import MONGO from '../../images/Icons/mongo_icon.png';
import SQL from '../../images/Icons/sql_icon.png';
import GIT from '../../images/Icons/git_icon.png';
import ANDROID from '../../images/Icons/android_icon.png';

export default function MySkills() {
  return (
    <article className='MySkills' id='Skills'>
      <h2 className='MySkills__title'>My Skills</h2>
      <p className='MySkills__text'>Through my studies, I've gained a solid understanding of web development concepts, and have dedicated a lot of my free time to apply these concepts to real-world scenarios and applications.</p>

      <ul className='MySkills__container'>
        <li className='MySkills__item'>
          <img className='MySkills__item-image' src={HTML} alt='HTML'/>
          <p className='MySkills__item-text'>HTML</p>
        </li>
        <li className='MySkills__item'>
          <img className='MySkills__item-image' src={CSS} alt='HTML'/>
          <p className='MySkills__item-text'>CSS</p>
        </li>
        <li className='MySkills__item'>
          <img className='MySkills__item-image' src={JS} alt='HTML'/>
          <p className='MySkills__item-text'>Javascript</p>
        </li>
        <li className='MySkills__item'>
          <img className='MySkills__item-image' src={REACT} alt='HTML'/>
          <p className='MySkills__item-text'>React</p>
        </li>
        <li className='MySkills__item'>
          <img className='MySkills__item-image' src={REDUX} alt='HTML'/>
          <p className='MySkills__item-text'>Redux</p>
        </li>
        <li className='MySkills__item'>
          <img className='MySkills__item-image' src={NODE} alt='HTML'/>
          <p className='MySkills__item-text'>Nodejs</p>
        </li>
        <li className='MySkills__item'>
          <img className='MySkills__item-image' src={API} alt='HTML'/>
          <p className='MySkills__item-text'>API</p>
        </li>
        <li className='MySkills__item'>
          <img className='MySkills__item-image' src={WS} alt='HTML'/>
          <p className='MySkills__item-text'>WebSocket</p>
        </li>
        <li className='MySkills__item'>
          <img className='MySkills__item-image' src={MONGO} alt='HTML'/>
          <p className='MySkills__item-text'>MongoDB</p>
        </li>
        <li className='MySkills__item'>
          <img className='MySkills__item-image' src={SQL} alt='HTML'/>
          <p className='MySkills__item-text'>SQL</p>
        </li>
        <li className='MySkills__item'>
          <img className='MySkills__item-image' src={GIT} alt='HTML'/>
          <p className='MySkills__item-text'>GitHub</p>
        </li>
        <li className='MySkills__item'>
          <img className='MySkills__item-image' src={ANDROID} alt='HTML'/>
          <p className='MySkills__item-text'>Android Studio</p>
        </li>
      </ul>
    </article>
  );
}
