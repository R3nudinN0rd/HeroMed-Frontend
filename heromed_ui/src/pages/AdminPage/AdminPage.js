import React from "react";
import LoadingHandler from "../../common/LoadingHandler";
import ErrorHandler from "../../common/ErrorHandler";
import useAxios from "../../hooks/useAxios";
import EmptyArray from "../../Components/Modals/RelatedDataModals/MicelaneousComponents/EmptyArray";
import CurrentAccounts from "./CurrentAccounts";
import EmployeesWithoutAccounts from "./EmployeesWithoutAccounts";

function AdminPage() {

    return (
        <div className="linear-bg-content h-[750px] w-full relative overflow-hidden bg-blue-200">
            <div className="flex flex-row w-full h-full gap-4">
                <div className="flex flex-col h-full w-1/2">
                    <div className="flex flex-row w-full justify-center">
                        <span className="text-lg text-bold text-center font-medium opacity-50">Active accounts</span>
                    </div>
                    <CurrentAccounts />
                </div>
                <div className="flex flex-col h-full w-1/2">
                <div className="flex flex-row w-full justify-center">
                        <span className="text-lg text-bold text-center font-medium opacity-50">Employees without account</span>
                    </div>
                    <EmployeesWithoutAccounts />
                </div>
            </div>
        </div>
    )
}
export default AdminPage