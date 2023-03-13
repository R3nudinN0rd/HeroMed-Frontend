import React from "react";
import DischargePage from "../pages/ServicePages/DischargePage";
import {HiOutlineDocumentReport, HiDocumentReport} from "react-icons/hi";
import EnrolledPage from "../pages/ServicePages/EnrolledPage";
function ServicesMenuMapper(){
    return [
        {
            'name':'Discharge report',
            'url':'/discharge',
            'icon': <HiOutlineDocumentReport size={24}/>,
            'element': <DischargePage/>
        },
        {
            'name':'Enrolled report',
            'url':'/enrolled',
            'icon': <HiDocumentReport size={24}/>,
            'element': <EnrolledPage/>
        }
    ]
}

export default ServicesMenuMapper