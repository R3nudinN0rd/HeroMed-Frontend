import React from "react";
const LargeTextModal = ({ text, setIsModalOpen }) => {
    const handleClose = () => {
        setIsModalOpen();
    }

    return (
        <div className="flex flex-col w-full h-3/4 items-center bg-teal-lighter">
            <div className="w-2/5 max-h-[600px] bg-white rounded` shadow-lg p-8 overflow-y-scroll md:w-3/5 md:mx-auto">
                <div className="flex w-full flex-col mb-4 md:justify between">
                    <span className="mb-2 upercase tracking-tab font-bold text-lg text-gray-darkest">Issue details</span>
                    <p className="text-grey-darkest ">
                        {text}
                    </p>
                </div>
                <div className="flex justify-center">
                <button className='bg-blue-500 hover:bg-red-700 font-bold py-2 rounded focus:outline-none focus:shadow-outline hover:px-6 px-5 text-white duration-500' onClick={handleClose}>
                    Close
                </button>
            </div>
            </div>
            
        </div>
    )
}

export default LargeTextModal