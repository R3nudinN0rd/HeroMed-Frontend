import React, { useState, useEffect } from 'react';
import useAxios from '../../../../hooks/useAxios';
import axios from 'axios';
import JobTitle from '../../../Cards/MicelaneousComponents/JobTitleForCard';
import SectionTitle from '../../../Cards/MicelaneousComponents/SectionTitleForCard';
import { url } from '../../../../common/Constants';
import LoadingHandler from '../../../../common/LoadingHandler';
import ErrorHandler from '../../../../common/ErrorHandler';

function EmployeeUnassignedRelationRow({ relation }) {

    const { data, loading, error } = useAxios({
        method: 'get',
        url: '/api/patient/id/' + relation.patientId
    })
    const handleUncheck = (event) => {
        setRel(!rel)
        if (rel == true) {
            axios.delete(url + '/api/relation', {
                params:{
                    employeeId: relation.employeeId,
                    patientId: relation.patientId
                },
                headers: {
                    'ContentType': 'application.json'
                }
            })
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.log(error);
                })
        }
        else {
            console.log(relation)
            axios.post(url + '/api/relation', relation, {
                headers: {
                    'ContentType': 'applications/json'
                }
            })
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.log(error);
                })
        }

    }

    const [rel, setRel] = useState(false);

    const DateConverter = (datetime) => {
        const date = new Date(datetime)
        return (`${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`)
    }

    return (
        <div className='flex flex-col w-full h-[50px]'>
            {loading ? (
                <LoadingHandler />
            ) : (
                <>
                    <div className='flex flex-row'>
                        <div className='flex flex-col h-full w-1/7 items-center justify-center'>
                            <input type="checkbox" defaultChecked={false} onClick={handleUncheck}></input>
                        </div>
                        <div className='flex flex-col h-full w-1/3 items-center'>
                            <span className='text-sm text-bold text-center font-medium opacity-50'>Patient name</span>
                            <span className='text-sm text-bold text-center font-medium'>{data.firstName} {data.lastName}</span>
                        </div>
                        <div className='flex flex-col h-full w-1/3 items-center'>
                            <span className='text-sm text-bold text-center font-medium opacity-50'>Enrolled date</span>
                            <span className='text-sm text-bold font-medium text-center'>{DateConverter(data.enrolledDate)}</span>
                        </div>
                        <div className='flex flex-col h-full w-1/3 items-center'>
                            <span className='text-sm text-bold text-center font-medium opacity-50'>Discharge date</span>
                            <span className='text-sm text-bold font-medium text-center'>{DateConverter(data.dischargeDate)}</span>
                        </div>    
                    </div>
                    <span className='border-double border-b-[1px] border-gray-500 w-full scroll mr-3 opacity-30'></span>

                </>
            )}
        </div>
    )
}
export default EmployeeUnassignedRelationRow