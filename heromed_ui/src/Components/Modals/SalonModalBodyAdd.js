import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useAxios from '../../hooks/useAxios';
import {url} from '../../common/Constants';


const SalonBody = (props) => {
    const [inputValues, setInputValues] = useState({});
    const [available, setAvailable] = useState(true);

    const { data} = useAxios({
        method: 'get',
        url: `/api/sections`,
    });

    const handleChange = (event) => {
        setInputValues({
            ...inputValues,
            [event.target.name]: event.target.value
            
        });
    }

    const handleClose = () => {
        props.setIsModalOpen(false);
    }

    

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(url+'/api/salon/', inputValues, {
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

    useEffect(() => {
        setInputValues({...inputValues, available})
    }, [available])
    
    const isTrue = {
        'true': true,
        'false': false,
    }
    const onOptionChange = e => {
        setAvailable(isTrue[e.target.value]);
    }

    return (
        <div className='flex items-center bg-teal-lighter'>
            <div className='w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto'>
                <form className='mb-4 col-1 md:flex md:flex-wrap md:justify-between' action="/" method="post" onSubmit={handleSubmit}>
                    <div className='flex w-full flex-col mb-4 md:justify-between'>
                        <label className='mb-2 upercase tracking-wide font-bold text-lg text-grey-darkest' htmlFor='salon_floor'>Floor</label>
                        <input className='border rounded-full py-2 px-3 text-grey-darkest' type="number" name="floor" id="salon_floor" onChange={handleChange} required/>
                    </div>
                    <div className='w-full flex flex-col mb-4'>
                        <input className='hidden' id='available' name='available' value={available} onChange={(e) => handleChange(e)} required/>
                        <span>
                            <label className='mb-2 upercase tracking-wide font-bold text-lg text-grey-darkest'>Salon status</label>
                        </span>
                        <div className='flex flex-row justify-around'>
                            <span>
                                <input className='mr-4' type="radio" id="availableRadio" name="trueRadio" value={true} checked={available} onChange={(e) => onOptionChange(e)} />
                                <label htmlFor="available">Available</label>
                            </span>
                            <span>
                                <input className='mr-4' type="radio" id="unavailableRadio" name="falseRadio" value={false} checked={!available} onChange={(e) => onOptionChange(e)} />
                                <label htmlFor="unavailable">Unavailable</label>
                            </span>
                        </div>
                    </div>
                    <div className='flex w-full flex-col mb-4 md:justify-between'>
                        <label className='mb-2 upercase tracking-wide font-bold text-lg text-grey-darkest' htmlFor='salon_beds'>Number of beds</label>
                        <input className='border rounded-full py-2 px-3 text-grey-darkest' type="number" name="beds" id="salon_beds" onChange={handleChange} required/>
                    </div>
                    <div className='flex w-full flex-col mb-4 md:justify-between'>
                        <label className='mb-2 upercase tracking-wide font-bold text-lg text-grey-darkest' htmlFor='salon_number'>Salon number</label>
                        <input className='border rounded-full py-2 px-3 text-grey-darkest' type="number" name="salonNumber" id="salonNumber" onChange={handleChange} required/>
                    </div>
                    <div className='w-full flex'>
                        <label className='mb-2 upercase tracking-wide font-bold text-lg text-grey-darkest' htmlFor='sectionTitle'>Section</label>
                        <span className='mx-8'>
                            <select className='border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none'
                                    name="sectionId" id="sectionTitle" onChange={handleChange} required>
                                        <option>Nothing selected</option>
                                {data?.map((x, id) => (
                                    <option value={x.id} id={x.id} key={id}>{x.title}</option>
                                ))}
                            </select>
                        </span>
                    </div>
                    <div className='w-full flex flex-row mt-6 justify-between'>
                        <button className='bg-blue-500 hover:bg-green-700 font-bold py-2 rounded focus:outline-none focus:shadow-outline hover:px-6 px-5 text-white duration-500' type="submit">
                            Add Section
                        </button>
                        <button className='bg-blue-500 hover:bg-red-700 font-bold py-2 rounded focus:outline-none focus:shadow-outline hover:px-6 px-5 text-white duration-500' onClick={handleClose}>
                            Close
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SalonBody