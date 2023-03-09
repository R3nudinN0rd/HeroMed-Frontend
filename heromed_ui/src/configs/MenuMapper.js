import React from 'react'

import OrganisationSVG from '../shared/IconComponents/organisationSVG'
import SalonSVG from '../shared/IconComponents/salonSVG'
import PatientSVG from '../shared/IconComponents/patientSVG'
import EmployeeSVG from '../shared/IconComponents/employeeSVG'
import SectionPage from '../pages/SectionsPage/SectionPage'
import SalonsPage from '../pages/SalonsPage/SalonPage'
import EmployeesPage from '../pages/EmployeePage/EmployeePage'
import PatientPage from '../pages/PatientPage/PatientPage'
import {HiOutlineUserGroup} from 'react-icons/hi'
import AssignementsPage from '../pages/AssignementsPage/AssignementsPage'
function MenuMapper() {
  return [
    {
      'name': 'Sections',
      'url': '/sections',
      'icon': <OrganisationSVG />,
      'element': <SectionPage />,
    },
    {
      'name':'Salon',
      'url':'/salon',
      'icon':<SalonSVG/>,
      'element':<SalonsPage/>
    },
    {
      'name':'Employees',
      'url':'/employee',
      'icon':<EmployeeSVG/>,
      'element':<EmployeesPage/>
    },
    {
      'name':'Patients',
      'url':'/patient',
      'icon': <PatientSVG/>,
      'element': <PatientPage/>
    },
    {
      'name':'Assignements',
      'url':'/assignements',
      'icon':<HiOutlineUserGroup size={24}/>,
      'element':<AssignementsPage/>
    }
  ]
}

export default MenuMapper
