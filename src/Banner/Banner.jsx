import PropTypes from 'prop-types';


const Banner = ({handleOnsubmit}) => {

    
    return (
        <div className="relative z-50">
            <div className="h-[50vh] flex flex-col justify-center items-center" >
                <h2 className=" text-2xl lg:text-5xl font-bold">I Grow By Helping People In Need</h2>

                <form onSubmit={handleOnsubmit} className="mt-4 rounded">
                    <input
                        className="border border-r-0 rounded lg:w-80 p-4" type="text" name="filter" id=""
                    />
                    <input
                        className=" border w-32 text-white bg-red-400 p-4 rounded-r" type="submit" value="Submit"
                    />
                </form>
            </div>
        </div>
    );
};
Banner.propTypes = {
    handleOnsubmit: PropTypes.func,
    handleFilter:PropTypes.func

};

export default Banner;