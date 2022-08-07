import Header from '../Header/Header';
import AboutMe from '../AboutMe/AboutMe';
import MySkills from '../MySkills/MySkills';
import Projects from '../Projects/Projects';
import ContactMe from '../ContactMe/ContactMe';
import Footer from '../Footer/Footer';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <MySkills />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
}
