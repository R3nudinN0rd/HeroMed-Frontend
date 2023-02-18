import React, { useState } from 'react';
import axios from 'axios';



const SectionBody = (props)  => {  
    const [inputValues, setInputValues] = useState({});

  const handleChange = (event) => {
    setInputValues({
      ...inputValues,
      [event.target.name]: event.target.value
    });
  }

  const handleClose = () =>{
    props.setIsModalOpen()
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const jsonData = JSON.stringify(inputValues);
    axios.post('http://localhost:58160/api/sections/', jsonData, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        console.log(response);
        window.location.reload(false);
        handleClose();

      })
      .catch(error => {
        console.log(error);
      });
    }

    return (
        <div className="flex items-center bg-teal-lighter">
            <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
                <form className="mb-4 md:flex md:flex-wrap md:justify-between" action="/" method="post" onSubmit={handleSubmit}>
                    <div className="flex flex-col mb-4 md:w-full">
                        <label className="mb-2 uppercase tracking-wide font-bold text-lg text-grey-darkest" htmlFor="section_title">Title</label>
                        <input className="border py-2 px-3 text-grey-darkest" type="text" name="title" id="section_title" onChange={handleChange}/>
                    </div>
                    <div className="flex flex-col mb-4 md:w-full">
                        <label className="mb-2 uppercase font-bold text-lg text-grey-darkest " htmlFor="section_description">Description</label>
                        <input className="border py-2 px-3 text-grey-darkest" type="text" name="description" id="section_description" onChange={handleChange}/>
                    </div>
                    <div className="flex flex-col mb-4 md:w-full">
                        <label className="mb-2 uppercase font-bold text-lg text-grey-darkest" htmlFor="employees_number">Maximum Employees Number</label>
                        <input className="border py-2 px-3 text-grey-darkest" type="number" name="maximumEmployeesNo" id="employees_number" onChange={handleChange}/>
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Add Section
                    </button>
                    <button className='bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' onClick={handleClose}>
                        Close
                    </button>
                </form>
            </div>
        </div>
);
}

export default SectionBody