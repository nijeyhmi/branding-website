import Header from './components/Header';
import About from './sections/About';
import Contact from './sections/Contact';
import Guide from './sections/Guide';
import Shop from './sections/Shop';
import Video from './sections/Video';
import './App.css';

const App = () => {
  return (
    <div className="app-layout">
      <Header />
      <main>
        <About />
        <Video />
        <Shop />
        <Guide />
        <Contact />
      </main>
    </div>
  );
};

export default App;
