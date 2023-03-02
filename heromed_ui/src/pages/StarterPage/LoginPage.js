import React from "react";
import ErrorHandler from "../../common/ErrorHandler";
import LoadingHandler from "../../common/LoadingHandler";

function LoginPage(){
    const requestCode = () => useAxios({
        method:'post',
        url: '/api/sendEmail/verification/send'
    })

    const verifyCode = () =>({
        method:'get',
        url:'/api/sendEmail/verification'
    })

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalBody, setModalBody] = useState();

    const showModal = () =>{
        setIsModalOpen(!isModalOpen);
        // setModalBody(<RegisterBody setIsModalOpen={setIsModalOpen}></RegisterBody>)
    }

    return (
        <div className="flex flex-row w-full h-full">
            <div className="flex flex-col w-2/6 h-full">
                <span className="flex w-full h-full bg-gray-600"/>
            </div>
            <div className="flex flex-col 1/6 h-full">
                <div>
                    Test
                </div>
            </div>
            <div className="flex flex-col 2/6 h-full">
                <span className="flex h-full w-full bg-gray-600"/>
            </div>
        </div>
    )
}

export default LoginPage