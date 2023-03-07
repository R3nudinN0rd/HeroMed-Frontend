import React, { useState } from 'react';
import ErrorHandler from "../../common/ErrorHandler";
import LoadingHandler from '../../common/LoadingHandler';
import useAxios from '../../hooks/useAxios';
import ModalContainer from '../../Components/Modals/ModalContainer';
import { MdAdd } from 'react-icons/md';
import PatientBody from '../../Components/Modals/PatientModalBodyAdd';
import PatientCardComponent from '../../Components/Cards/PatientCardComponent';

function PatientPage() {
    const { data, loading, error } = useAxios({
        method: 'get',
        url: '/api/patient',
    })
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalBody, setModalBody] = useState();

    const showModal = () => {
        setIsModalOpen(!isModalOpen);
        setModalBody(<PatientBody setIsModalOpen = {setIsModalOpen}></PatientBody>)
    }

    return (
        <div className='linear-bg-content h-[750px] w-full relative overflow-hidden bg-blue-200'>
            <div className={isModalOpen ? 'flex-row justify-center hidden' : 'flex flex-row justify-center'}>
                <button className='bg-blue-500 hover:bg-green-500 font-bold py-2 rounded focus:outline-none focus:shadow-outline xl:hover:px-96 md:hover:px-40 xs:hover:px-20 hover:py-1 px-5 text-white duration-500' onClick={() => showModal()}>
                    <span className='flex flex-row'>
                        <MdAdd className='w-6 h-6 mx-1' color='#FFFFFF'></MdAdd>
                        <b>Add patient</b>
                    </span>
                </button>
            </div>
            {<ModalContainer isModalOpen={isModalOpen} modalBody={modalBody}></ModalContainer>}
            {loading ? (
                <LoadingHandler />
            ) : (
                <>
                    <div className='flex flex-wrap justify-center w-full h-full px-8 py-12 overflow-auto overflow-x-hidden rounded-3x1 gap-14'>
                        {error && <ErrorHandler errorMessage={error}/>}
                        {data && data.map((patient) => <PatientCardComponent key={patient.id} cardData={patient}/>)}
                    </div>
                </>
            )}
        </div>
    )
}
export default PatientPage