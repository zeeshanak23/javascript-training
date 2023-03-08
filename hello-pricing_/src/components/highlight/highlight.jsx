import './highlight.css';

const Highlight = ({ headline, tick, price }) => (
    <div className='list-11'>
        <h7>{headline}</h7>
        <span className='popular'>popular</span>
        <div className='basic'>
            <h4>{price}</h4>
            <p>per user<br></br> per month</p>
        </div>
        <p1>Basic features for up to 10 users</p1>
        <button type="button" className='button-started1'>Get started</button>
        <button type="button" className='button-sales'>chat to sales</button>
        <h5>FEATURES</h5>
        <p5>Everything is our free plan plus...</p5>
        <div className='features'>
            <div>
                <img src={tick} alt="tick" />
                <p>Access to basic features</p>
            </div>
            <div>
                <img src={tick} alt="tick" />
                <p>Basic reporting and analytics</p>
            </div>
            <div>
                <img src={tick} alt="tick" />
                <p>up to 10 individual users</p>
            </div>
            <div>
                <img src={tick} alt="tick" />
                <p>20GB individual data each users</p>
            </div>
            <div>
                <img src={tick} alt="tick" />
                <p>Basic chat and email support</p>
            </div>
        </div>

    </div>
);
export default Highlight;