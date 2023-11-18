import './styles.css';
// import Maintenance from './Maintenance';
import Header from './Header';
import Navigation from './Navigation';
import About from './About';
import Writer from './Writer';
import Ux from './Ux';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Header />
      <Navigation />
      <main>
        <About />
        <Writer />
        <Ux />
      </main>
      <Footer />
    </div>
    // <Maintenance />
  );
}

export default App;
