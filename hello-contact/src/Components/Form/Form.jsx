import AppointmentForm from '../../AppointmentForm';
import './Form.css';
import React from 'react';

const FillArea = () => {
    const [state, setOutput] = React.useState({ name: "", phoneNo: "", gmail: "", message: "" })

    const btnClick = (e) => {
        console.log(state.name)
        console.log(state.phoneNo)
        console.log(state.gmail)
        console.log(state.message)
        e.preventDefault();
    }



    return (
        <div>
            <form className='form' action="" onSubmit={(e) => btnClick(e)}>

                <span className='header'>Contact Form</span>
                <div className="form_section">
                    <div>
                        <div>
                            <div className="heading-form">
                                <p>Your Name</p>
                            </div>
                            <div className="name">
                                <span><img className='icon' src="img/person_filled.png" /></span>
                                <input type="text" name='' id='' onChange={(e) => {
                                    setOutput({
                                        ...state,
                                        name: e.currentTarget.value
                                    })
                                }} />
                            </div>
                        </div>
                        <div>
                            <div className="heading-form">
                                <p>Mail</p>
                            </div>
                            <div className="name">
                                <span><img className='icon' src="img/email_outlined.png" /></span>
                                <input type="text" name='' id='' onChange={(e) => {
                                    setOutput({
                                        ...state,
                                        gmail: e.currentTarget.value
                                    })
                                }} />
                            </div>
                        </div>
                        <div>
                            <div className="heading-form">
                                <p>Phone</p>
                            </div>
                            <div className="name">
                                <span><img className='icon' src="img/phone_filled.png" /></span>
                                <input type="text" name='' id='' onChange={(e) => {
                                    setOutput({
                                        ...state,
                                        phoneNo: e.currentTarget.value
                                    })
                                }} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p >Message</p>
                            <input className='message' type="text" name='' id='' onChange={(e) => {
                                setOutput({
                                    ...state,
                                    message: e.currentTarget.value
                                })
                            }} />
                        </div>
                    </div>
                </div>
                <div className="heading-form">
                    <span className='serviceP'>Service</span>
                </div>
                <div className="service">
                    <div className="s1">
                        <p>Web Development</p>
                    </div>
                    <div className="s2">
                        <p>Full Stack Development Training</p>
                    </div>
                </div>
                <div className="button">
                    <button type="submit">Send Message</button>
                </div>
            </form>
        </div>

    )

};
export default FillArea;
