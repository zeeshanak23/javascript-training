import './navigation.css';

const NavBar = ({ image, name, }) => {
    return (
        <div className='navigation'>
            <img src={image} className="dot" alt='logo' />
            <h1>{name}</h1>
            <div className='barTag'>
                <p>Home</p>
                <p>Products</p>
                <p>Resource</p>
                <p>Pricing</p>
            </div>

            <span>
                Log in
            </span>
            <span>
                Sign up
            </span>

        </div>
    );
}
export default NavBar;