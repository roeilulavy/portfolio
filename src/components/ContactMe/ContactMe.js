import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactMe.css';
import Background from '../../images/Background/shape-bg2.png';
import LinkedIn from '../../images/Icons/linkedin_icon.png';
import Github from '../../images/Icons/github_icon.png';
import Whatsapp from '../../images/Icons/whatsapp_icon.png';
import Email from '../../images/Icons/email_icon.png';
import Success from '../../images/Icons/success_icon.png';

export default function ContactMe() {

  const form = useRef();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [done, setDone] = useState(false);

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if(!name || !email || !message) {
      setError(true);
      setErrorMessage('Please fill all the fields!');
      setLoading(false);
      return;
    };

    if (!isValidEmail(email)) {
      setError(true);
      setErrorMessage('Email is invalid!');
      setLoading(false);
      return;
    } else {
      setError(false);
      setLoading(true);
    }

    emailjs.sendForm(
      "service_22q1blm",
      "template_ic8jg69",
      form.current,
      "RZcJ6kTH8xdaaJY6i"
    ).then(res => {
      console.log(res.text);
      setDone(true);
    }).catch(err => 
      console.log(err)
    );
  };

  return (
    <section className='ContactMe' id='Contact'>
      <img className='ContactMe__background' src={Background} alt='' />
      <h2 className='ContactMe__title'>Contact Me</h2>
      <p className='ContactMe__text'>Lets Keep In Touch!</p>
      <div className='ContactMe__container'>
        <aside className='ContactMe__list-container'>
          <div className='ContactMe__list-container1'>
            <h3 className='ContactMe__list-title'>View My Social</h3>
            <ul className='ContactMe__list'>
              <li className='ContactMe__list-item'>
                <a href='https://www.linkedin.com/in/roei-lulavy' target='_blank' rel='noreferrer'>
                  <img className='ContactMe__list-image' src={LinkedIn} alt='LinkedIn'/>
                </a>
              </li>
              <li className='ContactMe__list-item'>
                <a href='https://github.com/roeilulavy' target='_blank' rel='noreferrer'>
                  <img className='ContactMe__list-image' src={Github} alt='Github'/>
                </a>
              </li>
              <li className='ContactMe__list-item'>
                <a href='https://wa.me/972527001019' target='_blank' rel='noreferrer'>
                  <img className='ContactMe__list-image' src={Whatsapp} alt='Whatsapp'/>
                </a>
              </li>
              <li className='ContactMe__list-item'>
                <a href='mailto:roy.lulavy@gmail.com' target='_blank' rel='noreferrer'>
                  <img className='ContactMe__list-image' src={Email} alt='Email'/>
                </a>
              </li>
            </ul>
          </div>
          <div className='ContactMe__list-container1'>
            <h3 className='ContactMe__list-title'>View My Resume</h3>
            <a href='Roy_Lulavy CV.pdf' download='Roy_Lulavy CV.pdf'>
              <button className='ContactMe__list-button'>View</button>
            </a>
          </div>
        </aside>
        <form className='ContactMe__form' ref={form} onSubmit={handleSubmit}>
          {done ? 
            <>
              <h3 className='ContactMe__form-success'>Thank you for contact me! <br/> I will get back to you as soon as possible.</h3>
              <img className='ContactMe__form-image' src={Success} alt='Success'/>
            </>
            :
            <>
              <h3 className='ContactMe__form-title'>Have a question or want to work together? <br/>Leave your details below.</h3>
              <label className='ContactMe__form-label'>Name</label>
              <input
                className='ContactMe__form-input'
                type='text'
                name='user_name'
                onChange={e => setName(e.target.value)}
                required
              />
              <label className='ContactMe__form-label'>Email</label>
              <input
                className='ContactMe__form-input'
                type='text'
                name='user_email'
                autoComplete='email'
                onChange={e => setEmail(e.target.value)}
                required  
              />
              <label className='ContactMe__form-label'>Message</label>
              <textarea
               className='ContactMe__form-input-text'
               type='text' name='message'
               onChange={e => setMessage(e.target.value)}
               required
              />
              {error && <p className='ContactMe__form-error'>{errorMessage}</p>}
              <button className={`${loading ? 'ContactMe__form-button-loading' : 'ContactMe__form-button'}`}>
                {loading ? 'Sending...' : 'Submit'}
              </button>
            </>
          }
        </form>
      </div>
    </section>
  );
}
