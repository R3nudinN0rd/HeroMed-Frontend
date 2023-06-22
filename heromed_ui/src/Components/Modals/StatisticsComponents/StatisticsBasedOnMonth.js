import React, {useEffect, useState} from 'react';
import StatisticsEnrolledMonthLabel from './StatisticsEnrolledMonthLabel';
import StatisticsDischargeMonthLabel from './StatisticsDischargeMonthLabel';
const StatisticsBasedOnMonth = ({option}) =>{

    const [monthValue, setMonthValue] = useState(1);

    const handleChange = (event) =>{
        setMonthValue(event.target.value);
    }

    return(
        <div className='flex flex-col w-full h-full'>
            <div className='flex flex-row'>
                <label className="mb-2 uppercase tracking-wide font-bold text-lg text-grey-darkest" htmlFor="statistic_month">Month</label>
                <input className="border rounded-full py-2 px-3 text-grey-darkest" type="number" min="1" max="12" name="month" id="statistics-month" onChange={handleChange} required/>
            </div>
            <div className='flex flex-row'>
                {option==1 && (<StatisticsEnrolledMonthLabel key={monthValue} month={monthValue}/>)}
                {option==2 && (<StatisticsDischargeMonthLabel key={monthValue} month={monthValue}/>)}
            </div>
        </div>
    )
}
export default StatisticsBasedOnMonth