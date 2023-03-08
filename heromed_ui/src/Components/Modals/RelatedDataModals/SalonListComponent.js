import React from "react";
import ErrorHandler from "../../../common/ErrorHandler";
import LoadingHandler from "../../../common/LoadingHandler";
import useAxios from "../../../hooks/useAxios";
import SalonRowComponent from "./MicelaneousComponents/SalonRowComponent";
import EmptyArray from "./MicelaneousComponents/EmptyArray";

const SalonList = (section) => {
    const { data, loading, error } = useAxios({
        method: 'get',
        url: '/api/salon/section/' + section.sectionId
    })

    return (
        <div className="flex flex-col w-full h-full overflow-y-auto">
            {loading ? (
                <LoadingHandler />
            ) : (
                <>
                    <div className="flex flex-wrap justify-center w-full h-[100px]">
                        {error && (<EmptyArray/>)}
                        {data && data.map((salon) => <SalonRowComponent key={salon.id} rowData={salon}></SalonRowComponent>)}
                    </div>
                </>
            )}
        </div>
    )
}

export default SalonList