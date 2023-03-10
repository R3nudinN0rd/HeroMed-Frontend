import React from "react";
import LoadingHandler from "../../../common/LoadingHandler";
import axios from "axios";
import { Button } from "@mui/material";
import { url } from "../../../common/Constants";
import {HiUserAdd} from 'react-icons/hi'
function EmployeeRow({cardData}){

    const AddAccount = (email, verificationCode, employeeId) => {
        axios.post(url+'/api/users', {email, verificationCode, employeeId},{
            headers:{
                'ContentType':'application/json'
            }
        })
        .then(response => {
            console.log(response);
            window.location.reload();
        })
        .catch(error =>{
            console.log(error);
        })
    }

    return(
        <>
        <div className="flex flex-col bg-white rounded-xl">
            <div className="flex flex-row h-[50px] w-full">
                <div className="flex flex-col w-1/3 justify-center">
                    <span className="text-sm text-bold text-center font-medium opacity-50">Employee name</span>
                    <span className="text-sm text-bold text-center font-medium">{cardData.firstName} {cardData.lastName}</span>
                </div>
                <div className="flex flex-col w-1/3 justify-center">
                    <span className="text-sm text-bold text-center font-medium opacity-50">Employe email</span>
                    <span className="text-sm text-bold text-center font-medium">{cardData.email}</span>    
                </div>
                <div className="flex flex-col w-1/3 justify-center">
                    <div className="flex z-20 h-[40px] w-[40px]">
                        <Button className="w-full h-full" size="medium" onClick={() => AddAccount(cardData.email, "", cardData.id)}>
                            <HiUserAdd className="w-[20px] h-[20px]" color="#000D93"></HiUserAdd>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default EmployeeRow