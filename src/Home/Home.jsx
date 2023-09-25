import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import DonationCard from "../DonationCard/DonationCard";


const Home = () => {
    const data = useLoaderData();
    // console.log(data)
    return (
        <div className="">
            <Banner></Banner>
            <div className="absolute top-0 left-0 opacity-5">
                <img className="h-[600px] w-screen" src="https://i.ibb.co/Jn02tfn/people-meeting-community-center.jpg" alt="" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-20 gap-6">
                {
                    data.map(campaign => <DonationCard key={campaign.id} campaign={campaign}></DonationCard> )
                }
            </div>
        </div>
    );
};

export default Home;