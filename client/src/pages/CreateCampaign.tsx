import React, { useEffect } from 'react';
import axios from 'axios';
import CampaignCreateForm from '@/components/CampaignCreateForm';



function CreateCampaign() {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const key = "da3dabdc-4992-4506-a5a5-a1254286ac7a";
  //     const url = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${key}`;

  //     try {
  //       const response = await axios.get(url);
  //       const dataArray: any = response.data.data;

  //       let count = 0;
  //       dataArray.forEach((dataObject:any) => {
  //         if (count === 10) return;
  //         count++;
  //         console.log(dataObject);
  //       });
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []); 
  return (
    <div className='text-white'>
      <CampaignCreateForm onSubmit={()=>{}}/>
    </div>
  )
}

export default CreateCampaign
