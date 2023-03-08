import React, {useState} from 'react';
import ErrorHandler from '../../../common/ErrorHandler';
import LoadingHandler from '../../../common/LoadingHandler';
import useAxios from '../../../hooks/useAxios';
import EmployeeRowComponent from './MicelaneousComponents/EmployeeRowComponent';
import EmptyArray from './MicelaneousComponents/EmptyArray';
function EmployeesList(section){
    const {data, loading, error} = useAxios({
        method:'get',
        url:'/api/employees/section/'+section.sectionId
    })
    
    return (
        <div className='flex flex-col w-full h-full overflow-y-auto'>
            {loading?(
                <LoadingHandler/>
            ):(
                
                <>
                    <div className='flex flex-wrap justify-center w-full h-[100px]'>
                        {error && <EmptyArray/>}
                        {data && data.map((employee) =><EmployeeRowComponent key={employee.id} rowData={employee}></EmployeeRowComponent>)}
                    </div>
                </>
            )}
        </div>
    )
}
export default EmployeesList