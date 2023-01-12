import React, { useEffect, useState } from 'react'
import ErrorHandler from '../../common/ErrorHandler'
import LoadingHandler from '../../common/LoadingHandler'
import SectionCardComponent from '../../Components/Cards/SectionCardComponent'
import add from '../../assets/IconsSvg/vect-icons/add.png'
import useAxios from '../../hooks/useAxios'
import Button from '@mui/material/Button';

function SectionsPage() {
  const { data, res, loading, error } = useAxios({
    method: 'get',
    url: '/api/sections',
  })


  return (
    <div className='linear-bg-content h-[750px] w-full relative'>
      <div className='flex flex-row justify-center' id='create-section-button' >
        <Button size="small">
          <span>
          <img src={add} className='flex w-4 h-4 px-1 py-1'></img>
          </span>
          <b>Add section</b></Button>
      </div>
      {loading ? (
        <LoadingHandler />
      ) : (
        <>
          <div className='flex flex-wrap justify-center w-full h-full px-8 py-12 overflow-auto overflow-x-hidden rounded-3xl gap-14'>
            {error && <ErrorHandler errorMessage={error} />}
            {data && data.map((section) => <SectionCardComponent key={section.id} cardData={section}/>)}
          </div>
          
        </>
      )}
    </div>
  )
}

export default SectionsPage
