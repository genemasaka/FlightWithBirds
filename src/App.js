import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,
		 Route,
		 Routes,
		 Link
 } from 'react-router-dom';
import {NavBar} from "./components/navBar"
import { Home } from "./components/Home"
import { Shop } from "./components/Shop"
import { About } from "./components/About"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <Router>
    	<Routes>
    		<Route path="/" element={<Home />} />
 
    		<Route path="/shop" element={<Shop />} />
    		
    		<Route path="/about" element={<About />} />
    		
    	</Routes>
    </Router>
    </>
  );
}

export default App;
