import './navigation.css';

const NavBar = ({ image, name, }) => {
    return (
        <div className='navigation'>
            <img src={image} className="dot" alt='logo' />
            <h1>{name}</h1>
            <div className='barTag'>

                Home
                Products
                Resource
                Pricing

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