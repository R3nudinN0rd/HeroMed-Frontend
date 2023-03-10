import React from 'react';
import PatientAssignedRelationRow from './MicelaneousComponents/PatientAssignedRelationRow';
import EmptyArray from '../RelatedDataModals/MicelaneousComponents/EmptyArray';
function PatientAssignedEmployees({relations, error}){
    return(
        <div className='flex flex-col w-full h-fit overflow-auto'>
            {error &&(<EmptyArray/>)}
            {relations && relations.map((relation) => <PatientAssignedRelationRow key={relation.employeeId} relation={relation}/>)}
        </div>
    )
}
export default PatientAssignedEmployees