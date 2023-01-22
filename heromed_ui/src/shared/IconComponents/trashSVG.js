import React from 'react'

function TrashSVG({ color }) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'>
      <path
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M13.174 2.826H2.826V15h10.348V2.826zM10.739 1H5.261v1.826h5.478V1zM1 2.826h14M5.26 5.26v7M8 5.26v7M10.74 4.957v7'
      ></path>
    </svg>
  )
}

export default TrashSVG
