import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CardDonation = ({ donation }) => {
    const {id,  picture, price, title, category, category_bg_color, card_bg_color, text_button_bg_color } = donation;

    return (
        <div>
            <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-clip-border text-gray-700 shadow" style={{ background: `${card_bg_color}` }}>
                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img
                        src={picture}
                        alt="image"
                        className=" object-cover h-full"
                    />
                </div>
                <div className="p-6">
                    <div className='p-2 rounded w-1/2 mb-2' style={{ background: `${category_bg_color}` , color: `${text_button_bg_color}`  }}>

                        <h2 className='font-medium bg-cover'> {category}</h2>
                    </div>
                    <p className='text-2xl font-semibold mb-2' style={{ color: `${text_button_bg_color}` }} >{title}</p>
                    <p className='text-lg font-bold mb-2' style={{
                        color: `${text_button_bg_color} `}}>
                           ${price}
                            

                    </p>
                    <a className="inline-block" href="#">
                        <Link to={`/donations/${id}`}>
                        <button
                            className="p-2 rounded text-white text-xl font-semibold mt-4" style={{
                                background: `${text_button_bg_color} `}}
                            type="button"
                        >
                            View Details
                            
                        </button>
                        </Link>
                    </a>
                </div>
            </div>
            

        </div>
    );
};

CardDonation.propTypes = {
    donation: PropTypes.object

};

export default CardDonation;