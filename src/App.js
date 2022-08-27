import './App.css';
import Home from './pages/home';
import About from "./pages/about";
import Surf from "./pages/surf";
import Navbar from './Navbar';

function App() {
  let Component;
  switch (window.location.pathname) {
    case "/":
      Component = <Home/>
      break
    case "/about":
      Component = <About/>
      break
    case "/surf":
      Component = <Surf/>
      break
  }
  return (<>
    <Navbar/>
    <div className="container"> {Component}</div>
  </>
  )
}

export default App;
