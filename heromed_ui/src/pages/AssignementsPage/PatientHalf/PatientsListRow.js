import React from "react";
import PatientRelationsModal from "../../../Components/Modals/RelationsModals/PatientRelationsModal";

function PatientListRow({rowData, setIsModalOpen, isModalOpen, setModalBody}) {

    const DateConverter = (datetime) => {
        const date = new Date(datetime)
        return (`${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`)
    }

    const showModal = () =>{
        setIsModalOpen(!isModalOpen);
        setModalBody(<PatientRelationsModal setIsModalOpen={setIsModalOpen} patientId = {rowData.id}></PatientRelationsModal>)
    }

    return (
        <>
        <div className="flex flex-col rounded-3xl h-[50px] w-4/5 linear-bg-content-h hover:bg-blue-200 hover:w-full hover:duration-700 cursor-pointer justify-center items-center" onClick={showModal}>
            <span className='border-double border-b-[1px] border-gray-500 w-5/6 scroll mr-3 opacity-20'></span>
            <div className="flex flex-row w-full h-full justify-center items-center">
                <div className="flex flex-col w-1/3 h-full">
                    <span className="text-sm text-bold font-medium text-center opcaity-50">Name</span>
                    <span className="text-sm text-bold font-medium text-center">{rowData.firstName} {rowData.lastName}</span>
                </div>
                <div className="flex flex-col w-1/3 h-full">
                    <span className="text-sm text-bold font-medium text-center opcaity-50">Enrolled date</span>
                    <span className="text-sm text-bold font-medium text-center">{DateConverter(rowData.enrolledDate)}</span>
                </div>
                <div className="flex flex-col w-1/3 h-full">
                    <span className="text-sm text-bold font-medium text-center opacity-50">Discharge date</span>
                    <span className="text-sm text-bold font-medium text-center">{DateConverter(rowData.dischargeDate)}</span>
                </div>
            </div>
            <span className='border-double border-b-[1px] border-gray-500 w-5/6 scroll mr-3 opacity-20'></span>
        </div>
        <span className='border-double border-b-[1px] border-gray-500 w-full scroll mr-3 opacity-30'></span>

        </>
    )
}
export default PatientListRow