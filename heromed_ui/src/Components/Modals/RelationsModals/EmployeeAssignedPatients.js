import React from 'react';
import EmptyArray from '../RelatedDataModals/MicelaneousComponents/EmptyArray';
import EmployeeAssignedRelationRow from './MicelaneousComponents/EmployeeAssignedRelationRow';

function EmployeeAssignedEmployees({relations, error}){
    return(
        <div className='flex flex-col w-full h-full overflow-y-auto'>
            {error &&(<EmptyArray/>)}
            {relations && relations.map((relation) => <EmployeeAssignedRelationRow key={relation.patientId} relation={relation}/>)}
        </div>
    )
}
export default EmployeeAssignedEmployees