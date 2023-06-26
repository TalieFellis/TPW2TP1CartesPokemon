import { useState } from 'react'
import "./Card.css";
import Image from '../image/Image';
import CardTitle from '../card-title/CardTitle';
import Abilities from '../abilities/Abilities';

const Card = (props) => {
  const { image, name, abilities } = props.data;
  const [showAbilities, setShowAbilities] = useState(false);

  const handleMouseEnter = () => {
    setShowAbilities(true);
  };

  const handleMouseLeave = () => {
    setShowAbilities(false);
  };

  return (
  <article 
    className='card'
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
  >
    <Image src={image} />
    <CardTitle title={name} />
    <div className={`abilities-container ${showAbilities ? 'visible' : 'hidden'}`}>
        {abilities.map((ability, index) => (
          <span key={index} className='ability'>
            {ability}
          </span>
        ))}
      </div>
  </article>
  );
}

export default Card;