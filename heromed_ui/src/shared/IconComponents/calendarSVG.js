import * as React from 'react'

const CalendarSVG = (props) => (
  <svg width={20} height={20} fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M4.13 2.565H1V19h18V2.565h-3.13' stroke='#fff' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M6.478 1H4.13v3.13h2.348V1ZM15.87 1h-2.348v3.13h2.347V1ZM6.478 2.565h7.044M1 6.478h18M5.696 8.044v9.39M10 8.044v9.39M14.304 8.044v9.39M2.565 9.609h14.87M2.565 12.739h14.87M2.565 15.87h14.87'
      stroke='#fff'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export default CalendarSVG
