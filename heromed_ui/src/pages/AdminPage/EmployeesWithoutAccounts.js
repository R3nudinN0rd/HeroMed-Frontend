import React from "react";
import ErrorHandler from "../../common/ErrorHandler";
import LoadingHandler from "../../common/LoadingHandler";
import EmptyArray from "../../Components/Modals/RelatedDataModals/MicelaneousComponents/EmptyArray";
import useAxios from "../../hooks/useAxios";
import EmployeeRow from "./MicelaneousComponents/EmployeeRow";

function EmployeesWithoutAccounts(){
    const {data, loading, error} = useAxios({
        method:'get',
        url:'/api/employees/noaccountemployees'
    })

    return (
        <>
            <div className="flex flex-col h-full w-full overflow-hidden bg-blue-100">
                {loading?(
                    <LoadingHandler/>
                ):(
                    <>
                        <div className="flex flex-col justify-center w-full h-full overflow-y-auto gap-3">
                            {error && (<EmptyArray/>)}
                            {data && data.map((employee) => <EmployeeRow key={employee.id} cardData={employee}></EmployeeRow>)}
                        </div>
                    </>
                )}
            </div>
        </>
    )

}
export default EmployeesWithoutAccounts 