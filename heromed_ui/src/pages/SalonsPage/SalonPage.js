import React, {useState} from 'react'
import ErrorHandler from '../../common/ErrorHandler'
import LoadingHandler from '../../common/LoadingHandler'
import useAxios from '../../hooks/useAxios'
import Button from '@mui/material/Button'
import ModalContainer from '../../Components/Modals/ModalContainer'
import SalonBody from '../../Components/Modals/SalonModalBodyAdd'
import add from '../../assets/IconsSvg/vect-icons/add.png'
import SalonCardComponent from '../../Components/Cards/SalonCardComponent'

function SalonsPage(){
    const{data, loading, error} = useAxios({
        method:'get',
        url:'/api/salon',
    })
    

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalBody, setModalBody] = useState();
    
    const showModal =() =>{
      setIsModalOpen(!isModalOpen)
      setModalBody(<SalonBody setIsModalOpen= {setIsModalOpen} ></SalonBody>);
    }

return (
    <div className='linear-bg-content h-[750px] w-full relative overflow-hidden'>
      <div className={isModalOpen?'flex flex-row justify-center hidden':'flex flex-row justify-center'}  >
        <Button size="small" onClick={() => showModal()}>
          <span>
          <img src={add} className='flex w-4 h-4 px-1 py-1'></img>
          </span>
          <b>Add salon</b></Button>
      </div>
        {<ModalContainer isModalOpen={isModalOpen} modalBody={modalBody}></ModalContainer>}
        {/* <SalonBody setIsModalOpen ={isModalAddOpen}></SalonBody> */}
      {loading ? (
        <LoadingHandler />
      ) : (
        <>
        <div className='flex flex-wrap justify-center w-full h-full px-8 py-12 overflow-auto overflow-x-hidden rounded-3xl gap-14'>
            {error && <ErrorHandler errorMessage={error} />}
            {data && data.map((salon) => <SalonCardComponent key={salon.id} cardData={salon}/>)}
          </div>
        </>
      )}
    </div>
)
}

export default SalonsPage