import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,
		 Switch,
		 Route,
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
    	<Switch>
    		<Route path="/">
    			<Home />
    		</Route>
    		<Route path="/shop">
    			<Shop />
    		</Route>
    		<Route path="/about">
    			<About />
    		</Route>
    	</Switch>
    </Router>
    </>
  );
}

export default App;
