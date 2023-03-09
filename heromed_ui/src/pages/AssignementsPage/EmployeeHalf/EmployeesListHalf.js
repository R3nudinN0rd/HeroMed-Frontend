import React from "react";
import LoadingHandler from "../../../common/LoadingHandler";
import ErrorHandler from "../../../common/ErrorHandler";
import useAxios from "../../../hooks/useAxios";
import EmployeesListRow from "./EmployeesListRow";

function EmployeesListHalf({setEmployeeId}) {
    const { data, loading, error } = useAxios({
        method: 'get',
        url: '/api/employees'
    })
    return (
        <div className="flex flex-col w-full h-full overflow-y-auto">
            {loading ? (
                <LoadingHandler />
            ) : (
                <>
                    <div className='flex flex-col items-center justify-center w-full h-full px-8 py-12 overflow-auto overflow-x-hidden rounded-3x1 gap-3'>
                        {error && <ErrorHandler errorMessage={error} />}
                        {data && data.map((employee) => <EmployeesListRow key={employee.id} rowData={employee} setEmployeeId={setEmployeeId}/>)}
                    </div>           
                </>
            )}
        </div>
    )
}
export default EmployeesListHalf