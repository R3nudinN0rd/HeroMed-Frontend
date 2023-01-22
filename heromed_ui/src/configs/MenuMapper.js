import React from 'react'

import CalendarSVG from '../shared/IconComponents/calendarSVG'
import MyEventsSVG from '../shared/IconComponents/myEventsSVG'
import HistoryEventSVG from '../shared/IconComponents/pastEventsSVG'
import CreateEventSVG from '../shared/IconComponents/createEventSVG'
import ListOfEventsSVG from '../shared/IconComponents/listOfEventsSVG'
import AdminSVG from '../shared/IconComponents/adminSVG'
import SectionPage from '../pages/SectionsPage/SectionPage'

function MenuMapper() {
  return [
    {
      'name': 'Sections',
      'url': '/sections',
      'icon': <CalendarSVG />,
      'element': <SectionPage />,
    }
  ]
}

export default MenuMapper
