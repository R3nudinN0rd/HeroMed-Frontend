import React, { useEffect, useState } from 'react'
import { endpointStatusCodes } from '../configs/endpointsStatusCodes'
function ErrorHandler({ errorMessage }) {
  const [errorContent, setErrorContent] = useState({})

  const {
    response: { status },
  } = errorMessage

  useEffect(() => {
    computeErrorContent()
  }, [])

  const computeErrorContent = () => {
    const errorJson = endpointStatusCodes[status]

    var statusCode = null
    var shortMessage = null
    var largeMessage = null

    if (errorJson === undefined) {
      statusCode = 'Error'
      shortMessage = 'HTTP Status code doesn`t exist'
      largeMessage = ''
    } else {
      statusCode = status
      shortMessage = errorJson.short
      largeMessage = errorJson.large
    }

    const errorObject = {
      statusCode: statusCode,
      shortMessage: shortMessage,
      largeMessage: largeMessage,
    }
    setErrorContent(errorObject)
  }

  return (
    <div className='flex flex-col items-center justify-start'>
      <span className='mb-2 font-black text-9xl text-e-orange'>{errorContent.statusCode}</span>
      <span className='pb-6 text-4xl font-semibold text-e-dark'>{errorContent.shortMessage}</span>
      <span className='w-5/6 text-base font-medium text-center break-words text-e-dark'>{errorContent.largeMessage}</span>
    </div>
  )
}

export default ErrorHandler
