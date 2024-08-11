//import logo from './logo.svg';
import './App.css';
import Nav from './Components/Startboost/Nav';
import Header from './Components/Startboost/header';
import CallToAction from './Components/Startboost/action';
import Footer from './Components/Startboost/footer';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <CallToAction/>
      <Footer/>
    </div>
  );
}

export default App;
