import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import EndavaCardEventPlaceholder from '../../assets/Images/EndavaCardEventPlaceholder.png'
import { endpointApiPath, userIdForDataBase } from '../../configs/endpointsConfig'
import SeatsSVG from '../../shared/IconComponents/seatsSVG'

function EventCardComponent({ cardData, handlePopup }) {
  var options = { day: '2-digit', month: 'short' }
  const { startDate, endDate } = cardData
  const computeStartDate = new Date(startDate).toLocaleDateString('en-GB', options)
  const eventEndDate = new Date(endDate)
  const computeEndDate = eventEndDate.toLocaleDateString('en-GB', options)
  const today = new Date()
  const location = useLocation()

  const isUserInEvent = cardData.participants.some((x) => x.id == userIdForDataBase)
  const [isUserJoined, setIsUserJoined] = useState(isUserInEvent)
  const acceptEventPost = async () => {
    await fetch(endpointApiPath + `/api/events/${cardData.id}/add-user/${userIdForDataBase}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
    setIsUserJoined(true)
  }
  const declineEventPost = () => alert('not implemented')
  return (
    <>
      <div className='event-card-container min-w-[430px] min-h-[350px] max-w-[430px] max-h-[350px] rounded-[10px]'>
        <div className='relative h-[150px] w-full'>
          <img src={EndavaCardEventPlaceholder} className='absolute top-0 right-0 w-full h-full rounded-tl-[10px] rounded-tr-[10px]' />
          <div className='z-10 flex flex-col justify-between h-full'>
            <div className='z-10 flex flex-col items-end pt-2 pr-2'>
              <span className='px-3 py-[1px] text-white bg-opacity-75 border-[1px] rounded-[20px] bg-e-dark border-e-orange font-semibold text-sm'>
                {cardData.location}
              </span>
              <span className='px-3 py-[1px] mt-1 text-white bg-opacity-75 border-[1px] rounded-[20px] bg-e-dark border-e-orange font-semibold text-sm flex justify-evenly items-center'>
                <span className='pr-2'>{cardData.numberOfSeats <= 0 ? '∞' : cardData.numberOfSeats}</span>
                <SeatsSVG />
              </span>
            </div>
            <span className='absolute bottom-0 z-10 w-full h-16 dark-to-transparent-card'></span>
            <span className='z-10 flex items-center justify-center h-10 mx-8'>
              <span className='mb-1 font-normal leading-none text-center text-white'>{cardData.title}</span>
            </span>
          </div>
        </div>
        <div className='relative h-[200px] w-full flex'>
          <div className='flex flex-col justify-start w-4/12 h-full mt-1 ml-3 mr-2'>
            <div className='flex flex-col pt-1'>
              <span className='text-sm font-medium opacity-50'>Organizer?</span>
              <span className='text-sm font-bold leading-none  min-h-[30px]'>{cardData.organizedBy}</span>
            </div>
            <div className='flex flex-col pt-1'>
              <span className='text-sm font-medium opacity-50'>When?</span>
              <span className='text-sm font-bold leading-none'>
                {computeStartDate} - {computeEndDate}
              </span>
            </div>
            <div className='flex flex-col pt-1'>
              <span className='text-sm font-medium opacity-50'>Hour?</span>
              <span className='text-sm font-bold leading-none'>18:00 - 21:00</span>
            </div>
            <div className='flex flex-col pt-1'>
              <span className='text-sm font-medium opacity-50'>Participants?</span>
              <span
                className='text-sm font-bold leading-none text-e-orange border-[1px] rounded-[10px] w-fit mt-1 py-1 px-2 cursor-pointer'
                onClick={handlePopup}
              >
                Check Here
              </span>
            </div>
          </div>
          <span className='border-r-[1px] my-4 border-gray-border'></span>
          <div className='w-3/5 h-full px-2 pt-2'>
            <div className='leading-5 min-h-[150px] w-[240px] text-ellipsis max-h-[150px] overflow-hidden text-description-text font-medium'>
              {cardData.description.length > 200 ? `${cardData.description.substring(0, 200)}...` : cardData.description}
            </div>
            <div className='relative bottom-0 flex items-center justify-end mt-1'>
              {eventEndDate < today ? (
                <>
                  <span className='pr-3 text-sm font-medium opacity-50 '>Status:</span>
                  <span className='pr-3 text-sm font-medium opacity-50 text-accepted'>Accepted</span>
                  <span className='text-sm font-medium leading-none text-black border-[1px] rounded-[10px] w-fit py-1 px-2 cursor-pointer'>
                    Gallery
                  </span>
                </>
              ) : location.pathname != '/my-events' ? (
                isUserInEvent ? (
                  <>
                    <span
                      className='text-sm font-bold leading-none text-accepted border-accepted border-[1px] rounded-[10px] w-fit py-1 px-2 cursor-pointer'
                      onClick={declineEventPost}
                    >
                      Accepted
                    </span>
                  </>
                ) : isUserJoined ? (
                  <>
                    <span
                      className='text-sm font-bold leading-none text-accepted border-accepted border-[1px] rounded-[10px] w-fit py-1 px-2 cursor-pointer'
                      onClick={declineEventPost}
                    >
                      Accepted
                    </span>
                  </>
                ) : (
                  <>
                    <span className='pr-3 text-sm font-medium opacity-50 '>Wanna join?</span>
                    <span
                      className='text-sm font-bold leading-none text-black border-[1px] rounded-[10px] w-fit py-1 px-2 cursor-pointer'
                      onClick={acceptEventPost}
                    >
                      Enroll
                    </span>
                  </>
                )
              ) : (
                <>
                  <span className='text-sm font-bold leading-none text-accepted border-[1px] rounded-[10px] w-fit py-1 px-2 cursor-pointer'>
                    Accepted
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EventCardComponent
