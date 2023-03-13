import React from 'react'
import HeroMed from '../../assets/Logo/HeroMed.png'

const VerifyCode = ({ verifyCode, deleteCookies, setCodeValue }) => {
  return (
    <>
      <div className='flex flex-row justify-start items-start absolute mt-10 ml-10'>
        <img src={HeroMed} className='h-14' alt='logo' />
      </div>
      <div className='flex flex-col w-screen h-screen justify-center items-center bg-gray-900'>
        <div className="flex flex-col leading-5 min-h-[50px] w-[340px] text-ellipsis max-h-[150px] text-description-text font-medium pt-1">
          <span className="text-xl text-bold font-medium text-center text-gray-200">Verify authentication</span>
        </div>
        <div className='flex flex-col mb-4 md:justify-between items-center'>
          <span className='text-sm text-bold text-italic font-medium text-center text-white'>Check your email.</span>
          <span className='text-sm text-bold text-italic font-medium text-center text-white'>You received the authentication code</span>
          <div className='flex flex-col max-h-5 w-96 items-center'>
            <div className='flex flex-row w-40'>
              <input className='border text-center rounded-full w-full py-2 px-3 text-grey-darkest' type='number' name='email' id='email' onChange={(e) => setCodeValue(e.target.value)} required />
            </div>
            <div className='flex flex-row w-60 mt-6 justify-between'>
              <div className='bg-blue-900 hover:bg-green-800 rounded-full py-2 hover:px-10 px-5 text-white duration-500 cursor-pointer' type='submit' onClick={() => verifyCode()}>
                <span className='text-white'>
                  <b>Verify</b>
                </span>
              </div>
              <div className='bg-blue-900 hover:bg-red-800 rounded-full py-2 hover:px-10 px-5 text-white duration-500 cursor-pointer' type='submit' onClick={() => deleteCookies()}>
                <span className='text-white'>
                  <b>Cancel</b>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default VerifyCode