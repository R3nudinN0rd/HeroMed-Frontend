import React, { useEffect, useState } from 'react'
import ErrorHandler from '../../common/ErrorHandler'
import LoadingHandler from '../../common/LoadingHandler'
import EventCardComponent from '../../Components/EventCard/EventCardComponent'
import ParticipantsComponent from '../../Components/Participants/ParticipantsComponent'
import useAxios from '../../hooks/useAxios'

function EventsPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [popupEventData, setPopupEventData] = useState(null)
  const { data, res, loading, error } = useAxios({
    method: 'get',
    url: '/api/events',
  })

  const onHandlePopup = (event) => {
    setPopupEventData(event)
    setIsPopupOpen(true)
  }
  const onHandleClosePopup = () => {
    setPopupEventData(null)
    setIsPopupOpen(false)
  }

  return (
    <div className='linear-bg-content h-[620px] w-full relative'>
      {isPopupOpen && <ParticipantsComponent eventData={popupEventData} handleCloseModal={onHandleClosePopup} />}
      {loading ? (
        <LoadingHandler />
      ) : (
        <>
          <div className='flex flex-wrap justify-center w-full h-full px-8 py-12 overflow-auto overflow-x-hidden rounded-3xl gap-14'>
            {error && <ErrorHandler errorMessage={error} />}
            {data && data.map((event) => <EventCardComponent key={event.id} cardData={event} handlePopup={() => onHandlePopup(event)} />)}
          </div>
        </>
      )}
    </div>
  )
}

export default EventsPage
