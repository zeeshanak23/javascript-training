import './Form-info.css';

const Form = () => (
    <div id="general-information-form">
        <div class="form-heading">
            <h1>1</h1>
            <h1>GENERAL INFO</h1>
        </div>
        <hr />
        <p>Have you visited our clinic before?</p>
        <div class="question-ask">
            <input type="radio" name="ans" value="yes" /> Yes <br />
            <input type="radio" name="ans" value="no" /> No <br />
        </div>
        <p>What's the reason for your visit</p>
        <div class="visit-reason-list">
            <div>
                <img src='/img/logo1.png' />
                <p2>Children's Audiologist</p2>
            </div>
            <div>
                <img src="img/logo2.png" />
                <p2>Audiologist</p2>
            </div>
            <div>
                <img src="img/logo3.png" />
                <p2>Therapist</p2>
            </div>
            <div>
                <img src="img/logo4.png" />
                <p2>Speacialist Doctor</p2>
            </div>
            <div>
                <img src="img/Vector.png" />
                <p2>Consultation with doctor</p2>
            </div>
        </div>
        <p>Choose a doctor</p>
    </div>
);

export default Form;