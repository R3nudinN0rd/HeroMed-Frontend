import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useCookies } from 'react-cookie';
import useAxios from '../../hooks/useAxios';
import LoadingHandler from '../../common/LoadingHandler'

function HeaderComponent() {
  const [headerTitle, SetHeaderTitle] = useState('Loading...')
  const [cookies,setCookies,removeCookie] = useCookies(["verification"]);

  const { data, loading } = useAxios({
    method: 'get',
    url: `/api/employees/emailEmployee/${cookies['userEmail']}`
  })

  const deleteCookies = () => {
    removeCookie("emailSent");
    removeCookie("loggedIn");
    removeCookie("userEmail");
    removeCookie("state");
    window.location.reload();
  }
  return (
    <>
      {loading ? (
        <LoadingHandler />
      ) : (
        <>
          <div className='flex flex-row w-full items-center h-14 mr-96'>
            <span className='flex flex-col items px-3 font-semibold text-white border-2 rounded-lg border-blue-200 bg-blue-500 h-9 min-w-[600px] mr-96'>
              <p className='truncate'>Hello, {data.firstName} {data.lastName}</p>
            </span>
            <div className='bg-blue-500 hover:bg-red-600 rounded-xl h-10 py-2 hover:px-10 px-5 text-white duration-500 cursor-pointer select-none justify-center'onClick={deleteCookies}>
              <span className='text-white'><b>LogOut</b></span>
            </div>
          </div>
        </>)}
    </>
  )
}

export default HeaderComponent
