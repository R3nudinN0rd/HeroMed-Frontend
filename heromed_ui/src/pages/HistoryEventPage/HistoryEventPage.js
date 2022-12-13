import React, { useEffect, useState } from 'react'
import ErrorHandler from '../../common/ErrorHandler'
import LoadingHandler from '../../common/LoadingHandler'
import EventCardComponent from '../../Components/EventCard/EventCardComponent'
import ParticipantsComponent from '../../Components/Participants/ParticipantsComponent'
import useAxios from '../../hooks/useAxios'

function HistoryEventPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [popupEventData, setPopupEventData] = useState(null)
  const today = new Date()
  const { data, loading, error } = useAxios({
    method: 'get',
    url: '/api/events',
  })

  const [data2, setData] = useState(null)

  useEffect(() => {
    if (data !== null) {
      var resultProductData = data.filter((a) => {
        var date = new Date(a.endDate)
        return date <= today
      })
      setData(resultProductData)
    }
  }, [data])

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
            {data2 && data2.map((event) => <EventCardComponent key={event.id} cardData={event} handlePopup={() => onHandlePopup(event)} />)}
          </div>
        </>
      )}
    </div>
  )
}

export default HistoryEventPage
