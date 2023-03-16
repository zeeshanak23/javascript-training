import './Header.css';

const Header = () => (
    <div className='Header'>
        <div class="heading">
            <h1>Get in touch</h1>
            <p>Contact us for a quote,help us to join the team.</p>
        </div>
        <div class="sub-heading">
            <div>
                <img class="icon_size" src='img/location.png' alt="location_icon" />
                <p>Memco More,Dhanbad</p>
            </div>
            <div>
                <img class="icon_size" src="img/phone.png" alt="call_icon" />
                <p>+91 678 898 7897</p>
            </div>
            <div>
                <img class="icon_size" src="img/email_white.png" alt="email_icon" />
                <p>train@torqbit.com</p>
            </div>
        </div>
    </div>
);
export default Header;