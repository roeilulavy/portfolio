import './Projects.css';
import news_colage from '../../images/Projects/news_colage.png';
import around_colage from '../../images/Projects/around_colage.png';
import pokedex_colage from '../../images/Projects/pokedex_colage.PNG';
import ptt_colage from '../../images/Projects/ptt_colage.png';

export default function Projects() {
  return (
    <div className='Projects'>
      <h2 className='Projects__title'>What I've been working on</h2>
      <p className='Projects__text'>I like to stay busy and always have a project in the works. <br /> Take a look at some of my applications I've dedicated my time to.</p>

      <div className='Projects__item'>
        <div className='Projects__item-description'>
          <h3 className='Projects__item-title'>News‑explorer</h3>
          <p className='Projects__item-text'>Search and reveal the latest worldwide news.</p>
          <a className='Projects__item-link' href='https://github.com/roeilulavy/news-explorer-frontend' target='_blank' rel='noreferrer'>Read more ›</a>
        </div>
        <img className='Projects__item-image' src={news_colage} alt='News' />
      </div>

      <div className='Projects__item'>
        <div className='Projects__item-description'>
          <h3 className='Projects__item-title'>Around The U.S </h3>
          <p className='Projects__item-text'>A social photos sharing website.</p>
          <a className='Projects__item-link' href='https://github.com/roeilulavy/around-react' target='_blank' rel='noreferrer'>Read more ›</a>
        </div>
        <img className='Projects__item-image' src={around_colage} alt='Around the U.S' />
      </div>

      <div className='Projects__item'>
        <div className='Projects__item-description'>
          <h3 className='Projects__item-title'>Pokedex</h3>
          <p className='Projects__item-text'>Explore and learn about variant of Pokemons.</p>
          <a className='Projects__item-link' href='https://github.com/roeilulavy/react-pokedex' target='_blank' rel='noreferrer'>Read more ›</a>
        </div>
        <img className='Projects__item-image' src={pokedex_colage} alt='Pokedex' />
      </div>

      <div className='Projects__item'>
        <div className='Projects__item-description'>
          <h3 className='Projects__item-title'>PTT-Websocket</h3>
          <p className='Projects__item-text'>A real-time communication PTT website.</p>
          <a className='Projects__item-link' href='https://github.com/roeilulavy/PTT-websocket' target='_blank' rel='noreferrer'>Read more ›</a>
        </div>
        <img className='Projects__item-image' src={ptt_colage} alt='PTT' />
      </div>
    </div>
  );
}
