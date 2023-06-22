import React from 'react';
import LoadingHandler from '../../../common/LoadingHandler';
import useAxios from '../../../hooks/useAxios';

const StatisticsEnrolledMonthLabel = ({month}) => {
    console.log(month);
    const {data, loading, error} = useAxios({
        method:'get',
        url:'/api/statistics/dischargeMonth?month='+month
    });
    return(
        <div>
        {loading?(
            <LoadingHandler/>
        ):(
            <label className="mb-2 uppercase tracking-wide font-bold text-lg text-grey-darkest">Number of patients: {data.patientsNumber}</label>
        )}
        </div>
    )
}
export default StatisticsEnrolledMonthLabel