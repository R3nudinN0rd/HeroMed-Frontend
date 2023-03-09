import React from 'react';
import EmployeeAssignedRelationRow from './MicelaneousComponents/PatientAssignedRelationRow';

function EmployeeAssignedEmployees({relations}){
    return(
        <div className='flex flex-col w-full h-full overflow-y-auto'>
            {relations && relations.map((relation) => <EmployeeAssignedRelationRow key={relation.employeeId} relation={relation}/>)}
        </div>
    )
}
export default EmployeeAssignedEmployees