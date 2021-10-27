import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { client, urlFor } from '../sanityClient';
import MainCard from './MainCard';

const Main = (props) => {
  const cardsQuery = `*[_type == 'mainCard']{
    _id,
    mainCardTitle,
    slug,
    mainImage
  }`;
  const [cardsData, setCards] = useState(null);

  useEffect(() => {
    client
      .fetch(cardsQuery)
      .then((data) => setCards(data))
      .catch(console.error);
  }, []);

  return (
    <div className='max-w-full flex justify-center h-full'>
      <div className='w-11/12 h-full flex p-5 items-center'>
        <div className='h-full flex flex-row flex-wrap w-full justify-evenly'>
          {cardsData?.length > 0 &&
            cardsData.map((card) => (
              <Link
                key={card._id}
                to={`/${card.slug.current}`}
                // className='w-1/3 flex justify-evenly p-5'
              >
                <MainCard key={card._id} card={card} />
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
