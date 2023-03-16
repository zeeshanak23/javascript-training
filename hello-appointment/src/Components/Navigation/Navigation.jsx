import './Navigation.css';
const Navigation = ({ Image }) => {
    return (
        <nav>
            <div class="brand-name">
                <img src={Image} alt="logo" height="65" width="auto" />
                <h2>HEARNIC</h2>
            </div>
            <a href="#section-about-us">ABOUT US</a>
            <a href="#section-price">PRICE</a>
            <a href="#section-appointment">APPOINTMENTS
                <hr className='nav-hr' />
            </a>
            <a href="#section-contact">CONTACT</a>
            <button>SIGN IN</button>
        </nav>
    );
}
export default Navigation;