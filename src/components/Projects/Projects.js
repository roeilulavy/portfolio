import { useEffect, useState } from 'react';
import ImageSlider from '../ImageSlider/ImageSlider';
import './Projects.css';
import news_colage from '../../images/Projects/news_colage.png';
import around_colage from '../../images/Projects/around_colage.png';
import pokedex_colage from '../../images/Projects/pokedex_colage.PNG';
import ptt_colage from '../../images/Projects/ptt_colage.png';

import NewsCanvas from '../../images/Projects/news_colage.png';
import News1 from '../../images/Projects/news1.png';
import News2 from '../../images/Projects/news2.png';
import News3 from '../../images/Projects/news3.png';
import News4 from '../../images/Projects/news4.png';
import News5 from '../../images/Projects/news5.png';

import AroundCanvas from '../../images/Projects/around_colage.png';
import Around1 from '../../images/Projects/around1.png';
import Around2 from '../../images/Projects/around2.png';
import Around3 from '../../images/Projects/around3.png';
import Around4 from '../../images/Projects/around4.png';
import Around5 from '../../images/Projects/around5.png';
import Around6 from '../../images/Projects/around6.png';

import PokedexCanvas from '../../images/Projects/pokedex_colage.PNG';
import Poke1 from '../../images/Projects/Pokedex1.png';
import Poke2 from '../../images/Projects/Pokedex2.png';
import Poke3 from '../../images/Projects/Pokedex3.png';
import Poke4 from '../../images/Projects/Pokedex4.png';

import PttCanvas from '../../images/Projects/ptt_colage.png';
import Ptt1 from '../../images/Projects/ptt1.png';
import Ptt2 from '../../images/Projects/ptt2.jpg';

