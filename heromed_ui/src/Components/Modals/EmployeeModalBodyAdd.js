import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useAxios from '../../hooks/useAxios';
import SectionDropBox from '../Cards/MicelaneousComponents/SectionsDropBox';
import JobDropBox from '../Cards/MicelaneousComponents/JobsDropBox'

const EmployeeBody = (props) => {
    const [inputValues, setInputValues] = useState({});
    
    const handleChange = (event) => {
        setInputValues({
            ...inputValues,
            [event.target.name]: event.target.value
        });

        console.log(inputValues);
    }

    const handleClose = () => {
        props.setIsModalOpen(false);
    }

    const handleSubmit = (event) => {
        
        console.log(inputValues);
        axios.post('http://localhost:58160/api/employees', inputValues, {
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
                                <input className='border text-center rounded-full py-2 px-3 text-grey-darkest' name="firstName" id="firstName" onChange={handleChange} required />
                            </div>
                            <div className='flex flex-col mx-2'>
                                <label className='mb-2 upercase tracking-wide font-bold text-lg text-grey-darkest' htmlFor='lastName'>Last name</label>
                                <input className='border text-center rounded-full py-2 px-3 text-grey-darkest' name='lastName' id='lastName' onChange={handleChange} required />
                            </div>
                        </div>
                        <div className='flex w-full flex-row mb-4 md:justify-between'>

                            <div className='flex w-full flex-col mb-4 md:jutify-between'>
                                <label className='mb-2 uppercase tracking-wide font-bold text-lg text-grey-darkest' htmlFor='birthdate'>Birthdate</label>
                                <input className='border text-center rounded-full py-2 px-3 text-grey-darkest' name='birthdate' id='birthdate' type='date' onChange={handleChange} required />
                            </div>
                            <div className='flex w-full flex-col mb-4 md:justify-between'>
                                <label className='mb-2 uppercase tracking-wide font-bold text-lg text-grey-darkest' htmlFor='employmentDate'>Employment date</label>
                                <input className='border text-center rounded-full py-2 px-3 text-grey-darkest' name='employmentDate' id='employmentDate' type='date' onChange={handleChange} required />
                            </div>
                        </div>

                        <div className='flex w-full flex-col mb-4 md:justify-between'>
                            <label className='mb-2 uppercase tracking-wide font-bold text-lg text-grey-darkest' htmlFor='birthplace'>Birthplace</label>
                            <input className='border text-center rounded-full py-2 text-grey-darkest' name='placeOfBirth' id='birthplace' onChange={handleChange} required />
                        </div>

                        <div className='flex flex-col w-full mb-4 md:justify-between'>
                            <label className='mb-2 uppercase tracking-wide font-bold text-lg text-grey-darkest' htmlFor='address'>Address</label>
                            <input className='border text-center rounded-full py-2 text-grey-darkest' name='address' id='address' onChange={handleChange} required />
                        </div>

                        <div className='flex w-full flex-row mb-4 md:justify-between'>
                            <div className='flex flex-col w-full mb-4 md:justify-between'>
                                <label className='mb-2 uppercase tracking-wide font-bold text-lg text-grey-darkest' htmlFor='nationality'>Nationality</label>
                                <input className='border text-center rounded-full py-2 text-grey-darkest' name='nationality' id='nationality' onChange={handleChange} required />
                            </div>
                            <div className='flex flex-col w-full mb-4 md:justify-between'>
                                <label className='mb-2 uppercase tracking-wide font-bold text-lg text-grey-darkest' htmlFor='gender'>Gender</label>
                                <select className='border text-center border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none' name='gender' id='gender' onChange={handleChange} required>
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
                                <input className='border text-center rounded-full py-2 text-grey-darkest' name='email' id='email' type='email' onChange={handleChange} required />
                            </div>
                            <div className='flex flex-col w-full mb-4 md:justify-between'>
                                <label className='mb-2 uppercase tracking-wide font-bold text-lg text-grey-darkest' htmlFor='phone'>Phone number</label>
                                <input className='border text-center rounded-full py-2 text-grey-darkest' name='phoneNumber' id='email' type='tel' onChange={handleChange} required />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col w-full'>
                        <div className='leading-5 min-h-[50px] w-[240px] text-ellipsis max-h-[150px] text-description-text font-medium flex flex-row pt-1'>
                            <span className='text-lg text-bold font-medium text-center'>Employment informations</span>
                        </div>
                        <div className='flex flex-row w-full mb-4 md:justify-between'>
                            <div className='flex flex-col w-full mb-4 md:justify-between'>
                                <label className='mb-2 uppercase tracking-wide font-bold text-lg text-grey-darkest' htmlFor='salary'>Salary</label>
                                <input className='border text-center rounded-full py-2 text-grey-darkest' name='salary' id='salary' onChange={handleChange} type='number' />
                            </div>
                            <div className='flex flex-col w-full mb-4 md:justify-between'>
                                <label className='mb-2 uppercase tracking-wide font-bold text-grey-darkest text-lg' htmlFor='currency'>Currency</label>
                                <input className='border text-center rounded-full py-2 text-grey-darkest' name='salaryCurrency' onChange={handleChange} id='currency' />
                            </div>
                        </div>
                        <div className='flex flex-row w-full mb-4 md:justify-between'>
                            <div className='flex flex-col w-full mb-4 md:justify-between'>
                                <label className='mb-2 uppercase tracking-wide font-bold text-lg text-grey-darkest' htmlFor='sectionId'>Section</label>
                                <SectionDropBox handleChange={handleChange} />
                            </div>
                            <div className='flex flex-col w-full mb-4 md:justify-between'>
                                <label className='mb-2 uppercase tracking-wide font-bold text-lg text-grey-darkest' htmlFor='jobId'>Job title</label>
                                <JobDropBox handleChange={handleChange} />
                            </div>
                        </div>
                        <div className='flex flex-col mb-4 items-center md:justify-between'>
                            <label className='mb-2 uppercase tracking-wide font-bold text-lg texr-grey-darkest' htmlFor='seniority'>Seniority age</label>
                            <input className='border w-1/4 text-center rounded-full py-2 text-grey-darkest' name='seniorityYears' id='seniority' onChange={handleChange} type='number' required />
                        </div>
                    </div>
                    <div className='w-full flex flex-row mt-6 justify-between'>
                        <button className='bg-blue-500 hover:bg-green-700 font-bold py-2 rounded focus:outline-none focus:shadow-outline hover:px-6 px-5 text-white duration-500' type="submit">
                            Add Employee
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

export default EmployeeBody