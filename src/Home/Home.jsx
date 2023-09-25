import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import DonationCard from "../DonationCard/DonationCard";

const Home = () => {
    const data = useLoaderData();
    // console.log(data)
    return (
        <div>
            <Banner></Banner>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-20 gap-6">
                {
                    data.map(campaign => <DonationCard key={campaign.id} campaign={campaign}></DonationCard> )
                }
            </div>
        </div>
    );
};

export default Home;