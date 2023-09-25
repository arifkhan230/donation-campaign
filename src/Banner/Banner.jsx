const Banner = () => {
    return (
        <div className="relative">
            <div className="h-[50vh] flex flex-col justify-center items-center" >
                <h2 className="text-5xl font-bold">I Grow By Helping People In Need</h2>
                <form className="bg-red-400 mt-4 rounded">
                    <input className="border rounded w-80 p-4" type="text" name="" id="" />
                    <input className="w-32" type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default Banner;