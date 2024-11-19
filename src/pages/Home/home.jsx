import CardCategoria from '../../components/CardCategoria/cardCategoria';
import cardsCategoriaData from '../../data/cardsCategoriaData.json';
import cardsBlogData from '../../data/cardsBlogData.json';
import marBackground from '../../../public/assets/mar_background_subtract.png'
import BlogPosts from '../../components/BlogPosts/blogPosts';

import logo from '../../../public/assets/borapescar2.png'

import './home.css';

const Home = () => {
    return (
        <div>
            <img className="img-background" src={marBackground} alt="Imagem do mar no pôr do sol, com as cores predominantemente azuis e laranjas" />
            <div className="search-container">
                <img src={logo} alt="Logo do Bora Pescar"   className="title-image" />
                <input type="text" placeholder="Digite sua busca aqui..." className="search-input"/>
            </div>
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