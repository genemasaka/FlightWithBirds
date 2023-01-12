import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import {NavBar} from "./components/navBar"
import { Home } from "./components/Home"
import { Shop } from "./components/Shop"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <NavBar/>
    <Home />
    </>
  );
}

export default App;
