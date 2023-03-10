import React from "react";
import ErrorHandler from "../../common/ErrorHandler";
import LoadingHandler from "../../common/LoadingHandler";
import EmptyArray from "../../Components/Modals/RelatedDataModals/MicelaneousComponents/EmptyArray";
import useAxios from "../../hooks/useAxios";
import AccountRow from "./MicelaneousComponents/AccountRow";

function CurrentAccounts(){

    const {data, loading, error} = useAxios({
        method:'get',
        url:'/api/users'
    })

    return(
        <>
            <div className="flex flex-col h-full w-full overflow-hidden bg-blue-100">
                    {loading?(
                        <LoadingHandler/>
                    ):(
                        <>
                            <div className="flex flex-col justify-center w-full h-full overflow-y-auto gap-3">
                                {error && (<EmptyArray/>)}
                                {data && data.map((account)=> <AccountRow key={account.id} cardData={account}/>)}
                            </div>
                        </>
                    )}
            </div>
        </>
    )
}
export default CurrentAccounts