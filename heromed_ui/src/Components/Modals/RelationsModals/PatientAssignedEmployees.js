import React from 'react';
import PatientAssignedRelationRow from './MicelaneousComponents/PatientAssignedRelationRow';

function PatientAssignedEmployees({relations}){
    return(
        <div className='flex flex-col w-full h-full overflow-y-auto'>
            {relations && relations.map((relation) => <PatientAssignedRelationRow key={relation.employeeId} relation={relation}/>)}
        </div>
    )
}
export default PatientAssignedEmployees