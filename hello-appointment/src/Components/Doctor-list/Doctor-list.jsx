import './Doctor-list.css';

const Lists = ({ image, name, profession }) => (
    <div class="doctor-collection">
        <div class="doctor-list">
            <div>
                <img src={image} />
            </div>
            <div className='name'>
                <p5>{name}</p5><br />
                <span>{profession}</span>
                <img src="./img/star.png" height="30" width="40" />
            </div>
        </div>
        <p1>Great Audiologist.Arti was great and very friendly.Great visit.....</p1>
        <div>Available From:<p1>10th Febuary</p1>
        </div>
        <div>
            Working hours:<p1>10am-6pm</p1>
        </div>

        <div className='options'>
            <div>
                <input type="radio" /> Choose
            </div>
            <p>View profile ➜</p>
        </div>

    </div>


);

export default Lists;