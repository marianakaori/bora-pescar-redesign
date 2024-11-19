import PropTypes from "prop-types";
import './cardCategoria.css';

const CardCategoria = ({ title, image, alt }) => {
    const imageSrc = new URL(`${image}`, import.meta.url).href;
    return (
        <div className="card-categoria">
            <img src={imageSrc} alt={alt} className="card-categoria-image" />
            <div className="card-categoria-title">{title}</div>
        </div>
    );
};

CardCategoria.propTypes = {
    title: PropTypes.string.isRequired, 
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};

export default CardCategoria;
