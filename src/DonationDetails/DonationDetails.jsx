import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert";
import { saveDonation } from "../utility/localStorage";

const DonationDetails = () => {

    const [campaign, setCampaign] = useState([])

    const { id } = useParams()
    const idInt = parseInt(id)
    const campaigns = useLoaderData()
    // console.log(campaigns)
    // console.log(idInt)

    useEffect(() => {

        const findCampaign = campaigns.find(campaign => campaign.id === idInt);
        setCampaign(findCampaign)

    }, [campaigns, idInt])


    const { picture, title, description, price, text_button_bg_color
    } = campaign;

    const handleDonate = (campaign) =>{
        saveDonation(idInt)
        swal("Good job!", "Your Donation is successful!", "success");
        
    }

    return (
        <div>
            <div className="relative">

                <img className="h-[500px] w-full" src={picture} alt="" />

                <div className="w-full bg-[#0b0b0b80] z-50 absolute bottom-0 p-4 ">
                    <button onClick={()=>handleDonate(campaign)} className="p-4 rounded text-white text-xl font-semibold" style={{
                        background: `${text_button_bg_color} `}}>Donate {price}</button>
                </div>
            </div>
            <h2 className="mt-12 mb-6 text-4xl font-bold">{title}</h2>
            <p>{description}</p>
        </div>
    );
};

export default DonationDetails;