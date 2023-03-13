import React from 'react';
import useAxios from '../../../hooks/useAxios';
import LoadingHandler from '../../../common/LoadingHandler';

function JobDropBox({currentJob, handleChange}){
    const{data, loading} = useAxios({
        method:'get',
        url:`/api/jobs`
    });

    return (
        <>
            {loading?(
                <LoadingHandler/>
            ):(
                <>
                    <span className='mx-8 w-full'>
                        <select className='border text-center border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none'
                                name='jobId' id='jobId' value={currentJob} onChange={handleChange} required>
                            <option>Nothing selected</option>
                            {data?.map((x,id)=>(
                                <option value={x.id} id={x.id} key={id}>{x.title}</option>
                            ))}
                        </select>
                    </span>
                </>
            )}
        </>
    )   
}

export default JobDropBox