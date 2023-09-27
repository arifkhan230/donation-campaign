import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import DonationCard from "../DonationCard/DonationCard";
import { useEffect, useState } from "react";
import swal from "sweetalert";


const Home = () => {
    const data = useLoaderData();
    const [filter, setFilter] = useState([])

    const handleOnsubmit = e => {
        e.preventDefault()
        const valueUpper = e.target.filter.value;
        const value = valueUpper.toLowerCase();
        handleFilter(value);
    }

    const handleFilter = (value)=>{
        if(value === ""){
            swal("Not Found!", "Input field is empty!", "error");
        }
        else{
            const mapData = data.filter(campaign => campaign.category.toLowerCase() === value)
            setFilter(mapData)
        }
    }

    useEffect(() => {
        setFilter(data)
        
    }, [data])
    

    return (
        <div className="px-5">
            <Banner
                handleOnsubmit={handleOnsubmit}
            ></Banner>

            <div className="absolute top-0 left-0 opacity-5">
                <img className="h-[600px] lg:w-screen" src="https://i.ibb.co/Jn02tfn/people-meeting-community-center.jpg" alt="" />
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