import React from 'react'

function UploadSVG({ color }) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'>
      <path stroke='#fff' strokeLinecap='round' strokeLinejoin='round' d='M10.738 10.74v1.216H5.26V10.74'></path>
      <path
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M15 15H1v-4.26h4.26v1.216h5.479V10.74h4.26V15zM8.304 1v7.609M5.26 4.043L8.304 1l3.043 3.043M1 10.74l2.435-2.436h2.13M15 10.74l-2.435-2.436h-1.521'
      ></path>
    </svg>
  )
}
export default UploadSVG
