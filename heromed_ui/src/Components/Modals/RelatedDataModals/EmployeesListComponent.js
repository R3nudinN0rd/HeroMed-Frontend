import React, {useState} from 'react';
import ErrorHandler from '../../../common/ErrorHandler';
import LoadingHandler from '../../../common/LoadingHandler';
import useAxios from '../../../hooks/useAxios';

const EmployeesList = () =>{
    const {data, loading, error} = useAxios({
        method:'get',
        url:'/api/employees'
    })

    return (
        <div className='flex flex-col w-full h-full overflow-y-scroll'>
            {loading?(
                <LoadingHandler/>
            ):(
                <>
                    <div className='flex flex-wrap justify-center w-full h-[100px]'>
                        {error && <ErrorHandler errorMessage={error}/>}
                        {data && data.map((employee) => <div key={employee.id}>{employee.firstName}</div>
                        
                        )}
                    </div>
                </>
            )}
        </div>
    )
}
export default EmployeesList