import Button from 'react-bootstrap/Button';

import './App.css';
export function NavBar() {
    return (
        <>
        <nav class="navbar fixed-top navbar-light bg-light">
        <div class="container-fluid">
        <span class="navbar-brand mb-0 h1">flight with birds</span>
        <a class="navbar-brand" href="#" ><em>Shop</em></a>
        <a class="navbar-brand" href="#"><em>Lookbooks</em></a>
        <a class="navbar-brand" href="#"><em>Blog</em></a>
        <Button variant="dark" class="btn"><em>Connect Wallet</em></Button>{' '}
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        </div>
        </nav>
        
        </>
    );
}       