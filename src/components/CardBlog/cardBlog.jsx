import PropTypes from "prop-types";
import './cardBlog.css';

const CardBlog = ({ title, image, alt, text }) => {
    const imageSrc = new URL(`${image}`, import.meta.url).href;
    return (
        <div className="card-blog">
            <img src={imageSrc} alt={alt} className="card-blog-image" />
            <div className="card-blog-title">{title}</div>
            <div className="card-blog-text">{text}</div>
        </div>
    );
};

CardBlog.propTypes = {
    title: PropTypes.string.isRequired, 
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default CardBlog;
