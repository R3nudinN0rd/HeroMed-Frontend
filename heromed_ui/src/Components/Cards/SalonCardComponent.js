import React, { useState } from 'react'
import useAxios from '../../hooks/useAxios'
import axios from 'axios';
import SalonBodyUpdate from '../Modals/SalonModalBodyUpdate';
import HeromedSalonImagePlaceholder from '../../assets/Images/HeromedSalonImagePlaceholder.png'
import Button from '@mui/material/Button';
import ModalContainer from '../../Components/Modals/ModalContainer';
import LoadingHandler from '../../common/LoadingHandler'
import CurrentPatients from './MicelaneousComponents/CurrentNumberOfPatients';
import { BiTrash } from "react-icons/bi";
import {AiFillEdit} from "react-icons/ai";
import {url} from '../../common/Constants';


function SalonCardComponent({ cardData }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalBody, setModalBody] = useState();
  const showModal = () => {
    setIsModalOpen(!isModalOpen);
    setModalBody(<SalonBodyUpdate setIsModalOpen= {setIsModalOpen} cardData={cardData}></SalonBodyUpdate>);
  }

  const deleteEntry = () =>{
    axios.delete(url+'/api/salon/'+cardData.id, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        console.log(response);
        window.location.reload(false);
      })
      .catch(error => {
        console.log(error);
      });
  }

  const { data, loading } = useAxios({
    method: 'get',
    url: `/api/sections/section/${cardData.sectionId}`,
  });


  var salonAvailable;
  if (cardData.available) salonAvailable = "Available";
  else salonAvailable = "Busy";
  return (
    <>
      {loading? (
        <LoadingHandler />
      ) : (
        <>
          <div className='event-card-container min-w-[430px] min-h-[350px] max-w-[430px] max-h-[350px] rounded-[10px]'>
          <div className='relative flex h-20 w-[40px] space-x-4 float-right mr-20 z-40'>
          <div className='flex z-20 h-[40px] w-[40px]'>
            <Button className='w-full h-full' size="medium" onClick={() => showModal()}>
              <AiFillEdit className='w-[20px] h-[20px]' color='#000D93'></AiFillEdit>
            </Button>
          </div>
          <div className='flex z-20 h-[40px] w-[40px]'>
            <Button className='w-full h-full' size='medium' onClick={() => deleteEntry()}>
              <BiTrash className='w-[20px] h-[20px]'color='#931A00'></BiTrash>
            </Button>
          </div>
        </div>
            <div className='relative h-[150px] w-full  group'>
              <img src={HeromedSalonImagePlaceholder} className='absolute top-0 right-0 w-full h-full rounded-tl-[10px] rounded-tr-[10px] overflow-hidden duration-700 group-hover:scale-125 group-hover:z-30  group-hover:h-48' />
              <div className='z-10 flex flex-col justify-between h-full'>
                <div className='z-10 flex flex-col items-end pt-2 pr-2'>
                </div>
                <span className='absolute bottom-0 z-10 w-full h-16 dark-to-transparent-card'></span>
                <span className='z-10 flex items-center justify-center h-10 mx-8'>
                  <span className='mb-1 font-normal leading-none text-center text-white'>Salon number: {cardData.salonNumber}</span>
                </span>
              </div>
            </div>
            <div className='relative h-[200px] w-full flex'>
              <div className='flex flex-col justify-start w-4/12 h-full mt-1 ml-3 mr-2 gap-10'>
                <div className='flex flex-col pt-1'>
                  <span className='mt-1 text-sm font-bold text-center leading-none'>{salonAvailable}</span>
                  <span>Capacity: <CurrentPatients salonId={cardData.id}/>/{cardData.beds}</span>       
                </div>
              </div>
              <span className='border-r-[1px] my-4 border-gray-border'></span>
              <div className='flex flex-col w-3/5 h-full px-2 pt-2'>
                <div className='leading-5 min-h-[50px] w-[240px] text-ellipsis max-h-[150px] overflow-hidden text-description-text font-medium flex flex-col pt-1'>
                  <span className='text-sm font-medium opacity-50'>Floor</span>
                  <a>{cardData.floor}</a>
                </div>
                <div className='leading-5 min-h-[150px] w-[240px] text-ellipsis max-h-[150px] overflow-hidden text-description-text font-medium flex flex-col pt-1'>
                  <span className='text-sm font-medium opacity-50'>Correspondent section </span>
                  <a>{data.title}</a>
                </div>
                <div className='relative bottom-0 flex items-center justify-end mt-1'>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
     <ModalContainer isModalOpen={isModalOpen} modalBody={modalBody} ></ModalContainer> 

    </>
  )
}

export default SalonCardComponent
