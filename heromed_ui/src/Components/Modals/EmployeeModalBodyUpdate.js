import React, { useEffect, useState } from "react";
import axios from "axios";
import SectionDropBox from '../Cards/MicelaneousComponents/SectionsDropBox';
import JobDropBox from '../Cards/MicelaneousComponents/JobsDropBox'


function EmployeeBodyUpdate({ cardData, setIsModalOpen }) {
    var { id, firstName, lastName, birthdate, employmentDate, placeOfBirth, nationality, address, phoneNumber, email, gender, salary, salaryCurrency, jobId, sectionId, seniorityYears } = cardData;
    const [firstNameValue, setFirstNameValue] = useState(firstName);
    const [lastNameValue, setLastNameValue] = useState(lastName);
    const [nationalityValue, setNationalityValue] = useState(nationality);
    const [addressValue, setAddressValue] = useState(address);
    const [emailValue, setEmailValue] = useState(email);
    const [phoneNumberValue, setPhoneNumberValue] = useState(phoneNumber);
    const [jobIdValue, setJobIdValue] = useState(jobId);
    const [sectionIdValue, setSectionIdValue] = useState(sectionId);
    const [yearsOfSeniorityValue, setYearsOfSeniorityValue] = useState(seniorityYears);

    const [birthdateValue, setBirthDateValue] = useState();
    const [genderValue, setGenderValue] = useState(gender);

    const handleClose = () => {
        setIsModalOpen();
    }

    const handleSubmit = (event) => {
        setValues();
        event.preventDefault();
        console.log({ firstName, lastName, nationality, address, phoneNumber, email, salary, salaryCurrency, jobId, sectionId, seniorityYears });
        axios.put('http://localhost:58160/api/employees/' + id, { firstName, lastName, nationality, address, phoneNumber, email, jobId, sectionId, seniorityYears }, {
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

    const setValues = () => {
        firstName = firstNameValue;
        lastName = lastNameValue;
        nationality = nationalityValue;
        address = addressValue;
        email = emailValue;
        phoneNumber = phoneNumberValue;
        jobId = jobIdValue;
        sectionId = sectionIdValue;
        seniorityYears = yearsOfSeniorityValue;

    }
    useEffect(() => {
        const birthDate = new Date(birthdate)
        const day = birthDate.getDate()
        const month = birthDate.getMonth() + 1
        const year = birthDate.getFullYear()
        const date = `${year}-${month}-${day}`
        setBirthDateValue(date)
        
    }, [birthdate])

    return (
        <div className='flex w-full h-3/4 items-center bg-teal-lighter '>
            <div className='w-2/5 max-h-[600px] bg-white rounded shadow-lg p-8 m-4 overflow-y-scroll md:w-3/5 md:mx-auto'>
                <form className='mb-4 col-1 md:flex md:flex-wrap md:justify-between' action='/' method='post' onSubmit={handleSubmit}>
                    <div className='flex flex-col w-full'>
                        <div className="leading-5 min-h-[50px] w-[240px] text-ellipsis max-h-[150px] text-description-text font-medium flex flex-row pt-1">
                            <span className="text-lg text-bold font-medium text-center"> General information </span>
                        </div>
                        <div className='flex w-full flex-row mb-4 md:justify-between'>
                            <div className='flex flex-col mx-2'>
                                <label className='mb-2 upercase tracking-wide font-bold text-lg text-grey-darkest' htmlFor='firstName'>First name</label>
                                <input className='border text-center rounded-full py-2 px-3 text-grey-darkest' name="firstName" id="firstName" value={firstNameValue} onChange={(e) => setFirstNameValue(e.target.value)} required />
                            </div>
                            <div className='flex flex-col mx-2'>
                                <label className='mb-2 upercase tracking-wide font-bold text-lg text-grey-darkest' htmlFor='lastName'>Last name</label>
                                <input className='border text-center rounded-full py-2 px-3 text-grey-darkest' name='lastName' id='lastName' value={lastNameValue} onChange={(e) => setLastNameValue(e.target.value)} required />
                            </div>
                        </div>
                        <div className='flex w-full flex-row mb-4 md:justify-between'>

                            <div className='flex w-full flex-col mb-4 md:jutify-between'>
                                <label className='mb-2 uppercase tracking-wide font-bold text-lg text-grey-darkest' htmlFor='birthdate'>Birthdate</label>
                                <input className='border text-center rounded-full py-2 px-3 text-grey-darkest' name='birthdate' id='birthdate' value={birthdate}  disabled  />
                            </div>
                        </div>

                        <div className='flex w-full flex-col mb-4 md:justify-between'>
                            <label className='mb-2 uppercase tracking-wide font-bold text-lg text-grey-darkest' htmlFor='birthplace'>Birthplace</label>
                            <input className='border text-center rounded-full py-2 text-grey-darkest' name='placeOfBirth' id='birthplace' value={placeOfBirth} disabled/>
                        </div>

                        <div className='flex flex-col w-full mb-4 md:justify-between'>
                            <label className='mb-2 uppercase tracking-wide font-bold text-lg text-grey-darkest' htmlFor='address'>Address</label>
                            <input className='border text-center rounded-full py-2 text-grey-darkest' name='address' id='address' value={addressValue} onChange={(e) => setAddressValue(e.target.value)} required />
                        </div>

                        <div className='flex w-full flex-row mb-4 md:justify-between'>
                            <div className='flex flex-col w-full mb-4 md:justify-between'>
                                <label className='mb-2 uppercase tracking-wide font-bold text-lg text-grey-darkest' htmlFor='nationality'>Nationality</label>
                                <input className='border text-center rounded-full py-2 text-grey-darkest' name='nationality' id='nationality' value={nationalityValue} onChange={(e) => setNationalityValue(e.target.value)} required />
                            </div>
                            <div className='flex flex-col w-full mb-4 md:justify-between'>
                                <label className='mb-2 uppercase tracking-wide font-bold text-lg text-grey-darkest' htmlFor='gender'>Gender</label>
                                <select className='border text-center border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none' name='gender' id='gender' value={genderValue} disabled required>
                                    <option>Nothing selected</option>
                                    <option value='M'>Male</option>
                                    <option value='F'>Female</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col w-full'>
                        <div className="leading-5 min-h-[50px] w-[240px] text-ellipsis max-h-[150px] text-description-text font-medium flex flex-row pt-1">
                            <span className="text-lg text-bold font-medium text-center"> Contact </span>
                        </div>
                        <div className='flex flex-row w-full mb-4 md:justify-between'>
                            <div className='flex flex-col w-full mb-4 md:justify-between'>
                                <label className='mb-2 uppercase tracking-wide font-bold text-lg text-grey-darkest' htmlFor='email'>Email</label>
                                <input className='border text-center rounded-full py-2 text-grey-darkest' name='email' id='email' type='email' value={emailValue} onChange={(e) => setEmailValue(e.target.value)} required />
                            </div>
                            <div className='flex flex-col w-full mb-4 md:justify-between'>
                                <label className='mb-2 uppercase tracking-wide font-bold text-lg text-grey-darkest' htmlFor='phone'>Phone number</label>
                                <input className='border text-center rounded-full py-2 text-grey-darkest' name='phoneNumber' id='email' type='tel' value={phoneNumberValue} onChange={(e) => setPhoneNumberValue(e.target.value)} required />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col w-full'>
                        <div className='leading-5 min-h-[50px] w-[240px] text-ellipsis max-h-[150px] text-description-text font-medium flex flex-row pt-1'>
                            <span className='text-lg text-bold font-medium text-center'>Employment informations</span>
                        </div>
                        <div className='flex flex-row w-full mb-4 md:justify-between'>
                            <div className='flex flex-col w-full mb-4 md:justify-between'>
                                <label className='mb-2 uppercase tracking-wide font-bold text-lg text-grey-darkest' htmlFor='sectionId'>Section</label>
                                <SectionDropBox currentSection={sectionIdValue} handleChange={(e) => setSectionIdValue(e.target.value)} />
                            </div>
                            <div className='flex flex-col w-full mb-4 md:justify-between'>
                                <label className='mb-2 uppercase tracking-wide font-bold text-lg text-grey-darkest' htmlFor='jobId'>Job title</label>
                                <JobDropBox currentJob={jobIdValue} handleChange={(e) => setJobIdValue(e.target.value)} />
                            </div>
                        </div>
                        <div className='flex flex-col mb-4 items-center md:justify-between'>
                            <label className='mb-2 uppercase tracking-wide font-bold text-lg texr-grey-darkest' htmlFor='seniority'>Seniority age</label>
                            <input className='border w-1/4 text-center rounded-full py-2 text-grey-darkest' name='seniorityYears' id='seniority' value={seniorityYears} onChange={(e) => setYearsOfSeniorityValue(e.target.value)} type='number' required />
                        </div>
                    </div>
                    <div className='w-full flex flex-row mt-6 justify-between'>
                        <button className='bg-blue-500 hover:bg-green-700 font-bold py-2 rounded focus:outline-none focus:shadow-outline hover:px-6 px-5 text-white duration-500' type="submit">
                            Update Employee
                        </button>
                        <button className='bg-blue-500 hover:bg-red-700 font-bold py-2 rounded focus:outline-none focus:shadow-outline hover:px-6 px-5 text-white duration-500' onClick={handleClose}>
                            Close
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EmployeeBodyUpdate