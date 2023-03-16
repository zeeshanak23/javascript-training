import './App.css';
import './AppointmentApp.css';
import Navigation from './Components/Navigation/Navigation';
import logos from './Vector.png';
import Headers from './Components/Header/Header';
import Form from './Components/Form-info/Form-info';
import Lists from './Components/Doctor-list/Doctor-list';

function AppointmentApp() {
    return (
        <div>
            <Navigation Image={logos} />
            <Headers />
            <Form />
            <div className='doctor-list'>
                <div className='doctorList1'>
                    <Lists image='./img/d1.png' name="Dr.Arti Sukhla" profession="Speacialist Audiologist" /></div>
                <Lists image='./img/d2.png' name="Dr.Rani Kohli" profession="Therapist" />
                <Lists image='./img/d3.png' name="Dr.Nikhil Nanda" profession="Ankylologist" />
            </div>
            <div class="button-2">
                <input type="button" />Please,choose a doctor for me
            </div>
            <div class="button">
                <button type="button">Next</button>
            </div>
        </div>
    );
}

export default AppointmentApp;