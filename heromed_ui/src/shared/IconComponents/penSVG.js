import React from 'react'

function PenSVG({ color }) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'>
      <path
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M4.741 13.605l-3.407 1.728 1.728-3.41 10.04-10.041c.502-.502 1.127-.696 1.39-.428l.721.72c.267.264.074.889-.428 1.39L4.741 13.606zM14.338 4.028l-1.69-1.69M13.427 4.939l-1.69-1.69M4.906 13.444l-1.683-1.683'
      ></path>
    </svg>
  )
}

export default PenSVG
