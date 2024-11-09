import './Gallery.css';
import images from '../backend/mock/gameData.json'
import { useNavigate } from 'react-router-dom';

const Gallery = () => {
    const navigate = useNavigate();

    const handleGameClick = (gameName) => {
        navigate(`/groups/${gameName}`);
    };

    return (
        <div className="gallery">
        {images.map((image, index) => (
          <div className="image-container" key={index} onClick={() => handleGameClick(image.description)}>
            <img src={image.image} alt={image.description} className="image"/>
            <div className="overlay">
                <div>{image.description}</div>
            </div>
          </div>
        ))}
      </div>
    )
}

export default Gallery;