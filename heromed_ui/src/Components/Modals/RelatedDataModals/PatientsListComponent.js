import React from "react";
import ErrorHandler from "../../../common/ErrorHandler";
import LoadingHandler from "../../../common/LoadingHandler";
import useAxios from "../../../hooks/useAxios";
import EmptyArray from "./MicelaneousComponents/EmptyArray";
import PatientRowComponent from './MicelaneousComponents/PatientRowComponent'

const PatientsList = (section) =>{
    const {data, loading, error} = useAxios({
        method:'get',
        url:'/api/patient/section/'+section.sectionId
    })

    return (
        <div className="flex flex-col w-full h-full overflow-y-auto">
            {loading?(
                <LoadingHandler/>
            ) : (
                <>
                    <div className="flex flex-wrap justify-center w-full h-[100px]">
                        {error && <EmptyArray/>}
                        {data && data.map((patient) => <PatientRowComponent key={patient.id} rowData={patient}></PatientRowComponent>)}
                    </div>
                </>
            )}
        </div>
    )
}
export default PatientsList