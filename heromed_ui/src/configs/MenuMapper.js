import React from 'react'

import OrganisationSVG from '../shared/IconComponents/organisationSVG'
import SalonSVG from '../shared/IconComponents/salonSVG'
import HistoryEventSVG from '../shared/IconComponents/pastEventsSVG'
import CreateEventSVG from '../shared/IconComponents/createEventSVG'
import ListOfEventsSVG from '../shared/IconComponents/listOfEventsSVG'
import AdminSVG from '../shared/IconComponents/adminSVG'
import SectionPage from '../pages/SectionsPage/SectionPage'
import SalonsPage from '../pages/SalonsPage/SalonPage'

function MenuMapper() {
  return [
    {
      'name': 'Sections',
      'url': '/sections',
      'icon': <OrganisationSVG />,
      'element': <SectionPage />,
    },
    {
      'name':'Salons',
      'url':'/salon',
      'icon':<SalonSVG/>,
      'element':<SalonsPage/>
    }
  ]
}

export default MenuMapper
