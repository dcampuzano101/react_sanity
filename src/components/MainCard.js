import { React } from 'react';
import { client, urlFor } from '../sanityClient';

// w-96 === 24rem === 384px

const MainCard = ({ card }) => {
  console.log(card.slug);
  const cardStyles = {
    // w-96 === 24rem === 384px
    backgroundImage: `url(${urlFor(card.mainImage).width(384).height(384)})`,
  };

  return (
    <div
      style={cardStyles}
      className='border-2 bg-fitness-card border-red-400 rounded-md font-karla xl:text-5xl lg:text-4xl md:lg:text-2xl transition w-96 h-96'
    >
      CARD 1
    </div>
  );
};

export default MainCard;
