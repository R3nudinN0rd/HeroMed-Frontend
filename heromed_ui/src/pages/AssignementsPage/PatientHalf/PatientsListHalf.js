import React, {useState} from 'react';
import LoadingHandler from '../../../common/LoadingHandler';
import ErrorHandler from '../../../common/ErrorHandler';
import useAxios from '../../../hooks/useAxios';
import PatientListRow from './PatientsListRow';
import ModalContainer from '../../../Components/Modals/ModalContainer';
import PatientRelationsModal from '../../../Components/Modals/RelationsModals/PatientRelationsModal';

function PatientsListHalf(){
    const { data, loading, error } = useAxios({
        method: 'get',
        url: '/api/patient',
    })

    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalBody, setModalBody] = useState();

    return(
        <div className='flex flex-col w-full h-full overflow-y-auto'>

            {loading?(
                <LoadingHandler/>
            ):(
                <>
                    <div className='flex flex-wrap justify-center w-full h-full px-8 py-12 overflow-auto overflow-x-hidden rounded-3x1 gap-3'>
                        {error && <ErrorHandler errorMessage={error}/>}
                        {data && data.map((patient) => <PatientListRow key={patient.id} rowData={patient} setIsModalOpen={setIsModalOpen} isModalOpen = {isModalOpen} setModalBody={setModalBody}/>)}
                    </div>
                </>
            )}
                    {<ModalContainer isModalOpen={isModalOpen} modalBody={modalBody} />}

        </div>
    )
}

export default PatientsListHalf