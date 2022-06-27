import './App.css';
import Navbar from './components/Navbar';
import { Route, Switch } from 'react-router-dom'; 
import Home from './pages/Home';
import Footer from './components/Footer';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route export path='/menu' component={Menu}/>
        <Route export path='/about' component={About}/>
        <Route export path='/contact' component={Contact}/>

      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
