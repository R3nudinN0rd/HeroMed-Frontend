import React, { useEffect, useReducer, useState } from 'react'
import ErrorHandler from '../../common/ErrorHandler'
import LoadingHandler from '../../common/LoadingHandler'
import EventCardComponent from '../../Components/EventCard/EventCardComponent'
import ParticipantsComponent from '../../Components/Participants/ParticipantsComponent'
import { endpointApiPath, userIdForDataBase, userRoleForDataBase } from '../../configs/endpointsConfig'
import useAxios from '../../hooks/useAxios'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import UploadSVG from '../../shared/IconComponents/uploadSVG'
import PenSVG from '../../shared/IconComponents/penSVG'
import TrashSVG from '../../shared/IconComponents/trashSVG'

function ListOfEventsPage() {
  const [postSend, setPostSend] = useState('')
  const userId = userIdForDataBase
  const userRole = userRoleForDataBase
  const regexPass = new RegExp('^2\\d+')

  const typeOfUrl = () => (userRole != 'user' ? '/api/events' : `/api/users/${userId}/events`)

  const { data, res, loading, error } = useAxios({
    method: 'get',
    url: typeOfUrl(),
  })

  const [events, setEvents] = useState()

  useEffect(() => {
    if (!data) return
    setEvents(data)
  }, [data])

  useEffect(() => {
    if (regexPass.test(postSend)) window.location.reload(false)
  }, [postSend])

  const handlePost = async (eventId) => {
    await fetch(endpointApiPath + '/api/events/' + eventId, {
      method: 'DELETE',
    }).then((res) => {
      console.log(res)
      setPostSend(res.status)
    })
  }

  return (
    <div className='linear-bg-content h-[620px] w-full relative'>
      {loading ? (
        <LoadingHandler />
      ) : (
        <>
          <div className='flex flex-wrap justify-center w-full h-full py-2 rounded-3xl'>
            {error && <ErrorHandler errorMessage={error} />}
            <div className='w-full h-full mx-8 mt-2 '>
              <div className='flex flex-row items-end justify-between h-6 mt-6 mb-4'>
                <span className='flex flex-col w-1/4'>
                  <span className='font-bold text-input-text'>Title</span>
                  <input className='border-[1px] rounded border-input-text h-7' />
                </span>
                <button className='px-8 py-1 border-2 rounded border-[#2A6CD0] text-[#2A6CD0] font-bold cursor-pointer' type='button'>
                  Filters
                </button>
              </div>
              <TableContainer component={Paper} sx={{ maxHeight: 520 }}>
                <Table size='medium' stickyHeader aria-label='simple table'>
                  <TableHead>
                    <TableRow>
                      <TableCell align='left'>Title</TableCell>
                      <TableCell align='left'>Description</TableCell>
                      <TableCell align='center'>Location</TableCell>
                      <TableCell align='center'>Seats</TableCell>
                      <TableCell align='center'>Event Date</TableCell>
                      <TableCell align='center'>Organized By</TableCell>
                      <TableCell align='center'>Status</TableCell>
                      <TableCell align='center'>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody sx={{ maxHeight: 280, overflowX: 'hidden', overflowY: 'auto' }}>
                    {events &&
                      events.map((event, x) => {
                        const getStatus = () => {
                          if (x % 3 == 0)
                            return (
                              <span className='flex items-center justify-center w-20 px-2 rounded-md bg-approveBg text-approveText'>Accepted</span>
                            )
                          if (x % 3 == 1)
                            return (
                              <span className='flex items-center justify-center w-20 px-2 rounded-md bg-pendingBg text-pendingText'>Pending</span>
                            )
                          if (x % 3 == 2)
                            return (
                              <span className='flex items-center justify-center w-20 px-2 rounded-md bg-declineBg text-declineText'>Declined</span>
                            )
                        }
                        return (
                          <TableRow
                            className={`${x % 2 != 0 ? 'bg-table-even-color' : ''}`}
                            key={event.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                            <TableCell align='left' component='th' scope='row'>
                              {event.title}
                            </TableCell>
                            <TableCell align='left'>{event.description}</TableCell>
                            <TableCell align='center'>{event.location}</TableCell>
                            <TableCell align='center'>
                              {event.numberOfSeats <= 0 ? <p className='text-2xl font-medium'>∞</p> : event.numberOfSeats}
                            </TableCell>
                            <TableCell align='center'>{event.endDate}</TableCell>
                            <TableCell align='center'>{event.organizedBy}</TableCell>
                            <TableCell align='center'>{getStatus()}</TableCell>
                            <TableCell align='center' sx={{ minWidth: 100 }}>
                              <span className='flex flex-row gap-2'>
                                <span className='p-1 rounded-md bg-[#39B549] cursor-not-allowed'>
                                  <UploadSVG color={'#fff'} />
                                </span>
                                <span className='p-1 rounded-md bg-[#FFC107] cursor-not-allowed'>
                                  <PenSVG color={'#fff'} />
                                </span>
                                <span className='p-1 rounded-md bg-[#DC3545] cursor-pointer' onClick={() => handlePost(event.id)}>
                                  <TrashSVG color={'#fff'} />
                                </span>
                              </span>
                            </TableCell>
                          </TableRow>
                        )
                      })}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
            {postSend && <span className='px-10 py-1 border-[1px] rounded-xl bg-e-orange text-white'>Error: {postSend}</span>}
          </div>
        </>
      )}
    </div>
  )
}

export default ListOfEventsPage
