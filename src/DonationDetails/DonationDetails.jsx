import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const DonationDetails = () => {

    const [campaign, setCampaign] = useState()

    const {id} = useParams()
    const idInt = parseInt(id)
    const campaigns = useLoaderData()
    console.log(campaigns)
    console.log(idInt)
    
    useEffect(()=>{

        const findCampaign = campaigns?.find(campaign => campaign.id === idInt)
        setCampaign(findCampaign)

    },[campaigns,idInt])

    return (
        <div>
            <h1 className='text-4xl'>Donation Details will be here</h1>
           <img src={campaign.picture} alt="" />
            
        </div>
    );
};

export default DonationDetails;