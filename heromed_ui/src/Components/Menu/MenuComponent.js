import React, { useState } from 'react'
import HeroMed from '../../assets/Logo/HeroMed.png'
import { BrowserRouter as Router, NavLink } from 'react-router-dom'

import MenuMapper from '../../configs/MenuMapper'
import { userRoleForDataBase } from '../../configs/endpointsConfig'

function MenuComponent() {
  const MenuJson = MenuMapper()
  return (
    <div className='flex items-start justify-start flex-auto w-3/12 h-full py-6 pl-10 pr-2'>
      <div className='flex flex-col items-start justify-start flex-auto w-3/12'>
        <img src={HeroMed} className='h-14' alt='logo' />
        <h2 className='pt-10 text-3xl font-semibold underline'>Menu</h2>
        <div className='flex flex-col justify-start h-full pt-14'>
          {MenuJson.map((item, key) => {
            if (item.name == 'Admin' && userRoleForDataBase == 'user') return
            return (
              <NavLink to={item.url} key={key}>
                {({ isActive }) => (
                  <span className='flex items-center py-1 cursor-pointer w-60 h-14 hover:bg-input-text hover:bg-opacity-10 hover:rounded-2xl'>
                    <div className='flex justify-start w-4/12 pl-2'>
                      <div
                        className={
                          isActive
                            ? 'flex items-center justify-center w-10 h-10 bg-blue-400 rounded-xl'
                            : 'flex items-center justify-center w-10 h-10 bg-dark-blue rounded-xl'
                        }
                      >
                        <span className='text-white scale-110'>{item.icon}</span>
                      </div>
                    </div>
                    <span className='w-8/12 font-bold '>{item.name}</span>
                  </span>
                )}
              </NavLink>
              
            )
          })}
        </div>
      </div>
      <span className='border-r-2 border-r-gray-border h-[90%]'></span>
    </div>
  )
}

export default MenuComponent
