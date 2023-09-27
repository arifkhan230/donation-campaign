import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../utility/localStorage";
import CardDonation from "../CardDonation/CardDonation";

const Donation = () => {
    const campaigns = useLoaderData();
    const [donations, setDonations] = useState([])
    const [donationLength, setDonationLength] = useState(4);
    useEffect(() => {
        const storedDonationId = getStoredDonation()
        if (storedDonationId.length > 0) {
            const donatedCampaign = campaigns.filter(campaign => storedDonationId.includes(campaign.id))
            setDonations(donatedCampaign)
        }
    }, [campaigns]);

    const handleSeeAll =()=>{
        if(donations.length> 4){
            setDonationLength(donations.length)
        }
    }

    

    return (
        <div className="my-12 mx-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {
                    donations.slice(0,donationLength).map((donation, idx) => <CardDonation key={idx} donation={donation}></CardDonation>)
                }
            </div>
            {
                donations.length> 4 && <div className={ donations.length === donationLength ? 'hidden' : 'mt-10 flex justify-center'}>
                <button onClick={handleSeeAll} className="bg-green-600 p-2 text-xl text-white font-semibold rounded">See All</button>
            </div>
            }
        </div>
    );
};

export default Donation;