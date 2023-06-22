import React,{useState} from "react"
import StatisticsBasedOnMonth from "./StatisticsComponents/StatisticsBasedOnMonth";
const StatisticsModalBody = (props) => {

    const[optionSelected, setOptionSelected] = useState();

    const handleClose = () =>{
        props.setIsModalOpen()
      }
    

    return(
    <div className="flex flex-col bg-white rounded shadow-lg p-8 m-4">
        <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
            <div className="flex flex-col h-full w-full">
                <div className="flex flex-row w-full justify-center">
                    <label className="mb-2 uppercase tracking-wide font-bold text-lg text-grey-darkest">Statistics</label>
                </div>
                <div className="flex flex-row">
                    <label className="mb-2 uppercase tracking-wide font-bold text-lg text-grey-darkest">What statistics do you want to check?</label>
                </div>
                <div className="flex flex-row mt-3" onClick={() => setOptionSelected(1)}>
                    <div className="flex w-full bg-blue-300 rounded cursor-pointer justify-center items-center">
                        <span className="mb-2 uppercase tracking-wide text-center font-bold text-lg text-grey-darkest select-none">Enrolled patients by month</span>
                    </div>
                </div>
                <div className="flex flex-row mt-3" onClick={() => setOptionSelected(2)}>
                    <div className="flex w-full bg-blue-300 rounded cursor-pointer justify-center items-center">
                        <span className="mb-2 uppercase tracking-wide text-center font-bold text-lg text-grey-darkest select-none">Discharged patients by month</span>
                    </div>
                </div>
               
            </div>
        </div>
        {optionSelected == 1 && (<StatisticsBasedOnMonth option={optionSelected}/>)}
        {optionSelected == 2 && (<StatisticsBasedOnMonth option={optionSelected}/>)}
        <button className='bg-blue-500 hover:bg-red-700 font-bold py-2 rounded focus:outline-none focus:shadow-outline hover:px-6 px-5 text-white duration-500' onClick={handleClose}>
             Close
        </button>
    </div>
    );
}
export default StatisticsModalBody