import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import DonationCard from "../DonationCard/DonationCard";
import { useEffect, useState } from "react";


const Home = () => {
    const data = useLoaderData();
    // const [searchValue, setSearchValue] = useState();
    const [filter, setFilter] = useState([])

    const handleOnsubmit = e => {
        e.preventDefault()
        const value = e.target.filter.value;

        handleFilter(value)
        // setSearchValue(Value)
    }

    const handleFilter = (value)=>{
        const mapData = data.filter(campaign => campaign.category === value)
       
            setFilter(mapData)
        
    }

    useEffect(() => {
        setFilter(data)
        
    }, [data])
    console.log(filter)

    
    return (
        <div className="">
            <Banner
                handleOnsubmit={handleOnsubmit}
            ></Banner>

            <div className="absolute top-0 left-0 opacity-5">
                <img className="h-[600px] w-screen" src="https://i.ibb.co/Jn02tfn/people-meeting-community-center.jpg" alt="" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-20 gap-6">
                {
                    filter.map(campaign => <DonationCard key={campaign.id} campaign={campaign}></DonationCard>)
                }
            </div>
        </div>
    );
};

export default Home;