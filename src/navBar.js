import Button from 'react-bootstrap/Button';

export function NavBar() {
    return (
        <>
        <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
        <span class="navbar-brand mb-0 h1">flight with birds</span>
        <a class="navbar-brand" href="#">Shop</a>
        <a class="navbar-brand" href="#">Lookbooks</a>
        <a class="navbar-brand" href="#">Blog</a>
        <Button variant="primary">Connect Wallet</Button>{' '}
        </div>
        </nav>
        
        </>
    );
}       