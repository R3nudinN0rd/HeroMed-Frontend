import React, { useEffect, useState } from 'react'

function HeaderComponent() {
  
  const [headerTitle, SetHeaderTitle] = useState('Loading')

  useEffect(() => {
      SetHeaderTitle("Hello there!")
    
  })

  return (
    <div className='flex flex-row w-full items-center cursor-pointer h-14 mr-96'>
      <span className='flex items px-3 font-semibold text-white border-2 rounded-lg border-blue-200 bg-blue-500 h-9 min-w-[600px] mr-96'>
        <p className='truncate'>{headerTitle}</p>
      </span>
    </div>
  )
}

export default HeaderComponent
