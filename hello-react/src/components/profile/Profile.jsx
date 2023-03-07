import './profile.css';


const Profile = ({ image, name, position, companyName, country }) => {
    return (
        <div className='profile-img'>
            <img src={image} className="profile-photo" alt='logo' />
            <h1>{name}</h1>
            <p>
                {position} at {companyName}.<br />
                live in {country}
            </p>
            <h1>Skilled In</h1>
        </div>
    );
}
export default Profile;