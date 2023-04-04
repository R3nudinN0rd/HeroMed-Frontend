import React, { useState } from 'react'
import axios from 'axios';
import LargeTextModal from '../../Modals/LargeTextModal';
import ModalContainer from '../../Modals/ModalContainer';


function PatientCardComponent({ cardData }) {

    const [isModalOpenText, setIsModalOpenText] = useState(false);
    const [modalBodyText, setModalBodyText] = useState();

    const getPdf = () =>{
    axios.get('http://localhost/ReportServer/Pages/ReportViewer.aspx?/HeroMed/Reports/EnrollReport&rs:Format=PDF', {
    responseType: 'arraybuffer',
    headers: {
        'Content-Type': 'application/pdf'
    }
})
.then(response => {
    const pdfBlob = new Blob([response.data], { type: 'application/pdf' });
    const pdfUrl = URL.createObjectURL(pdfBlob);
    window.open(pdfUrl, '_blank');
})
.catch(error => {
    console.error(error);
});
}

    const DateConverter = (datetime) => {
        const date = new Date(datetime)
        return (`${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`)
    }

    const showDetailsModal = () => {
        setIsModalOpenText(!isModalOpenText);
        setModalBodyText(<LargeTextModal setIsModalOpen={setIsModalOpenText} text={cardData.issueDetails}></LargeTextModal>)
    }

    return (
        <>
            <div className='min-w-full min-h-[100px] max-w-full max-h-[100px] rounded-2xl border-slate-300 border-[1px] bg-white'>
                <div className='flex flex-row w-full h-full'>
                    <div className='flex flex-col w-40 px-2 justify-center items-center'>
                        <span className='text text-bold font-medium opacity-50'>Name</span>
                        <span className='text text-bold font-medium'>{cardData.firstName} {cardData.lastName}</span>
                    </div>
                    <span className='border-r-[1px] border-gray-300 h-full'></span>
                    <div className='flex flex-col w-64 px-4'>
                        <div className='flex flex-row justify-center'>
                            <span className='text text-bold font-medium'>Date values</span>
                        </div>
                        <div className='flex flex-row w-full justify-between'>
                            <span className='text text-bold font-medium opacity-50'>Birth date:</span>
                            <span className='text text-bold font-medium'>{DateConverter(cardData.birthDate)}</span>
                        </div>
                        <div className='flex flex-row w-full justify-between'>
                            <span className='text text-bold font-medium opacity-50'>Enrolled date:</span>
                            <span className='text text-bold font-medium ml-4'>{DateConverter(cardData.enrolledDate)}</span>
                        </div>
                        <div className='flex flex-row w-full justify-between'>
                            <span className='text text-bold font-medium opacity-50'>Discharged date</span>
                            <span className='text text-bold font-medium ml-4'>{DateConverter(cardData.dischargeDate)}</span>
                        </div>
                    </div>
                    <span className='border-r-[1px] border-gray-300 h-full'></span>
                    <div className='flex flex-col w-64 px-4'>
                        <div className='flex flex-col w-full justify-center'>
                            <span className='text text-bold font-medium'>Issue details</span>
                            <div className='flex flex-row justify-between'>
                                <span className='text-center px-3'>{cardData.issueDetails.length > 15 ? `${cardData.issueDetails.substring(0, 15)}...` : cardData.issueDetails}</span>
                                <a className=' text-blue-500 font-bold rounded-sm w-[100px] hover:cursor-pointer px-3' onClick={showDetailsModal}>[Expand]</a>
                            </div>
                        </div>
                    </div>
                    <span className='border-r-[1px] border-gray-300 h-full'></span>
                    <div className='flex flex-col w-64 px-4'>
                        <div className='flex flex-col w-full justify-center'>
                            <span className='text text-bold font-medium'>Contact</span>
                            <div className='flex flex-row w-full justify-between'>
                                <span className='text text-bold font-medium opacity-50'>Phone number:</span>
                                <span className='text text-bold font-medium ml-4'>{cardData.phoneNumber}</span>
                            </div>
                            <div className='flex flex-row w-full justify-between'>
                                <span className='text text-bold font-medium opacity-50'>Email:</span>
                                <span className='text text-bold font-medium ml-4'>{cardData.email}</span>
                            </div>
                        </div>
                    </div>
                    <span className='border-r-[1px] border-gray-300 h-full'></span>
                    <div className='flex flex-col w-64 px-4'>
                        <div className='flex flex-col w-full justify-center'>
                            <span className='text text-bold font-medium'>Emergency contact</span>
                            <div className='flex flex-row w-full justify-between'>
                                <span className='text text-bold font-medium opacity-50'>Contact name:</span>
                                <span className='text text-bold font-medium'>{cardData.emergencyContactName}</span>
                            </div>
                            <div className='flex flex-row w-full justify-between'>
                                <span className='text text-bold font-medium opacity-50'>Phone number:</span>
                                <span className='text text-bold font-medium'>{cardData.emergencyContactPhoneNumber}</span>
                            </div>
                        </div>
                    </div>
                    <span className='border-r-[1px] border-gray-300 h-full'></span>
                    <div className='flex flex-col h-full w-40 justify-center items-center px-4 gap-2'>
                        <div className='bg-blue-500 w-full h-2/5 hover:bg-green-600 rounded-xl py-2 hover:px-4 px-5 text-white duration-500 cursor-pointer justify-center'>
                            <span className='text-white text-sm'><b>Send email</b></span>
                        </div>
                        <div className='bg-blue-500 w-full h-2/5 hover:bg-green-600 rounded-xl py-2 hover:px-4 px-5 text-white duration-500 cursor-pointer justify-center' onClick={getPdf}>
                            <span className='text-white text-sm'><b>Download</b></span>
                        </div>
                    </div>
                </div>
            </div>
            <ModalContainer isModalOpen={isModalOpenText} modalBody={modalBodyText}></ModalContainer>

        </>
    )
}

export default PatientCardComponent