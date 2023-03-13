import React from "react";
import useAxios from "../../../hooks/useAxios";
import EmployeeAssignedPatients from "./EmployeeAssignedPatients";
import EmployeeUnassignedPatients from "./EmployeeUnassignedPatients";

function EmployeeRelationsModal({ employeeId, setIsModalOpen }) {
    const { data, loading, error } = useAxios({
        method: 'get',
        url: '/api/relation/relationE/' + employeeId
    })

    const handleClose = () => {
        setIsModalOpen();
    }

    return (
        <div className="flex flex-col w-full h-[750px] bg-slate-200 justify-center">
            <div className="flex flex-col w-full justify-center ">
                <div className="flex w-full justify-center">
                    <button className='bg-blue-500 hover:bg-red-700 font-bold py-2 rounded focus:outline-none focus:shadow-outline hover:px-6 px-5 text-white duration-500' onClick={handleClose}>
                        Close
                    </button>
                </div>
                <div className="flex flex-col w-full">
                    <span className="text-lg text-bold font-medium text-center opacity-50">Current employee</span>
                    <span className="text-lg text-bold font-medium text-center opacity-50">{employeeId}</span>
                </div>
            </div>

            <div className="flex flex-col w-full h-full justify-center">
                <div className="flex w-full overflow-y-auto m-2">
                    <EmployeeAssignedPatients relations={data} error={error}/>
                </div>
                <span className='border-b-[2px] my-2 border-gray-500 w-full scroll mr-3 opacity-80'></span>
                <div className="flex w-full overflow-y-auto m-2 mb-4">
                    <EmployeeUnassignedPatients employeeId={employeeId}/>
                </div>
            </div>
        </div>
    )
}

export default EmployeeRelationsModal