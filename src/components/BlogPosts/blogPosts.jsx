import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import CardBlog from '../../components/CardBlog/cardBlog';
import './blogPosts.css';
import PropTypes from "prop-types";


const BlogPosts = ({ cardsBlogData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [postsPerPage, setPostsPerPage] = useState(3);

  useEffect(() => {
    const updatePostsPerPage = () => {
      if (window.innerWidth < 768) {
        setPostsPerPage(1);
      } else if (window.innerWidth < 1200) {
        setPostsPerPage(2);
      } else {
        setPostsPerPage(3);
      }
    };

    updatePostsPerPage(); // Define o número de posts inicialmente
    window.addEventListener("resize", updatePostsPerPage); // Atualiza em tempo real

    return () => window.removeEventListener("resize", updatePostsPerPage); // Limpa o evento ao desmontar
  }, []);

  // Calcula os posts visíveis com base no índice atual
  const visiblePosts = cardsBlogData.slice(
    currentIndex,
    currentIndex + postsPerPage
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
            <button onClick={handleNext} disabled={currentIndex + postsPerPage >= cardsBlogData.length}> <FontAwesomeIcon icon={faArrowRight} /></button>
        </div>
    </div>
  );
};

BlogPosts.propTypes = {
    cardsBlogData: PropTypes.any.isRequired
};

export default BlogPosts;
