import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import CardBlog from '../../components/CardBlog/cardBlog';
import './blogPosts.css';
import PropTypes from "prop-types";


const PostsPerPage = 3;

const BlogPosts = ({ cardsBlogData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Calcula os posts visíveis com base no índice atual
  const visiblePosts = cardsBlogData.slice(
    currentIndex,
    currentIndex + PostsPerPage
  );

  const handleNext = () => {
    if (currentIndex < cardsBlogData.length - 1) {
        setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="blog-container">
        <h2 className="blog-title">Blog</h2>
        <div className="cards-blog-container">
            {visiblePosts.map((cardBlog, index) => (
                <CardBlog key={index} title={cardBlog.title} image={cardBlog.image} alt={cardBlog.alt} text={cardBlog.text} />
            ))}
        </div>
        <div className="navigation-buttons">
            <button onClick={handlePrev} disabled={currentIndex === 0}> <FontAwesomeIcon icon={faArrowLeft} /></button>
            <button onClick={handleNext} disabled={currentIndex + PostsPerPage >= cardsBlogData.length}> <FontAwesomeIcon icon={faArrowRight} /></button>
        </div>
    </div>
  );
};

BlogPosts.propTypes = {
    cardsBlogData: PropTypes.any.isRequired
};

export default BlogPosts;
