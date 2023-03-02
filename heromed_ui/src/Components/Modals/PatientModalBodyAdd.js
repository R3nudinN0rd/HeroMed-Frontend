import React, { useState } from 'react';
import axios from 'axios';
import SalonDropBox from '../Cards/MicelaneousComponents/SalonDropBox';


const PatientBody = (props) => {
    const [inputValues, setInputValues] = useState({})

    const handleChange = (event) => {
        setInputValues({
            ...inputValues,
            [event.target.name]: event.target.value
        });
    }

    const handleClose = () => {
        props.setIsMOdalOpen(false);
    }

    const handleSubmit = (event) => {
        console.log(inputValues);
        axios.post('http://localhost:58160/api/patient', inputValues, {
            headers: {
                'ContentType': 'application/json'
            }
        })
            .then(response => {
                console.log(response);
                window.location.reload(false);
                handleClose();
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className='flex w-full h-3/4 items-center bg-teal-lighter'>
            <div className='w-2/5 max-h-[600px] bg-white rounded` shadow-lg p-8 overflow-y-scroll md:w-3/5 md:mx-auto'>
                <form className='mb-4 col-1 md:flex-wrap md:justify-between' action='/' method='post' onSubmit={handleSubmit}>
                    <div className='flex flex-col w-full'>
                        <div className='leading-5 min-h-[50px] w-[240px] text-ellipsis max-h-[150px] text-description-text fond-medium flex flex-row pt-1'>
                            <span className='text-lg text-bold font-medium text-center'>General information</span>
                        </div>
                        <div className='flex w-full flex-row mb-4 md:justify-between'>
                            <div className='flex flex-col w-full'>
                                <label className='mb-2 uppercase tracking-tab font-bold text-lg text-grey-darkest' htmlFor='firstName'>First name</label>
                                <input className='border text-center rounded-full py-2 px-3 text-grey-darkest' name='firstName' id='firstName' onChange={handleChange} required />
                            </div>
                            <div className='flex flex-col w-full'>
                                <span className='mb-2 uppercase tracking-tab font-bold text-lg text-grey-darkest' htmlFor='lastName'>Last name</span>
                                <input className='border text-center rounded-full py-2 px-3 text-grey-darkest' name='lastName' id='lastName' onChange={handleChange} required />
                            </div>
                        </div>
                        <div className='flex flex-col w-full'>
                            <label className='mb-2 uppercase tracking-tab font-bold text-lg text-grey-darkest' htmlFor='address'>Address</label>
                            <input className='border text-center rounded-full py-2 px-3 text-grey-darkest' name='address' id='address' onChange={handleChange} required />
                        </div>
                        <div className='flex flex-col w-full'>
                            <label className='mb-2 uppercase tracking-tab font-bold text-lg textgrey-darkest' htmlFor='birthdate'>Birthdate</label>
                            <input className='border text-center rounded-full py-2 px-3 text-grey-darkest' name='birthdate' id='birthdate' onChange={handleChange} type='date' required />
                        </div>

                        <div className='leading-5  min-h-[50px] w-[240px] text-ellipsis max-h-[150px] text-description-text font-medium flex flex-row'>
                            <span className='text-lg text-bold font-medium text-center'>Contact</span>
                        </div>
                        <div className='flex flex-row w-full md:justify-between'>
                            <div className='flex flex-col w-full'>
                                <label className='mb-2 uppercase tracking-tab font-bold text-lg text-grey-darkest' htmlFor='email'>Email</label>
                                <input className='border text-center rounded-full py-2 px-3 text-grey-darkest' name='email' id='email' onChange={handleChange} type='email' required />
                            </div>
                            <div className='flex flex-col w-full'>
                                <label className='mb-2 uppercase tracking-tab font-bold text-lg text-grey-darkest' htmlFor='phoneNumber'>Phone number</label>
                                <input className='border text-center rounded-full py-2 px-3 text-grey-darkest' name='phoneNumber' id='phoneNumber' onChange={handleChange} type='tel' required />
                            </div>
                        </div>
                        <div className='leading-5 min-h-[50px] w-[240px] text-ellipsis max-h-[150px] text-description-text font-medium flex flex-row'>
                            <span className='text-lg flex-col font-medium text-center'>Emergency contact</span>
                        </div>
                        <div className='flex flex-row w-full md:justify-between'>
                            <div className='flex flex-col w-full'>
                                <label className='mb-2 uppercase tracking-tab font-bold text-lg text-grey-darkest' htmlFor='emergencyContactName'>Emergency contact name</label>
                                <input className='border text-center rounded-full py-2 px-3 text-grey-darkest' name='emergencyContactName' id='emergencyContactName' onChange={handleChange} type='tel' required/>
                            </div>
                            <div className='flex flex-col w-full'>
                                <label className='mb-2 uppercase tracking-tab font-bold text-lg text-grey-darkest' htmlFor='emergencyContactPhoneNumber'>Emergency contact phone number</label>
                                <input className='border text-center rounded-full py-2 px-3 text-grey-darkest' name='emergencyContactPhoneNumber' id='emergencyContactPhoneNumber' onChange={handleChange} type='tel' required/>
                            </div>
                        </div>
                        <div className='leading-5 min-h-[50px] w-[240px] text-ellipsis max-h-[150px] text-description-text font-medium flex flex-row'>
                            <span className='text-lg flex-col font-medium text-center'>Enrolled details</span>
                        </div>
                        <div className='flex flex-row w-full'>
                            <div className='flex flex-col w-full'>
                                <label className='mb-2 uppercase tracking-tab font-bold text-lg text-grey-darkest' htmlFor='enrolledDate'>Enrolled date</label>
                                <input className='border text-center rounded-full py-2 px-3 text-grey-darkest' name='enrolledDate' id='enrolledDate' onChange={handleChange} type='date' required/>
                            </div>
                            <div className='flex flex-col w-full'>
                                <label className='mb-2 uppercase tracking-tab font-bold text-lg text-grey-darkest' htmlFor='dischargeDate'>Discharged date</label>
                                <input className='border text-center rounded-full py-2 px-3 text-grey-darkest' name='dischargeDate' id='dischargeDate' onChange={handleChange} type='date' required/>
                            </div>
                            <div className='flex flex-col w-full'>
                                <label className='mb-2 uppercase tracking-tab font-bold text-lg text-grey-darkest' htmlFor='salonId'>Salon number</label>
                                <SalonDropBox handleChange={handleChange}/>
                            </div>
                        </div>
                        <div className='flex flex-col w-full'>
                            <label className='mb-2 uppercase tracking-tab font-bold text-lg text-grey-darkest' htmlFor='issueDetails'>Issue details</label>
                            <input className='border text-center rounded-full py-2 px-3 text-grey-darkest' name='issueDetails' id='issueDetails' onChange={handleChange} required/>
                        </div>
                        <div className='w-full flex flex-row mt-6 justify-between'>
                        <button className='bg-blue-500 hover:bg-green-700 font-bold py-2 rounded focus:outline-none focus:shadow-outline hover:px-6 px-5 text-white duration-500' type="submit">
                            Add Patient
                        </button>
                        <button className='bg-blue-500 hover:bg-red-700 font-bold py-2 rounded focus:outline-none focus:shadow-outline hover:px-6 px-5 text-white duration-500' onClick={handleClose}>
                            Close
                        </button>
                    </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default PatientBody