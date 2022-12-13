import React, { useEffect, useState } from 'react'
import LoadingHandler from '../../common/LoadingHandler'
import { endpointApiPath, userIdForDataBase } from '../../configs/endpointsConfig'
import useAxios from '../../hooks/useAxios'

function CreateEventPage() {
  const today = new Date().toLocaleDateString('en-CA')
  const [eventIdGlob, setEventIdGlob] = useState(0)

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [seats, setSeats] = useState('')
  const [location, setLocation] = useState('')
  const [organizer, setOrganizer] = useState(userIdForDataBase)
  const [startDate, setStartDate] = useState(today)
  const [startHour, setStartHour] = useState('')
  const [endDate, setEndDate] = useState('')
  const [endHour, setEndHour] = useState('')

  const [postSend, setPostSend] = useState('')

  const [buttonDisable, setButtonDisable] = useState(true)

  useEffect(() => {
    setButtonDisable(!title || !description || !seats || !location || !organizer || !startDate || !endDate)
    return
  }, [title, description, seats, location, organizer, startDate, endDate])

  const regexError = new RegExp('^4\\d+')
  const regexPass = new RegExp('^2\\d+')

  const handlePost = async () => {
    const computeStartDate = new Date(startDate).toLocaleDateString('en-CA')
    const computeEndDate = new Date(endDate).toLocaleDateString('en-CA')
    await fetch(endpointApiPath + '/api/events', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: title,
        description: description,
        organizedBy: organizer,
        startDate: computeStartDate,
        endDate: computeEndDate,
        dateUpdated: null,
        location: location,
        numberOfSeats: seats,
        participants: [],
      }),
    }).then((res) => {
      res.json().then(async (data) => {
        await fetch(endpointApiPath + `/api/events/${data.id}/add-user/${userIdForDataBase}`, {
          method: 'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        })
        if (regexPass.test(res.status)) {
          setPostSend(res.status)
          setTitle('')
          setDescription('')
          setSeats('')
          setLocation('')
          setOrganizer('')
          setStartDate(today)
          setEndDate('')
        } else {
          setPostSend(res.status)
        }
      })
    })
  }

  return (
    <div className='linear-bg-content h-[620px] w-full relative'>
      <>
        <div className='flex flex-col w-full h-full px-12 py-16 overflow-auto overflow-x-hidden rounded-3xl '>
          <form className='flex flex-col justify-between h-full'>
            <span className='flex justify-center gap-x-10'>
              <div className='flex flex-col w-5/12 gap-y-8'>
                <span className='flex flex-col'>
                  <span className='font-bold text-input-text'>Event Title*</span>
                  <textarea
                    className='h-20 border-[1px] rounded border-input-text'
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    required
                  />
                </span>
                <span className='flex flex-col'>
                  <span className='font-bold text-input-text'>Event Description*</span>
                  <textarea
                    className='h-28 border-[1px] rounded border-input-text'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                </span>
              </div>
              <div className='flex flex-col w-4/12 gap-y-4'>
                <div className='flex justify-between'>
                  <span className='flex flex-col w-1/4'>
                    <span className='font-bold text-input-text'>Seats</span>
                    <input className='border-[1px] rounded border-input-text h-7' value={seats} onChange={(e) => setSeats(e.target.value)} />
                  </span>
                  <span className='flex flex-col w-2/4'>
                    <span className='font-bold text-input-text'>Location*</span>
                    <input
                      className='border-[1px] rounded border-input-text h-7'
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      required
                    />
                  </span>
                </div>
                <span className='flex flex-col'>
                  <span className='font-bold text-input-text'>Organized By*</span>
                  <span className='flex justify-between float-right gap-2'>
                    <input
                      className='border-[1px] rounded border-input-text h-7 w-7/12'
                      onChange={(e) => setOrganizer(e.target.value)}
                      value={organizer}
                      required
                    />
                    <p className='w-4/12 font-medium underline cursor-pointer text-input-text' onClick={() => setOrganizer('Ionut Daniel Ene')}>
                      Assign me
                    </p>
                  </span>
                </span>
                <div className='flex justify-between'>
                  <span className='flex flex-col w-7/12 '>
                    <span className='font-bold text-input-text'>Start Date*</span>
                    <input
                      className='border-[1px] rounded border-input-text h-7'
                      onChange={(e) => setStartDate(e.target.value)}
                      value={startDate}
                      type='date'
                      required
                    />
                  </span>
                  <span className='flex flex-col w-4/12'>
                    <span className='font-bold text-input-text'>Start Hour</span>
                    <input className='border-[1px] rounded border-input-text h-7' onChange={(e) => setStartHour(e.target.value)} value={startHour} />
                  </span>
                </div>
                <div className='flex justify-between'>
                  <span className='flex flex-col w-7/12'>
                    <span className='font-bold text-input-text'>End Date*</span>
                    <input
                      className='border-[1px] rounded border-input-text h-7'
                      onChange={(e) => setEndDate(e.target.value)}
                      type='date'
                      required
                      value={endDate}
                    />
                  </span>
                  <span className='flex flex-col w-4/12'>
                    <span className='font-bold text-input-text'>End Hour</span>
                    <input className='border-[1px] rounded border-input-text h-7' onChange={(e) => setEndHour(e.target.value)} value={endHour} />
                  </span>
                </div>
              </div>
            </span>
            <span className='flex items-center justify-end gap-10 pr-10'>
              {regexError.test(postSend) && <span className='px-10 py-1 border-[1px] rounded-xl bg-e-orange text-white'>Error: {postSend}</span>}
              {regexPass.test(postSend) && <span className='px-10 py-1 border-[1px] rounded-xl bg-approveText text-white'>Event Saved</span>}
              <button
                onClick={handlePost}
                className='px-8 py-1 border-2 rounded border-[#2A6CD0] text-[#2A6CD0] font-bold bg-[rgba(234, 234, 234, 0.4)] cursor-pointer disabled:text-[#a0a2a5] disabled:cursor-not-allowed disabled:border-[#a0a2a5]'
                type='button'
                disabled={buttonDisable}
              >
                Save
              </button>
            </span>
          </form>
        </div>
      </>
    </div>
  )
}

export default CreateEventPage
