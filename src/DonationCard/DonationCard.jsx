import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const DonationCard = ({ campaign }) => {
    const { id, picture, title, category, category_bg_color, card_bg_color, text_button_bg_color } = campaign;
    return (
        <div>
            <Link to={`/donations/${id}`}>
                <div className="card shadow-xl "
                    style={{ background: `${card_bg_color}` }}>
                    <figure><img className='w-full h-[200px]' src={picture} alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className='p-2 rounded w-1/3 text-center' style={{ background: `${category_bg_color}`, color: `${text_button_bg_color}` }}>

                            <h2 className='font-medium w-20'> {category}</h2>
                        </div>
                        <p className='text-xl font-semibold' style={{ color: `${text_button_bg_color}` }} >{title}</p>
                    </div>
                </div>
            </Link>
        </div >
    );
};
DonationCard.propTypes = {
    campaign: PropTypes.object
}


export default DonationCard;