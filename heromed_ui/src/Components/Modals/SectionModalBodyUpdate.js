import React, { useState } from 'react';
import axios from 'axios';
import {url} from '../../common/Constants';


const SectionBody = ({cardData, setIsModalOpen})  => {
  const { id, title, description, maximumEmployeesNo} = cardData;  
  const [titleValue, setTitleValue] = useState(title);
  const [descriptionValue, setDescriptionValue] = useState(description);
  const [maximumEmployeesNoValue, setMaximumEmployeeNoValue] = useState(maximumEmployeesNo);
  

  const handleClose = () =>{
    setIsModalOpen()
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const jsonData = JSON.stringify({"title":titleValue, "description":descriptionValue, "maximumEmployeesNo":maximumEmployeesNoValue});
    axios.put(url+'/api/sections/'+id, jsonData, {
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
                        <input className="border rounded-full py-2 px-3 text-grey-darkest" type="text" name="title" id="section_title" value={titleValue} onChange={(e) => setTitleValue(e.target.value)}/>
                    </div>
                    <div className="flex flex-col mb-4 md:w-full">
                        <label className="mb-2 uppercase font-bold text-lg text-grey-darkest " htmlFor="section_description">Description</label>
                        <input className="border rounded-full py-2 px-3 text-grey-darkest" type="text" name="description" id="section_description" value={descriptionValue} onChange={(e) => setDescriptionValue(e.target.value)}/>
                    </div>
                    <div className="flex flex-col mb-4 md:w-full">
                        <label className="mb-2 uppercase font-bold text-lg text-grey-darkest" htmlFor="employees_number">Maximum Employees Number</label>
                        <input className="border rounded-full py-2 px-3 text-grey-darkest" type="number" name="maximumEmployeesNo" id="employees_number" value={maximumEmployeesNoValue} onChange={(e) => setMaximumEmployeeNoValue(e.target.value)}/>
                    </div>
                    <button className="bg-blue-500 hover:bg-green-700 font-bold py-2 rounded focus:outline-none focus:shadow-outline hover:px-6 px-5 text-white duration-500" type="submit">
                        Save
                    </button>
                    <button className='bg-blue-500 hover:bg-red-700 font-bold py-2 rounded focus:outline-none focus:shadow-outline hover:px-6 px-5 text-white duration-500' onClick={handleClose}>
                        Close
                    </button>
                </form>
            </div>
        </div>
);
}

export default SectionBody