export default function Projects() {

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [slides, setSlides] = useState([]);
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [description, setDescription] = useState([]);

  useEffect(() => {
    if(!isPopupOpen) {
      setSlides([]);
      setTitle('');
      setSubtitle('');
      setDescription([]);
    }
  }, [isPopupOpen]);

  const openPopup = (index) => {
    switch (index) {
      case 1:
        setSlides([
          NewsCanvas,
          News1,
          News2,
          News3,
          News4,
          News5
        ]);
        setTitle('News‑explorer');
        setSubtitle('Search and reveal the latest worldwide news.');
        setDescription([
          '• Created a news search engine using React according to a Figma design for the Front‑end and NodeJS, Express and MongoDB for the Back‑end.',
          '• This project makes use of a free third party NewsAPI which collects all the latest articles on the web and let the developer make use of them.',
          '• In this project, users are able to search for articles by typing keyword and reveal the latest news, registered users can save or delete articles.',
        ]);
        break;

      case 2:
        setSlides([
          AroundCanvas,
          Around1,
          Around2,
          Around3,
          Around4,
          Around5,
          Around6
        ]);
        setTitle('Around The U.S');
        setSubtitle('A social photos sharing website.');
        setDescription([
          '• Created a social photos sharing platform using React according to a Figma design for the Front‑end and NodeJS, Express and MongoDB for the Back‑end.',
          '• Make use of Router‑v6 to protect Routes from users that aren’t logged in, Authentication and authorization handled by the Back‑end, using JWT.',
          '• In this project, users are able to create their own profile, upload or delete their own photos, and like or dislike others photos.',
        ]);
        break;
      
      case 3:
        setSlides([
          PokedexCanvas,
          Poke1,
          Poke2,
          Poke3,
          Poke4
        ]);
        setTitle('Pokedex');
        setSubtitle('Explore and learn about variant of Pokemons.');
        setDescription([
          '• Once opening the web app, you will get a close Pokedex view. Press the Pokedex button to open the tiles.',
          `• After opening the tiles you will get a list full of Pokémon's. You can click on a Pokémon card and a new screen will appear with the Pokémon's details and the Pokedex will read for you the description of the Pokémon.`,
          '• You can search for a Pokémon name or ID.',
        ]);
        break;

      case 4:
        setSlides([
          PttCanvas,
          Ptt1,
          Ptt2
        ]);
        setTitle('PTT-WebSocket');
        setSubtitle('A real-time communication PTT website.');
        setDescription([
          '• This project is a part of a big project which enable dispatchers and user to communicate with each other in real time.',
          '• Once loading the page the browser will try to connect to the server using WebSocket.',
          '• The reason of using WebSocket in this project is the advantage of communicating in real-time.'
        ]);
        break;
      
      default:
        setSlides([]);
    };

    setIsPopupOpen(true);
  }

  return (
    <section className='Projects' id='Projects'>
      <h2 className='Projects__title'>What I've been working on</h2>
      <p className='Projects__text'>I like to stay busy and always have a project in the works. <br /> Take a look at some of my applications I've dedicated my time to.</p>

      <ul className='Projects__list'>
        <li className='Projects__item'>
          <div className='Projects__item-description'>
            <h3 className='Projects__item-title'>News‑explorer</h3>
            <h4 className='Projects__item-text'>Search and reveal the latest worldwide news.</h4>
            <p className='Projects__item-link' onClick={() => openPopup(1)}>Read more ›</p>
            <a className='Projects__item-link' href='https://github.com/roeilulavy/news-explorer-frontend' target='_blank' rel='noreferrer'>View repository ›</a>
          </div>
          <img className='Projects__item-image' src={news_colage} alt='News' onClick={() => openPopup(1)} />
        </li>

        <li className='Projects__item'>
          <div className='Projects__item-description'>
            <h3 className='Projects__item-title'>Around The U.S </h3>
            <h4 className='Projects__item-text'>A social photos sharing website.</h4>
            <p className='Projects__item-link' onClick={() => openPopup(2)}>Read more ›</p>
            <a className='Projects__item-link' href='https://roeilulavy.github.io/around-react/' target='_blank' rel='noreferrer'>View website ›</a>
            <a className='Projects__item-link' href='https://github.com/roeilulavy/around-react' target='_blank' rel='noreferrer'>View repository ›</a>
          </div>
          <img className='Projects__item-image' src={around_colage} alt='Around the U.S' onClick={() => openPopup(2)} />
        </li>

        <li className='Projects__item'>
          <div className='Projects__item-description'>
            <h3 className='Projects__item-title'>Pokedex</h3>
            <h4 className='Projects__item-text'>Explore and learn about variant of Pokemons.</h4>
            <p className='Projects__item-link' onClick={() => openPopup(3)}>Read more ›</p>
            <a className='Projects__item-link' href='https://roeilulavy.github.io/react-pokedex/' target='_blank' rel='noreferrer'>View website ›</a>
            <a className='Projects__item-link' href='https://github.com/roeilulavy/react-pokedex' target='_blank' rel='noreferrer'>View repository ›</a>
          </div>
          <img className='Projects__item-image' src={pokedex_colage} alt='Pokedex' onClick={() => openPopup(3)} />
        </li>

        <li className='Projects__item'>
          <div className='Projects__item-description'>
            <h3 className='Projects__item-title'>PTT-Websocket</h3>
            <h4 className='Projects__item-text'>A real-time communication PTT website.</h4>
            <p className='Projects__item-link' onClick={() => openPopup(4)}>Read more ›</p>
            <a className='Projects__item-link' href='https://github.com/roeilulavy/PTT-websocket' target='_blank' rel='noreferrer'>View repository ›</a>
          </div>
          <img className='Projects__item-image' src={ptt_colage} alt='PTT' onClick={() => openPopup(4)} />
        </li>
      </ul>

      <ImageSlider
        slides={slides}
        title={title}
        subtitle={subtitle}
        description={description}
        isPopupOpen={isPopupOpen}
        setIsPopupOpen={setIsPopupOpen}
      />

    </section>
  );
}
