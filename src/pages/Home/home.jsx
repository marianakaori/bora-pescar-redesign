import CardCategoria from '../../components/CardCategoria/cardCategoria';
import cardsCategoriaData from '../../data/cardsCategoriaData.json';
import cardsBlogData from '../../data/cardsBlogData.json';
import marBackground from '../../assets/mar_background_subtract.png'
import BlogPosts from '../../components/BlogPosts/blogPosts';

import './home.css';

const Home = () => {
    return (
        <div>
            <img src={marBackground} alt="Imagem do mar no pôr do sol, com as cores predominantemente azuis e laranjas" />
            <div className="cards-categoria-container">
                {cardsCategoriaData.map((cardCategoria, index) => (
                    <CardCategoria key={index} title={cardCategoria.title} image={cardCategoria.image} alt={cardCategoria.alt} />
                ))}
            </div>
            <BlogPosts cardsBlogData={cardsBlogData} />
        </div>
    );
};

export default Home;