import './navigation.css';

const NavBar = ({ image, name, }) => {
    return (
        <div className='navigation'>
            <div className='logo'>
                <img src={image} alt='logo' />
                <h1>{name}</h1>
            </div>
            <div class="nav-links">
                <a href="#home">Home</a>
                <a href="#Products">Products</a>
                <a href="#Resources">Resources</a>
                <a href="#Pricing">Pricing</a>
            </div>

            <div>
                <span className='log-in'>
                    Log in
                </span>
                <span className='sign-up'>
                    Sign up
                </span>
            </div>
        </div>
    );
}
export default NavBar;