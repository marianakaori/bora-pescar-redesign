import PropTypes from "prop-types";
import './cardBlog.css';

const CardBlog = ({ title, image, alt, text }) => {
    return (
        <button className="card-blog">
            <img src={image} alt={alt} className="card-blog-image" />
            <div className="card-blog-title">{title}</div>
            <div className="card-blog-text">{text}</div>
        </button>
    );
};

CardBlog.propTypes = {
    title: PropTypes.string.isRequired, 
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default CardBlog;
