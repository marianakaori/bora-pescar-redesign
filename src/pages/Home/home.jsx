import CardCategoria from '../../components/CardCategoria/cardCategoria';
import cardsCategoriaData from '../../data/cardsCategoriaData.json';

import './home.css';

const Home = () => {
    return (
        <div>
            <div className="cards-categoria-container">
                {cardsCategoriaData.map((cardCategoria, index) => (
                    <CardCategoria key={index} title={cardCategoria.title} image={cardCategoria.image} alt={cardCategoria.alt} />
                ))}
            </div>
        </div>
    );
};

export default Home;