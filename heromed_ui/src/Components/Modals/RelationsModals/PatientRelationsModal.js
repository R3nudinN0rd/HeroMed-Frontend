import React from "react";
import axios from "axios";
import useAxios from "../../../hooks/useAxios";
import PatientAssignedEmployees from "./PatientAssignedEmployees";
import PatientUnassignedEmployees from "./PatientUnassignedEmployees";

function PatientRelationsModal({ patientId, setIsModalOpen }) {

    const { data, loading, error } = useAxios({
        method: 'get',
        url: '/api/relation/relationP/' + patientId
    })

    const handleClose = () => {
        setIsModalOpen();
    }


    return (
        <div className="flex flex-col w-full h-[750px] bg-slate-200">
            <div className="flex flex-col w-1/2 justify-center ">
                <div className="flex w-full justify-center">
                    <button className='bg-blue-500 hover:bg-red-700 font-bold py-2 rounded focus:outline-none focus:shadow-outline hover:px-6 px-5 text-white duration-500' onClick={handleClose}>
                        Close
                    </button>
                </div>
                <div className="flex flex-col w-full">
                    <span className="text-lg text-bold font-medium text-center opacity-50">Current patient</span>
                    <span className="text-lg text-bold font-medium text-center opacity-50">{patientId}</span>
                </div>
            </div>

            <div className="flex flex-col w-full justify-center">
                <div className="flex h-1/2 w-full overflow-y-auto m-2">
                    <PatientAssignedEmployees relations={data}/>
                </div>
                <div className="flex h-1/2 w-full overflow-y-auto m-2 mb-4">
                    <PatientUnassignedEmployees patientId={patientId}/>
                </div>
            </div>
        </div>
    )


}
export default PatientRelationsModal