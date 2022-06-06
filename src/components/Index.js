import React, { useContext, useEffect, useState } from "react";
import { FilterContext } from "../contexts/FilterContext";
import BarChart from "./BarChart";
import axios from "../axiosConfig";
import { useQuery } from "react-query";
import LineChart from "./LineChart";
import DoughnutChartRegion from "./DoughnutChartRegion";
import PestelRaderChart from "./PestelRaderChart";
import DoughnutChartTopic from "./DoughnutChartTopic";
import BarChartLikelihood from "./BarChartLikelihood";
import PieChartRelevance from "./PieChartRelevance";
import LineChartEndYear from "./LineChartEndYear";
import LineChartStartYear from "./LineChartStartYear";
import Loading from "./Loading";

const Index = () => {
  const [dataLoading, setDataLoading] = useState(false)
  const { filterState } = useContext(FilterContext);
  const { isLoading, data, refetch } = useQuery("chartData", async () => {
    setDataLoading(true)
    const res = await axios.post(`/data`,filterState);
    setDataLoading(false)
    return res.data;
  });
  
  useEffect(() => {
    refetch()
    console.log(filterState);
    // eslint-disable-next-line
  }, [filterState])

  useEffect(() => {
    console.log(isLoading);
    // eslint-disable-next-line
  }, [isLoading])
  

  if (isLoading || dataLoading) return <Loading/>
  return (
    <div>
      <div className='md:w-10/12 mx-auto flex flex-col '>
        <div className='bg-gray-50 rounded-lg shadow-lg p-5 my-10 broder'>
          <BarChart data={data} />
        </div>
        
        <div className='bg-gray-50 rounded-lg shadow-lg p-5 my-10 broder'>
          <LineChart data={data} />
        </div>
        <div className='md:grid md:grid-cols-2 gap-10'>
          <div className='bg-gray-50 rounded-lg shadow-lg p-5 my-10 broder '>
            <DoughnutChartRegion data={data} />
          </div>
          <div className='bg-gray-50 rounded-lg shadow-lg p-5 my-10 broder '>
            <PestelRaderChart data={data} />
          </div>
        </div>
        <div className='bg-gray-50 rounded-lg shadow-lg p-5 my-10 broder'>
          <DoughnutChartTopic data={data} />
        </div>
        <div className='bg-gray-50 rounded-lg shadow-lg p-5 my-10 broder'>
          <BarChartLikelihood data={data} />
        </div>
        <div className='bg-gray-50 rounded-lg shadow-lg p-5 my-10 broder'>
          <PieChartRelevance data={data} />
        </div>
        <div className='bg-gray-50 rounded-lg shadow-lg p-5 my-10 broder'>
          <LineChartEndYear data={data} />
        </div>
        <div className='bg-gray-50 rounded-lg shadow-lg p-5 my-10 broder'>
          <LineChartStartYear data={data} />
        </div>
      </div>
    </div>
  );
};

export default Index;
