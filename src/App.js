import Home from './pages/home';
import About from "./pages/about";
import Surf from "./pages/surf";
import Skate from "./pages/skate";
import SocialMedia from "./pages/socialMedia";
import Navbar from './Navbar';
import Footer from './Footer';


function App() {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Home/>
      break
    case "/about":
      component = <About/>
      break
    case "/surf":
      component = <Surf/>
      break
    case "/skate":
      component = <Skate/>
      break
    case "/socialMedia":
      component = <SocialMedia/>
      break
  }
  return (<>
    <Navbar/>
    <div className="container"> {component}</div>
    <Footer/>
  </>
  )
}

export default App;
