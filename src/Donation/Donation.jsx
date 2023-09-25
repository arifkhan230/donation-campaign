import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../utility/localStorage";
import CardDonation from "../CardDonation/CardDonation";

const Donation = () => {
    const campaigns = useLoaderData();
    const [donations,setDonations] = useState([])
    useEffect(()=>{
        const storedDonationId = getStoredDonation()
        console.log(storedDonationId)
        if(storedDonationId.length > 0){
            const donatedCampaign = campaigns.filter(campaign => storedDonationId.includes(campaign.id))
            
            setDonations(donatedCampaign)
        }
    },[campaigns])
    

    return (
        <div>
            <h1>Your Donation will be shown here</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {
                donations.map(donation => <CardDonation key={Donation.id} donation={donation}></CardDonation>)
            }
            </div>
        </div>
    );
};

export default Donation;