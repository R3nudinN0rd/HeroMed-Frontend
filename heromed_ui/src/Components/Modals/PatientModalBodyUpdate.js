import React, { useEffect, useState } from "react";
import axios from "axios";
import SalonDropBox from '../Cards/MicelaneousComponents/SalonDropBox';



const PatientBody = ({ cardData, setIsModalOpen }) => {
    var { id, firstName, lastName, birthDate, address, email, phoneNumber, emergencyContactName, emergencyContactPhoneNumber, salonId, issueDetails, enrolledDate, dischargeDate } = cardData;
    const [firstNameValue, setFirstNameValue] = useState(firstName);
    const [lastNameValue, setLastNameValue] = useState(lastName);
    const [birthdateValue, setBirthdateValue] = useState(birthDate);
    const [addressValue, setAddressValue] = useState(address);
    const [emailValue, setEmailValue] = useState(email);
    const [phoneNumberValue, setPhoneNumberValue] = useState(phoneNumber);
    const [emergencyContactNameValue, setEmergencyContactNameValue] = useState(emergencyContactName);
    const [emergencyContactPhoneNumberValue, setEmergencyContactPhoneNumberValue] = useState(emergencyContactPhoneNumber);
    const [salonIdValue, setSalonIdValue] = useState(salonId);
    const [issueDetailsValue, setIssueDetailsValue] = useState(issueDetails);
    const [enrolledDateValue, setEnrolledDateValue] = useState(enrolledDate);
    const [dischargeDateValue, setDischargeDateValue] = useState(dischargeDate);

    const handleClose = () => {
        setIsModalOpen();
    }


    const handleSubmit = (event) => {
        setValues();
        event.preventDefault();
        axios.put('http://localhost:58160/api/patient/' + id, { firstName, lastName, address, email, phoneNumber, emergencyContactName, emergencyContactPhoneNumber, salonId, issueDetails, dischargeDate }, {
            headers: {
                'ContentType': 'application/json'
            }
        })
            .then(response => {
                console.log(response);
                window.location.reload(false);
                handleClose();
            })
    }

    const setValues = () => {
        firstName = firstNameValue;
        lastName = lastNameValue;
        address = addressValue;
        email = emailValue;
        phoneNumber = phoneNumberValue;
        emergencyContactName = emergencyContactNameValue;
        emergencyContactPhoneNumber = emergencyContactPhoneNumberValue;
        salonId = salonIdValue;
        issueDetails = issueDetailsValue;
        dischargeDate = dischargeDateValue;
    }

    useEffect(() => {

        const checkZero = (date) => 
            date <= 9 ? `0${eDate.getMonth() + 1}` : date



        const bDate = new Date(birthDate);
        const eDate = new Date(enrolledDate);
        const dDate = new Date(dischargeDate)
        const bDateToString = `${bDate.getDate()}-${bDate.getMonth() + 1}-${bDate.getFullYear()}`;
        const eDateToString = `${dDate.getDate()}-${dDate.getMonth() + 1}-${dDate.getFullYear()}`;
        const dDateToString = `${eDate.getFullYear()}-${checkZero(eDate.getMonth() + 1)}-${checkZero(eDate.getDate())}`;
        setBirthdateValue(bDateToString);
        setEnrolledDateValue(eDateToString);
        setDischargeDateValue(dDateToString)
    }, [])

    return (
        <div className='flex w-full -mt-28 h-3/4 items-center bg-teal-lighter'>
            <div className='w-2/5 max-h-[600px] bg-white rounded` shadow-lg p-8 overflow-y-scroll md:w-3/5 md:mx-auto'>
                <form className='mb-4 col-1 md:flex-wrap md:justify-between' action='/' method='post' onSubmit={handleSubmit}>
                    <div className='flex flex-col w-full'>
                        <div className='leading-5 min-h-[50px] w-[240px] text-ellipsis max-h-[150px] text-description-text fond-medium flex flex-row pt-1'>
                            <span className='text-lg text-bold font-medium text-center'>General information</span>
                        </div>
                        <div className='flex w-full flex-row mb-4 md:justify-between'>
                            <div className='flex flex-col w-full'>
                                <label className='mb-2 uppercase tracking-tab font-bold text-lg text-grey-darkest' htmlFor='firstName'>First name</label>
                                <input className='border text-center rounded-full py-2 px-3 text-grey-darkest' name='firstName' id='firstName' value={firstNameValue} onChange={(e) => setFirstNameValue(e.target.value)} required />
                            </div>
                            <div className='flex flex-col w-full'>
                                <span className='mb-2 uppercase tracking-tab font-bold text-lg text-grey-darkest' htmlFor='lastName'>Last name</span>
                                <input className='border text-center rounded-full py-2 px-3 text-grey-darkest' name='lastName' id='lastName' value={lastNameValue} onChange={(e) => setLastNameValue(e.target.value)} required />
                            </div>
                        </div>
                        <div className='flex flex-col w-full'>
                            <label className='mb-2 uppercase tracking-tab font-bold text-lg text-grey-darkest' htmlFor='address'>Address</label>
                            <input className='border text-center rounded-full py-2 px-3 text-grey-darkest' name='address' id='address' value={addressValue} onChange={(e) => setAddressValue(e.target.value)} required />
                        </div>
                        <div className='flex flex-col w-full'>
                            <label className='mb-2 uppercase tracking-tab font-bold text-lg textgrey-darkest' htmlFor='birthdate'>Birthdate</label>
                            <input className='border text-center rounded-full py-2 px-3 text-grey-darkest' name='birthdate' id='birthdate' type='text' value={birthdateValue} disabled />
                        </div>

                        <div className='leading-5  min-h-[50px] w-[240px] text-ellipsis max-h-[150px] text-description-text font-medium flex flex-row'>
                            <span className='text-lg text-bold font-medium text-center'>Contact</span>
                        </div>
                        <div className='flex flex-row w-full md:justify-between'>
                            <div className='flex flex-col w-full'>
                                <label className='mb-2 uppercase tracking-tab font-bold text-lg text-grey-darkest' htmlFor='email'>Email</label>
                                <input className='border text-center rounded-full py-2 px-3 text-grey-darkest' name='email' id='email' type='email' value={emailValue} onChange={(e) => setEmailValue(e.target.value)} />
                            </div>
                            <div className='flex flex-col w-full'>
                                <label className='mb-2 uppercase tracking-tab font-bold text-lg text-grey-darkest' htmlFor='phoneNumber'>Phone number</label>
                                <input className='border text-center rounded-full py-2 px-3 text-grey-darkest' name='phoneNumber' id='phoneNumber' type='tel' value={phoneNumberValue} onChange={(e) => setPhoneNumberValue(e.target.value)} required />
                            </div>
                        </div>
                        <div className='leading-5 min-h-[50px] w-[240px] text-ellipsis max-h-[150px] text-description-text font-medium flex flex-row'>
                            <span className='text-lg flex-col font-medium text-center'>Emergency contact</span>
                        </div>
                        <div className='flex flex-row w-full md:justify-between'>
                            <div className='flex flex-col w-full'>
                                <label className='mb-2 uppercase tracking-tab font-bold text-lg text-grey-darkest' htmlFor='emergencyContactName'>Emergency contact name</label>
                                <input className='border text-center rounded-full py-2 px-3 text-grey-darkest' name='emergencyContactName' id='emergencyContactName' type='tel' value={emergencyContactNameValue} onChange={(e) => setEmergencyContactNameValue(e.target.value)} required />
                            </div>
                            <div className='flex flex-col w-full'>
                                <label className='mb-2 uppercase tracking-tab font-bold text-lg text-grey-darkest' htmlFor='emergencyContactPhoneNumber'>Emergency contact phone number</label>
                                <input className='border text-center rounded-full py-2 px-3 text-grey-darkest' name='emergencyContactPhoneNumber' id='emergencyContactPhoneNumber' type='tel' value={emergencyContactPhoneNumberValue} onChange={(e) => setEmergencyContactPhoneNumberValue(e.target.value)} required />
                            </div>
                        </div>
                        <div className='leading-5 min-h-[50px] w-[240px] text-ellipsis max-h-[150px] text-description-text font-medium flex flex-row'>
                            <span className='text-lg flex-col font-medium text-center'>Enrolled details</span>
                        </div>
                        <div className='flex flex-row w-full'>
                            <div className='flex flex-col w-full'>
                                <label className='mb-2 uppercase tracking-tab font-bold text-lg text-grey-darkest' htmlFor='enrolledDate'>Enrolled date</label>
                                <input className='border text-center rounded-full py-2 px-3 text-grey-darkest' name='enrolledDate' id='enrolledDate' type='text'  value={enrolledDateValue} disabled />
                            </div>
                            <div className='flex flex-col w-full'>
                                <label className='mb-2 uppercase tracking-tab font-bold text-lg text-grey-darkest' htmlFor='dischargeDate'>Discharged date</label>
                                <input className='border text-center rounded-full py-2 px-3 text-grey-darkest' name='dischargeDate' id='dischargeDate'  type='date' value={dischargeDateValue} onChange={(e) => setDischargeDateValue(e.target.value)} required/> 
                                
                            </div>
                            <div className='flex flex-col w-full'>
                                <label className='mb-2 uppercase tracking-tab font-bold text-lg text-grey-darkest' htmlFor='salonId'>Salon number</label>
                                <SalonDropBox currentSalon={salonIdValue} handleChange={(e) => setSalonIdValue(e.target.value)} />
                            </div>
                        </div>
                        <div className='flex flex-col w-full'>
                            <label className='mb-2 uppercase tracking-tab font-bold text-lg text-grey-darkest' htmlFor='issueDetails'>Issue details</label>
                            <input className='border text-center rounded-full py-2 px-3 text-grey-darkest' name='issueDetails' id='issueDetails' value={issueDetailsValue} onChange={(e) => setIssueDetailsValue(e.target.value)} required />
                        </div>
                        <div className='w-full flex flex-row mt-6 justify-between'>
                            <button className='bg-blue-500 hover:bg-green-700 font-bold py-2 rounded focus:outline-none focus:shadow-outline hover:px-6 px-5 text-white duration-500' type="submit">
                                Update Patient
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