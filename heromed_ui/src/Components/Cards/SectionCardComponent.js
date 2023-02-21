import React, { useState } from 'react'
import HeromedSectionImagePlaceholder from '../../assets/Images/HeromedSectionImagePlaceholder.jpg'
import Button from '@mui/material/Button';
import add from '../../assets/IconsSvg/vect-icons/add.png'

function SectionCardComponent({ cardData}) {
  // var options = { day: '2-digit', month: 'short' }
  // const { startDate, endDate } = cardData

  // const isUserInEvent = cardData.participants.some((x) => x.id == userIdForDataBase)
  // const [isUserJoined, setIsUserJoined] = useState(isUserInEvent)
  // const acceptEventPost = async () => {
  //   await fetch(endpointApiPath + `/api/sections/${cardData.id}/add-user/${userIdForDataBase}`, {
  //     method: 'PUT',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //   setIsUserJoined(true)
  // }
  // const declineEventPost = () => alert('not implemented')

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal =()=>{
    setIsModalOpen(!isModalOpen);
  }


  return (
    <>
      <div className='event-card-container min-w-[430px] min-h-[350px] max-w-[430px] max-h-[350px] rounded-[10px]'>
        <div className='flex z-20 h-[40px] w-[40px]'>
        <Button className='w-full h-full' size="medium" onClick={() => showModal()}>
          <span>
          <img src={add} className='flex w-6 h-6 px-1 py-1'></img>
          </span>
          </Button>
        </div>
        <div className='relative h-[150px] w-full'>
          <img src={HeromedSectionImagePlaceholder} className='absolute top-0 right-0 w-full h-full rounded-tl-[10px] rounded-tr-[10px]' />
          <div className='z-10 flex flex-col justify-between h-full'>
            <div className='z-10 flex flex-col items-end pt-2 pr-2'>
            </div>
            <span className='absolute bottom-0 z-10 w-full h-16 dark-to-transparent-card'></span>
            <span className='z-10 flex items-center justify-center h-10 mx-8'>
              <span className='mb-1 font-normal leading-none text-center text-white'>{cardData.title}</span>
            </span>
          </div>
        </div>
        <div className='relative h-[200px] w-full flex'>
          <div className='flex flex-col justify-start w-4/12 h-full mt-1 ml-3 mr-2 gap-10'>
            <div className='flex flex-col pt-1'>
              <span className='text-sm font-medium opacity-50'>Maximum number of employees:</span>
              <span className='text-sm font-bold leading-none'>{cardData.maximumEmployeesNo}</span>
            </div>
            <div className='flex flex-col pt-1'>
              <Button size="small">Show related data</Button>
            </div>
          </div>
          <span className='border-r-[1px] my-4 border-gray-border'></span>
          <div className='w-3/5 h-full px-2 pt-2'>
            <div className='leading-5 min-h-[150px] w-[240px] text-ellipsis max-h-[150px] overflow-hidden text-description-text font-medium flex flex-col pt-1'>
              <span className='text-sm font-medium opacity-50'>Section description: </span>
              {cardData.description.length > 200 ? `${cardData.description.substring(0, 200)}...` : cardData.description}
            </div>
            <div className='relative bottom-0 flex items-center justify-end mt-1'>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SectionCardComponent
