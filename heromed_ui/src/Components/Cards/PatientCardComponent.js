import Ract, { useState, useEffect } from 'react';
import useAxios from '../../hooks/useAxios';
import axios from 'axios';
//import PatientBodyUpdate from '../Modals/PatientModalBodyUpdate';
import HeromedSectionImagePlaceholder from '../../assets/Images/HeromedSectionImagePlaceholder.jpg'
import Button from '@mui/material/Button';
import ModalContainer from '../Modals/ModalContainer';
import LoadingHandler from '../../common/LoadingHandler';
import { BiTrash } from 'react-icons/bi';
import { AiFillEdit } from 'react-icons/ai';
import SalonNumber from "./MicelaneousComponents/SalonNumberForCard";
import LargeTextModal from '../Modals/LargeTextModal';

function PatientCardComponent({ cardData }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalBody, setModalBody] = useState();
    const showModal = () => {
        setIsModalOpen(!isModalOpen);
        //  setModalBody(<SalonBodyUpdate setIsModalOpen={setIsModalOpen}, cardData={cardData}></SalonBodyUpdate>)
    }

    const showDetailsModal = () =>{
        setIsModalOpen(!isModalOpen);
        setModalBody(<LargeTextModal setIsModalOpen={setIsModalOpen} text={cardData.issueDetails}></LargeTextModal>)
    }

    const [enrolledDateValue, setEnrolledDateValue] = useState(cardData.enrolledDate);
    const [dischargeDateValue, setDischargeDateValue] = useState(cardData.dischargeDate);
    const[birthdateValue, setBirthdateValue] = useState(cardData.birthDate);

    const deleteEntry = () => {
        axios.delete('http://localhost:58160/api/patient/' + cardData.id, {
            headers: {
                'Content-Type': 'application/json'
            }
        }) 
            .then(response => {
                console.log(response);
                window.location.reload(false);
            })
            .catch(error => {
                console.log(error)
            });
    }
    
    useEffect(() => {
        const enrDate = new Date(cardData.enrolledDate);
        setEnrolledDateValue(`${enrDate.getDate()}-${enrDate.getMonth()+1}-${enrDate.getFullYear()}`);
        const dcDate = new Date(cardData.dischargeDate);
        setDischargeDateValue(`${dcDate.getDate()}-${dcDate.getMonth()+1}-${dcDate.getFullYear()}`);
        const bDate = new Date(cardData.birthDate);
        setBirthdateValue(`${bDate.getDate()}-${bDate.getMonth()+1}-${bDate.getFullYear()}`);
    })


    return (
        <>
            <div className='event-card-container min-w-[430px] min-h-[450px] max-w-[430px] max-h-[450px] rounded-[10px]'>
                <div className='relative flex h-20 w-[40px] space-x-4 float-right mr-20 z-40'>
                    <div className='flex z-20 h-[40px] w-[40px]'>
                        <Button className='w-full h-full' size="medium" onClick={() => showModal()}>
                            <AiFillEdit className='w-[20px] h-[20px]' color='#000D93'></AiFillEdit>
                        </Button>
                    </div>
                    <div className='flex z-20 h-[40px] w-[40px]'>
                        <Button className='w-full h-full' size='medium' onClick={() => deleteEntry()}>
                            <BiTrash className='w-[20px] h-[20px]' color='#931A00'></BiTrash>
                        </Button>
                    </div>
                </div>
                <div className='relative h-[150px] w-full  group'>
                    <img src={HeromedSectionImagePlaceholder} className='absolute top-0 right-0 w-full h-full rounded-tl-[10px] rounded-tr-[10px] overflow-hidden duration-700 group-hover:scale-125 group-hover:z-30  group-hover:h-48' />
                    <div className='z-10 flex flex-col justify-between h-full'>
                        <div className='z-10 flex flex-col items-end pt-2 pr-2'>
                        </div>
                        <span className='absolute bottom-0 z-10 w-full h-16 dark-to-transparent-card'></span>
                        <span className='z-10 flex items-center justify-center h-10 mx-8'>
                            <span className='mb-1 font-normal leading-none text-center text-white'><b>Name:</b> {cardData.firstName} {cardData.lastName}</span>
                        </span>
                    </div>
                </div>
                <div className='relative  h-[250px] w-full flex'>
                    <div className='flex flex-col justify-start w-4/12 h-full mt-1 ml-3 mr-2 gap-5'>
                        <div className='flex flex-col'>
                            <span className='text-sm text-bold text-center font-medium opacity-50'>Salon number</span>
                            <SalonNumber salonId={cardData.salonId}/>
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-sm text-bold text-center font-medium opacity-50'>Birthdate</span>
                            <span className='text-center'>{birthdateValue}</span>
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-sm text-bold text-center font-medium opacity-50'>Enrolled date</span>
                            <span className='text-center'>{enrolledDateValue}</span>
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-sm text-bold text-center font-medium opacity-50'>Discharge date</span>
                            <span className='text-center'>{dischargeDateValue}</span>
                        </div>
                    </div>
                    <span className='border-r-[1px] my-4 border-gray-border h-full'></span>
                    <div className='flex flex-row pt-1 w-full'>
                        <div className='flex flex-col'>
                            <div className='flex flex-col leading-5 min-h-[50px] w-[240px] text-ellipsis max-h-[150px] overflow-hidden text-description-text font-medium'>
                                <span className='text=lg text-bold font-medium text-center'>Contact</span>
                            </div>
                            <div className='flex flex-col mt-1'>
                                <span className='text-sm text-bold text-center font-medium opacity-50 px-3'>Phone number</span>
                                <span className='text-center'>{cardData.phoneNumber}</span>
                            </div>
                            <div className='flex flex-col mt-1'>
                                <span className='text-sm text-bold text-center font-medium opacity-50'>Email</span>
                                <div className='flex flex-row justify-center'>  
                                    <span className='text-center px-2'>{cardData.email}</span>
                                    <button className='bg-blue-500 text-white font-bold rounded-sm w-[100px]'>Send email</button>
                                </div>
                            </div>
                            <div className='flex flex-col mt-1'>
                                <span className='text-sm text-bold text-center font-medium opacity-50'>Emergency contact name</span>
                                <span className='text-center'>{cardData.emergencyContactName}</span>
                            </div>
                            <div className='flex flex-col mt-1'>
                                <span className='text-sm text-bold text-center font-medium opacity-50'>Emergency contact phone number</span>
                                <span className='text-center'>{cardData.emergencyContactPhoneNumber}</span>
                            </div>
                            <div className='flex flex-col mt-1'>
                                <span className='text-sm text-bold text-center font-medium opacity-50'>Issue details</span>
                                <div className='flex flex-row justofy-center'>
                                    <span className='text-center'>{cardData.issueDetails.length > 10 ? `${cardData.issueDetails.substring(0, 30)}...` : cardData.issueDetails}</span>
                                    <a className=' text-blue-500 font-bold rounded-sm w-[100px] hover:cursor-pointer' onClick={showDetailsModal}>[Expand]</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ModalContainer isModalOpen={isModalOpen} modalBody={modalBody}></ModalContainer>
                </div>
            </div>
        </>

    )
}

export default PatientCardComponent