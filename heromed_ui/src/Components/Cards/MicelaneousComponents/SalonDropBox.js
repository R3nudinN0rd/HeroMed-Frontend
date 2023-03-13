import React from "react";
import useAxios from "../../../hooks/useAxios";
import LoadingHandler from "../../../common/LoadingHandler";

function SalonDropBox({currentSalon, handleChange}){
    const {data, loading} = useAxios({
        method:'get',
        url:'/api/salon'
    });

    return (
        <>
            {loading?(
                <LoadingHandler/>
            ):(
                <>
                    <span className='mx-8 w-full'>
                        <select className="border text-center border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 hover:border-gray-400 focus: outline-none appearance-none"
                        name="salonId" id="salonNumber" value = {currentSalon} onChange={handleChange}>
                            <option>Nothing selected</option>
                            {data?.map((x,id) => (
                                <option value={x.id} id={x.id} key={id}>{x.salonNumber} </option>
                            ))}
                        </select>
                    </span>
                </>
            )}
        </>
    )
}

export default SalonDropBox