// import logo from './logo.svg';
import './App.css';

import Nav from './components/nav/nav';
import Hero from './components/hero/hero';
import Home from './components/home/home';
import Footer from './components/footer/footer';
import BootstrapComponent from './components/bootstrapComponent/bootstrapComp';
import FontAwesomeComponent from './components/fontAwesomeComponent/fontAwesomeComp';
// Inspiration taken from being a long time Sony fan!

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Hero></Hero>
      <Home></Home>
      <Footer></Footer>
      <BootstrapComponent></BootstrapComponent>
      <FontAwesomeComponent></FontAwesomeComponent>
    </div>
  );
}

export default App;
