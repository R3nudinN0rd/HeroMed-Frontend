import React from "react";
const LargeTextModal = ({ text, setIsModalOpen }) => {
    const handleClose = () => {
        setIsModalOpen();
    }

    return (
        <div className="flex flex-col w-full h-3/4 items-center bg-teal-lighter">
            <div className="w-2/5 max-h-[500px] min-h-[200px] -mt-32 bg-white rounded shadow-lg p-8 overflow-x-hidden md:w-3/5 md:mx-auto">
                <div className="flex w-full flex-col mb-4 md:justify-between overflow-y">
                    <span className="mb-2 upercase tracking-tab font-bold text-lg text-gray-darkest">Issue details</span>
                    <p className="text-grey-darkest break-words">
                        {text}
                    </p>
                </div>

            </div>
            <div className="flex flex-row w-2/5 max-h-5 min-h-5 bg-white rounded shadow-lg items-center p-8 overflow-y-hidden overflow-x-hidden md:w-3/5 md:mx-auto justify-center">
                <button className='bg-blue-500 hover:bg-red-700 font-bold py-2 rounded focus:outline-none focus:shadow-outline hover:px-10 px-5 text-white duration-500' onClick={handleClose}>
                    Close
                </button>
            </div>
        </div>
    )
}

export default LargeTextModal