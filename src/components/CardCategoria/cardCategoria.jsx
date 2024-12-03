import PropTypes from "prop-types";
import './cardCategoria.css';

const CardCategoria = ({ title, image, alt }) => {
    return (
        <button className="card-categoria">
            <img src={image} alt={alt} className="card-categoria-image" />
            <div className="card-categoria-title">{title}</div>
        </button>
    );
};

CardCategoria.propTypes = {
    title: PropTypes.string.isRequired, 
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};

export default CardCategoria;
