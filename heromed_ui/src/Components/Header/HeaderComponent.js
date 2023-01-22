import React, { useEffect, useState } from 'react'
import useAxios from '../../hooks/useAxios'

function HeaderComponent() {
  
  const [headerTitle, SetHeaderTitle] = useState('Loading')

  useEffect(() => {
      SetHeaderTitle("Hello there!")
    
  })

  return (
    <div className='flex items-center justify-center cursor-pointer h-14 w-fit '>
      <span className='flex items-center px-3 font-semibold text-white border-2 rounded-lg border-e-orange bg-e-orange h-9 min-w-[600px]  '>
        <p className='truncate'>{headerTitle}</p>
      </span>
    </div>
  )
}

export default HeaderComponent
