import React, {useState} from 'react'
import axios from 'axios'
import { url } from '../../common/Constants'

function CustomEmailModal({patientData, setIsModalOpen}){

    const [recipients, setRecipient] = useState([patientData]);
    const [subject, setSubject] = useState("");
    const [body, setBody] = useState("");
    const isHtml = true
    const handleClose = () =>{
        setIsModalOpen();
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        axios.post(url+'/api/smtp/sendemail',{recipients, subject, body, isHtml},{
            headers:{
                'ContentType': 'application/json'
            }
        })
        .then(response => {
            console.log(response);
            window.location.reload();
            handleClose();
        })
        .catch(error => {
            console.log(error);
        })
    }

    return(
        <div className='flex w-full h-full items-center justify-center bg-teal-lighter'>
            <div className='w-2/5 h-1/2 bg-white rounded shadow-lg p-8 m-4'>
                <form className='mb-4 col-1' action='/' method='post' onSubmit={handleSubmit}>
                    <div className='leading-5 min-h-[50px] w-full text-ellipsis max-h-[150px] text-description-text font-medium flex flex-row pt-1 justify-center'>
                        <span className="text-2xl text-bold font-medium text-center"> Email compose </span>
                    </div>
                    <div className='flex flex-col w-full mb-4 justify-center'>
                        <div className='flex flex-row w-full justify-around'>
                            <span className=' flex text-lg text-bold text-center font-medium opacity-50'>Email subject</span>
                            <input className='flex border text-center rounded-full py-2 px-3 text-grey-darkest' name='subject' id='subject' type='text' onChange={(e) => setSubject(e.target.value)} required/>
                        </div>
                        <div className='flex flex-col w-full'>
                            <span className='text-lg text-bold text-center font-medium opacity-50'>Email message</span>
                            <textarea className='border  rounded-2xl py-2 px-3 text-grey-darkest h-[120px] overflow-y-auto' onChange={(e) => setBody(e.target.value)}></textarea>
                        </div>
                    </div>
                    <div className='w-full flex flex-row mt-6 justify-between'>
                        <button className='bg-blue-500 hover:bg-green-700 font-bold py-2 rounded focus:outline-none focus:shadow-outline hover:px-6 px-5 text-white duration-500' type="submit">
                            Send email
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

export default CustomEmailModal