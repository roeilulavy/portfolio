import { useEffect, useState } from 'react';
import './ImageSlider.css';

export default function ImageSlider({ slides, title, subtitle, description, isPopupOpen, setIsPopupOpen }) {

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if(!isPopupOpen) {
      setCurrentIndex(0);
    }
  }, [isPopupOpen]);

  const imageStyle = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundImage: `url(${slides[currentIndex]})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundColor: "black"
  };

  const goToPrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length -1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className={`ImageSlider ${isPopupOpen && 'ImageSlider-open'}`}>
      <button className='ImageSlider__button' onClick={closePopup}></button>
      <div className='ImageSlider__image-container'>
        <div className='ImageSlider__left-arrow' onClick={goToPrev}>❮</div>
        <div style={imageStyle}></div>
        <div className='ImageSlider__right-arrow' onClick={goToNext}>❯</div>
        <div className='ImageSlider__dots-container'>
          {slides.map((slide, slideIndex) => (
            <div className='ImageSlider__dots' key={slideIndex} onClick={() => goToSlide(slideIndex)}>●</div>
          ))}
        </div>
      </div>
      <article className='ImageSlider__text-container'>
        <h1 className='ImageSlider__title'>{title}</h1>
        <h3 className='ImageSlider__subtitle'>{subtitle}</h3>
        <div className='ImageSlider__description'>
          {description.map((text, textIndex) => (
            <p className='ImageSlider__text' key={textIndex}>{text}</p>
          ))}
        </div>
      </article>      
    </div>
  );
}
