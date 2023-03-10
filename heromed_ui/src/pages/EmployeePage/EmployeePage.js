import React, { useState } from 'react';
import ErrorHandler from "../../common/ErrorHandler";
import LoadingHandler from '../../common/LoadingHandler';
import useAxios from '../../hooks/useAxios';
import ModalContainer from '../../Components/Modals/ModalContainer';
import { MdAdd } from 'react-icons/md';
import EmployeeBody from '../../Components/Modals/EmployeeModalBodyAdd';
import EmployeeCardComponent from '../../Components/Cards/EmployeeCardComponent';
import EmptyArray from '../../Components/Modals/RelatedDataModals/MicelaneousComponents/EmptyArray';
function EmployeePage() {
    const { data, loading, error } = useAxios({
        method: 'get',
        url: '/api/employees',
    })
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalBody, setModalBody] = useState();

    const showModal = () => {
        setIsModalOpen(!isModalOpen);
        setModalBody(<EmployeeBody setIsModalOpen = {setIsModalOpen}></EmployeeBody>)
    }

    return (
        <div className='linear-bg-content h-[750px] w-full relative overflow-hidden bg-blue-200'>
            <div className={isModalOpen ? 'flex-row justify-center hidden' : 'flex flex-row justify-center'}>
                <button className='bg-blue-500 hover:bg-green-500 font-bold py-2 rounded focul:outline-none focus:shadow-outline xl:hover:px-96 md:hover:px-40 xs:hover:px-20 hover:py-1 px-5 text-white duration-500' onClick={() => showModal()}>
                    <span className='flex flex-row'>
                        <MdAdd className='w-6 h-6 mx-1' color='#FFFFFF'></MdAdd>
                        <b>Add employee</b>
                    </span>
                </button>
            </div>
            {<ModalContainer isModalOpen={isModalOpen} modalBody={modalBody}></ModalContainer>}
            {loading ? (
                <LoadingHandler />
            ) : (
                <>
                    <div className='flex flex-wrap justify-center w-full h-full px-8 py-12 overflow-auto overflow-x-hidden rounded-3x1 gap-14'>
                        {error && (<EmptyArray/>)}
                        {data && data.map((employee) => <EmployeeCardComponent key={employee.id} cardData={employee}/>)}
                    </div>
                </>
            )}
        </div>
    )
}

export default EmployeePage
