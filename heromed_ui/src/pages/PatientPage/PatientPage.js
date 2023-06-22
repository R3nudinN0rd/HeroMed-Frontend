import React, { useState } from 'react';
import ErrorHandler from "../../common/ErrorHandler";
import LoadingHandler from '../../common/LoadingHandler';
import useAxios from '../../hooks/useAxios';
import ModalContainer from '../../Components/Modals/ModalContainer';
import { MdAdd } from 'react-icons/md';
import {FcStatistics} from 'react-icons/fc';
import PatientBody from '../../Components/Modals/PatientModalBodyAdd';
import PatientCardComponent from '../../Components/Cards/PatientCardComponent';
import EmptyArray from '../../Components/Modals/RelatedDataModals/MicelaneousComponents/EmptyArray';
import StatisticsModalBody from '../../Components/Modals/StatisticsModalBody';
function PatientPage() {
    const { data, loading, error } = useAxios({
        method: 'get',
        url: '/api/patient',
    })
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalBody, setModalBody] = useState();

    const [isStatisticsModalOpen, setIsStatisticsModalOpen] = useState(false);
    const [modalStatisticsBody, setModalStatisticsBody] = useState();

    const showModal = () => {
        setIsModalOpen(!isModalOpen);
        setModalBody(<PatientBody setIsModalOpen = {setIsModalOpen}></PatientBody>)
    }

    const showStatisticsModal = () => {
        setIsStatisticsModalOpen(!isStatisticsModalOpen);
        setModalStatisticsBody(<StatisticsModalBody setIsModalOpen={setIsStatisticsModalOpen}></StatisticsModalBody>)
    }
    

    return (
        <div className='linear-bg-content h-[750px] w-full relative overflow-hidden bg-blue-200'>
            <div className={isModalOpen ? 'flex-row justify-center hidden' : 'flex flex-row justify-center'}>
                <button className='mr-2 bg-blue-500 hover:bg-green-500 font-bold py-2 rounded focus:outline-none focus:shadow-outline xl:hover:px-96 md:hover:px-40 xs:hover:px-20 hover:py-1 px-5 text-white duration-500' onClick={() => showModal()}>
                    <span className='flex flex-row'>
                        <MdAdd className='w-6 h-6 mx-1' color='#FFFFFF'></MdAdd>
                        <b>Add patient</b>
                    </span>
                </button>
                <button className='ml-2 bg-blue-500 hover:bg-green-500 font-bold py-2 rounded focus:outline-none focus:shadow-outline xl:hover:px-96 md:hover:px-40 xs:hover:px-20 hover:py-1 px-5 text-white duration-500' onClick={() => showStatisticsModal()}>
                    <span className='flex flex-row'>
                        <FcStatistics className='w-6 h-6 mx-1' color='#FFFFFF'></FcStatistics>
                        <b>Show statistics</b>
                    </span>
                </button>
            </div>
            {<ModalContainer isModalOpen={isModalOpen} modalBody={modalBody}></ModalContainer>}
            {<ModalContainer isModalOpen={isStatisticsModalOpen} modalBody = {modalStatisticsBody}></ModalContainer>}
            {loading ? (
                <LoadingHandler />
            ) : (
                <>
                    <div className='flex flex-wrap justify-center w-full h-full px-8 py-12 overflow-auto overflow-x-hidden rounded-3x1 gap-14'>
                        {error && (<EmptyArray/>)}
                        {data && data.map((patient) => <PatientCardComponent key={patient.id} cardData={patient}/>)}
                    </div>
                </>
            )}
        </div>
    )
}
export default PatientPage