import React from "react";
import LoadingHandler from "../../../common/LoadingHandler";
import useAxios from "../../../hooks/useAxios";
import axios from "axios";
import { Button } from "@mui/material";
import { BiTrash } from 'react-icons/bi';
import { url } from "../../../common/Constants";
import { GiArmorUpgrade, GiArmorDowngrade} from 'react-icons/gi';

function AccountRow({ cardData }) {

    const admin = true;
    const user = false;
    const verificationCode = "";
    const { data, loading, error } = useAxios({
        method: 'get',
        url: '/api/employees/' + cardData.employeeId
    })

    const SetStatus = (adm) => {
        if (adm) return "Admin";
        return "User"
    }

    const deleteAccount = (email) => {
        axios.delete(url + '/api/users/email/' + email, {
            headers: {
                'ContentType': 'application/json'
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

    const setAdmin = (id) => {
        axios.put(url+'/api/users/'+id, {admin, verificationCode},{
            headers:{
                'ContentType': 'application/json'
            }
        })
        .then(response => {
            console.log(response);
            window.location.reload();
        })
     }

     const setUser = (id) => {
        axios.put(url+'/api/users/'+id, {user, verificationCode},{
            headers:{
                'ContentType': 'application/json'
            }
        })
        .then(response => {
            console.log(response);
            window.location.reload();
        })
     }

    return (
        <>
            {loading ? (
                <LoadingHandler />
            ) : (
                <>
                    <div className="flex flex-col bg-white rounded-xl">
                        <div className="flex flex-row h-[50px] w-full">
                            <div className="flex flex-col h-full w-1/4 justify-center">
                                <span className="text-sm text-bold text-center font-medium opacity-50">Employee</span>
                                <span className="text-sm text-bold text-center font-medium">{data.firstName} {data.lastName}</span>
                            </div>
                            <div className="flex flex-col h-full w-1/4 justify-center">
                                <span className="text-sm text-bold text-center font-medium opacity-50">Status</span>
                                <span className="text-sm text-bold text-center font-medium">{SetStatus(cardData.admin)}</span>
                            </div>
                            <div className="flex flex-col h-full w-1/4 justify-center">
                                <span className="text-sm text-bold text-center font-medium opacity-50">Email</span>
                                <span className="text-sm text-bold text-center font-medium">{cardData.email}</span>
                            </div>
                            <div className="flex flex-row h-full w-1/4 justify-center items-center">
                                <div className="flex z-20 h-[40px] w-[40px]">
                                    <Button className="w-full h-full" size="medium" onClick={() => setAdmin(cardData.id)}>
                                        <GiArmorUpgrade className="w-[20px] h-[20px]" color="#000D93"></GiArmorUpgrade>
                                    </Button>
                                </div>
                                <div className="flex z-20 h-[40px] w-[40px]">
                                    <Button className="w-full h-full" size='medium' onClick={() => setUser(cardData.id)}>
                                        <GiArmorDowngrade className="w-[20px] h-[20px]" color="#931A00"></GiArmorDowngrade>
                                    </Button>
                                </div>
                                <div className="flex z-20 h-[40px] w-[40px]">
                                    <Button className="w-full h-full" size="medium" onClick={() => deleteAccount(cardData.email)}>
                                        <BiTrash className="w-[20px] h-[20px]" color="#931A00"></BiTrash>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}
export default AccountRow