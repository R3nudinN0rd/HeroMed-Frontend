import React, { useState } from "react";
import useAxios from "../../hooks/useAxios";
import axios from 'axios';
import ModalContainer from "../Modals/ModalContainer";
import { useCookies } from "react-cookie";
import { BiTrash } from 'react-icons/bi';
import { AiFillEdit } from 'react-icons/ai';
import Button from '@mui/material/Button';
import SectionTitle from "./MicelaneousComponents/SectionTitleForCard";
import JobTitle from "./MicelaneousComponents/JobTitleForCard";
import HeromedEmployeeImagePlaceholder from '../../assets/Images/HeromedEmployeeImagePlaceholder.jpg'
import EmployeeBodyUpdate from '../Modals/EmployeeModalBodyUpdate';
import SalonBodyUpdate from '../Modals/SalonModalBodyUpdate';
import {url} from '../../common/Constants'

function EmployeeCardComponent({ cardData }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalBody, setModalBody] = useState();
    const [cookies, setCookies, removeCookie] = useCookies(["verification"]);

    const employmentDate = new Date(cardData.employmentDate);
    const dateString = employmentDate.getDate() + "-" + (employmentDate.getMonth()+1) + "-" + employmentDate.getFullYear();
    const showModal = () => {
        setIsModalOpen(!isModalOpen);
        setModalBody(<EmployeeBodyUpdate setIsModalOpen = {setIsModalOpen} cardData={cardData}></EmployeeBodyUpdate>)
    }

    const deleteCookies = () => {
        removeCookie("emailSent");
        removeCookie("loggedIn");
        removeCookie("userEmail");
        removeCookie("state");
        removeCookie("admin");
    }
    const deleteEntry = () => {
        axios.delete(url+'/api/employees/id/'+cardData.id, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                console.log(response);
                window.location.reload(false);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const deleteRelations = () => {
        if(cardData.email == cookies["userEmail"]){
            deleteCookies();
        }
        axios.delete(url+'/api/relation/employee/id/' + cardData.id,{
            headers:{
                'ContentType': 'application/json'
            }
        })
        .then(response => {
            console.log(response);
            deleteEntry()
        })
        .catch(error => {
            console.log(error);
        })
    }
    
    return (
        
        <>
            <div className="event-card-container min-w-[430px] min-h-[350px] max-w-[430px] max-h-[350px] rounded-[10px]">
                <div className="relative flex h-20 w-[40px] spaxe-x-4 float-right mr-20 z-40">
                    <div className="flex z-20 h-[40px] w-[40px]">
                        <Button className="w-full h-full" size='medium' onClick={() => showModal()}>
                            <AiFillEdit className="w-[20px] h-[20px]" color="#000D93"></AiFillEdit>
                        </Button>
                    </div>
                    <div className="flex z-20 h-[40px] w-[40px]">
                        <Button className="w-full h-full" size="medium" onClick={() => deleteRelations()}>
                            <BiTrash className="w-[20px] h-[20px]" color="#931A00"></BiTrash>
                        </Button>
                    </div>
                </div>
                <div className="relative h-[150px] w-full group">
                    <img src={HeromedEmployeeImagePlaceholder} className="absolute top-0 right-0 w-full h-full rounded-tl-[10px] rounded-tr-[10px] overflow-hidden duration-700 group-hover:scale-125 group-hover:z-30  group-hover:h-48" />
                    <div className="z-10 flex flex-col justify-between h-full group-hover:opacity-0 duration-700">
                        <div className="z-10 flex flex-col items-end pt-2 pr-2"></div>
                        <span className="absolute bottom-0 z-10 w-full h-16 dark-to-transparent-card"></span>
                        <span className="z-10 flex items-center justify-center h-10 mx-8">
                            <span className="mb-1 font-normal leading-none text-center text-white">Name: {cardData.firstName} {cardData.lastName}</span>
                        </span>
                    </div>
                </div>
                <div className="relative h-[200px] w-full flex">
                    <div className="flex flex-col w-4/12 h-full mt-1 ml-1 mr-2">
                        <div className="flex flex-col pt-1">
                            <span className="text-sm text-bold font-medium opacity-50">Section</span>
                            <SectionTitle sectionId={cardData.sectionId}/>
                        </div>
                        <div className="flex flex-col mt-1">
                            <span className="text-sm text-bold font-medium opacity-50">Role</span>
                            <JobTitle jobId={cardData.jobId}/>
                        </div>

                        <div className="flex flex-col pt-1">
                            <span className="text-sm text-bold font-medium opacity-50">Employee from</span>
                            <span className="text-center"> {dateString}</span>
                        </div>
                    </div>
                    <span className='border-r-[1px] my-4 border-gray-border'></span>
                    <div className="flex flex-col w-3/5 h-full px-2 pt-2">
                        <div className="leading-5 min-h-[50px] w-[240px] text-ellipsis max-h-[150px] overflow-hidden text-description-text font-medium flex flex-col pt-1">
                            <span className="text-lg text-bold font-medium text-center"> Contact </span>
                        </div>
                        <div className="flex flex-col mt-1">
                            <span className="text-sm text-bold font-medium opacity-50">Phone number</span>
                            <span className="text-center">{cardData.phoneNumber}</span>
                        </div>
                        <div className="flex flex-col mt-1">
                            <span className="text-sm text-bold font-medium opacity-50">Email</span>
                            <span className="text-center">{cardData.email}</span>
                        </div>
                    </div>
                </div>
                
            </div>
            <ModalContainer isModalOpen={isModalOpen} modalBody={modalBody}></ModalContainer>
        </>
        )}
  
export default EmployeeCardComponent

