import React, { useEffect, useState } from 'react'
import useAxios from '../../hooks/useAxios'

function HeaderComponent() {
  var options = { year: 'numeric', month: 'short', day: 'numeric' }

  const { data, loading, error } = useAxios({
    method: 'get',
    url: '/api/events',
  })
  const [headerTitle, SetHeaderTitle] = useState('Loading')

  useEffect(() => {
    if (data !== null) {
      const computeStartDate = new Date(data[0].startDate).toLocaleDateString('en-GB', options)
      const hour = '00:00'
      const title = data[0].title

      const computeHeaderTitle = `( ${computeStartDate} - ${hour} ) ${title}`
      SetHeaderTitle(computeHeaderTitle)
    }
  }, [data])

  return (
    <div className='flex items-center justify-center cursor-pointer h-14 w-fit '>
      <p className='mr-4 font-semibold min-w-[100px]'>Next Event:</p>
      <span className='flex items-center px-3 font-semibold text-white border-2 rounded-lg border-e-orange bg-e-orange h-9 min-w-[600px]  '>
        <p className='truncate'>{headerTitle}</p>
      </span>
    </div>
  )
}

export default HeaderComponent
