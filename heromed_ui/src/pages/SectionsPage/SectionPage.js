import React, { useState } from 'react'
import ErrorHandler from '../../common/ErrorHandler'
import LoadingHandler from '../../common/LoadingHandler'
import SectionCardComponent from '../../Components/Cards/SectionCardComponent'
import useAxios from '../../hooks/useAxios'
import {MdAdd} from 'react-icons/md';
import ModalContainer from '../../Components/Modals/ModalContainer'
import SectionBody from '../../Components/Modals/SectionModalBodyAdd'
import EmptyArray from '../../Components/Modals/RelatedDataModals/MicelaneousComponents/EmptyArray'

function SectionsPage() { 
  const { data, loading, error } = useAxios({
    method: 'get',
    url: '/api/sections',
  })

const [isModalOpen, setIsModalOpen] = useState(false);
const [modalBody, setModalBody] = useState();

const showModal =()=>{
  setIsModalOpen(!isModalOpen);
  setModalBody(<SectionBody setIsModalOpen= {setIsModalOpen} ></SectionBody>);
}

  return (
    <div className='linear-bg-content rounded-tl-[30px] rounded-bl-[30px] h-[750px] w-full relative overflow-hidden bg-blue-200'>
      <div className={isModalOpen?'flex-row justify-center hidden':'flex flex-row justify-center'}  >
        <button className='bg-blue-500 hover:bg-green-500 font-bold py-2 rounded focus:outline-none focus:shadow-outline xl:hover:px-96 md:hover:px-40 xs:hover:px-20 hover:py-1 px-5 text-white duration-500' onClick={() => showModal()}>
          <span className='flex flex-row '>
          <MdAdd className='w-6 h-6 mx-1' color='#FFFFFF'></MdAdd>
          <b>Add section</b>
          </span>
          </button>
      </div>
      <ModalContainer isModalOpen={isModalOpen} modalBody={modalBody}></ModalContainer>

      {loading ? (
        <LoadingHandler />
      ) : (
        <>
          <div className='flex flex-wrap justify-center w-full h-full px-8 py-12 overflow-auto overflow-x-hidden rounded-3xl gap-14'>
            {error && (<EmptyArray/>)}
            {data && data.map((section) => <SectionCardComponent key={section.id} cardData={section} setIsModalOpen={setIsModalOpen} setModalBody={setModalBody} isModalOpen={isModalOpen}/>)}
          </div>
          
        </>
      )}
    </div>
  )
}

export default SectionsPage
