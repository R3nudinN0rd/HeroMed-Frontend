import React from 'react'
import HeaderComponent from '../Header/HeaderComponent'
import { Navigate, Route, Routes, useLocation, useParams } from 'react-router-dom'
import MenuMapper from '../../configs/MenuMapper'
import capitalizeFirstLetter from '../../utils/Helpers'
import ServicesMenuMapper from '../../configs/ServicesMenuMapper'

function ContentComponent() {
  const location = useLocation()
  const componentTitle = capitalizeFirstLetter(location.pathname.slice(1).replaceAll('-', ' '))
  const MenuJson = MenuMapper()
  const ServicesMenu = ServicesMenuMapper()
  return (
    <div className='flex flex-col items-start justify-start flex-auto w-9/12 h-full py-6 pl-2 pr-2 sm:w-6/12 xl:w-9/12'>
      <HeaderComponent/>
      <h2 className='pt-10 text-3xl font-semibold'>{componentTitle}</h2>
      <div className=' mt-2 h-4/5 w-full  '>
        <Routes>
          {MenuJson.map((item, x) => (
            <Route path={item.url} component={'TBI'} key={x} element={item.element}>
              {item.name}
            </Route>
          ))}
          {ServicesMenu.map((item, x) => (
            <Route path={item.url} component={'TBI'} key={x} element={item.element}>
              {item.name}
            </Route>
          ))}
          <Route path='*' element={<Navigate to='/sections' replace />} />
        </Routes>
      </div>
    </div>
  )
}

export default ContentComponent
