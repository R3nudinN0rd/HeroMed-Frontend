import React from 'react'

import OrganisationSVG from '../shared/IconComponents/organisationSVG'
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
      'icon': <OrganisationSVG />,
      'element': <SectionPage />,
    }
  ]
}

export default MenuMapper
