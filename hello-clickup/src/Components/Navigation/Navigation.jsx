import './Navigation.css';


const Navigation = ({ image }) => {
    return (
        <nav>
            <div>
                <img src={image} alt="design" />
                <h1>ClickUp</h1>
            </div>

            <select>
                <option >Product</option>
                <option >new</option>
                <option >item</option>
                <option >about</option>
            </select>
            <select>
                <option >Solutions</option>
                <option >new</option>
                <option >item</option>
                <option >about</option>
            </select>
            <select>
                <option >Learn</option>
                <option >new</option>
                <option >item</option>
                <option >about</option>
            </select>
            <a href="#Pricing">Pricing</a>
            <a href="#Enterprises">Enterprises</a>
            <span>Contact Sales</span>
            <button className='sign'>Sign Up</button>
            <button className='log'>Log in</button>


        </nav>



    );
}

export default Navigation;