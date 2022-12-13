import React from 'react'
import useAxios from '../../hooks/useAxios'

function ParticipantsComponent({ eventData, handleCloseModal }) {
  const participants = eventData.participants
  return (
    <>
      <div className='absolute top-0 left-0 z-20 flex items-center justify-center w-full h-full bg-opacity-60 bg-e-dark'>
        <div className='w-10/12 overflow-hidden bg-white h-5/6'>
          <span className='relative flex justify-end pt-3 pr-5 cursor-pointer' onClick={handleCloseModal}>
            X
          </span>
          <div className='flex flex-col items-center justify-center pt-2 px-14'>
            <p className='text-3xl font-bold text-center text-e-orange'>{eventData.title}</p>
            <div className='flex justify-between w-full pt-2'>
              <span className='flex flex-col w-40'>
                <span className=' text-input-text'>Filter by name</span>
                <input className='border-2 rounded border-input-text' />
              </span>
              <span className='flex flex-col w-40'>
                <span className=' text-input-text'>Filter by role</span>
                <input className='border-2 rounded border-input-text' />
              </span>
              <span className='flex flex-col w-40 mr-10'>
                <span className=' text-input-text'>Filter by Status</span>
                <input className='border-2 rounded border-input-text' />
              </span>
            </div>
            <table className='flex flex-col w-full mt-4table-shadow'>
              <thead>
                <tr className='flex justify-around w-full p-2 border-2 border-white table-shadow'>
                  <th className='flex justify-start pl-6 w-60'>Name</th>
                  <th className='flex justify-start pl-11 w-60'>Role</th>
                  <th className='flex justify-center pl-2 w-60'>Status</th>
                </tr>
              </thead>
              <tbody className='overflow-x-hidden overflow-y-auto max-h-[280px]'>
                {!participants.length && (
                  <div className='flex items-center justify-center w-full pt-10 text-xl font-semibold'>
                    There are no participants for this event yet!
                  </div>
                )}
                {participants.map((user, x) => {
                  const getStatus = () => {
                    if (x % 3 == 0)
                      return <span className='flex items-center justify-center w-24 px-2 rounded-md bg-approveBg text-approveText'>Accepted</span>
                    if (x % 3 == 1)
                      return <span className='flex items-center justify-center w-24 px-2 rounded-md bg-pendingBg text-pendingText'>Pending</span>
                    if (x % 3 == 2)
                      return <span className='flex items-center justify-center w-24 px-2 rounded-md bg-declineBg text-declineText'>Pending</span>
                  }
                  if (x % 2 != 0)
                    return (
                      <tr className='flex items-center w-full pb-1 pl-8 my-3 h-11 bg-table-even-color' key={user.id}>
                        <td className='flex items-center justify-start w-1/3'>{`${user.firstName} ${user.lastName}`}</td>
                        <td className='flex items-center justify-start w-1/3 pl-8'>{user.role}</td>
                        <td className='flex items-center justify-center w-1/3 pl-6'>{getStatus()}</td>
                      </tr>
                    )

                  return (
                    <tr className='flex items-center w-full pb-1 pl-8 my-3 h-11' key={user.id}>
                      <td className='flex items-center justify-start w-1/3 '>{`${user.firstName} ${user.lastName}`}</td>
                      <td className='flex items-center justify-start w-1/3 pl-8'>{user.role}</td>
                      <td className='flex items-center justify-center w-1/3 pl-6'>{getStatus()}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default ParticipantsComponent
