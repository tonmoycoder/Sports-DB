import React from 'react';
import './Singleplayer.css';

const Singleplayer = ({ player, cart, setCart }) => {
  const { strPlayer, idPlayer, strNationality, strDescriptionEN, strThumb } = player;

  const handleAddToCart = () => {
    const info = {
      strPlayer,
      strThumb,
      idPlayer,
      prices: 125,
    };
    if (cart) {
      const newPlayer = [...cart, info];
      setCart(newPlayer);
    }
  };

  console.log(cart);
  return (
    <div>
      <div className="card-content">
        <div className="rounded overflow-hidden shadow-lg bg-slate-100">
          <img
            className="w-full"
            src={
              strThumb
                ? strThumb
                : 'https://starsunfolded.com/wp-content/uploads/2018/06/Johnny-Sins.jpg'
            }
            alt="Forest"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{strPlayer}</div>
            <div className="font-bold text-xl mb-2">{strNationality}</div>
            <p className="text-gray-700 text-base">
              {strDescriptionEN
                ? strDescriptionEN.slice(0, 100)
                : "Don't worry. I am your favorite doctor, plumber, carpenter, teacher, policemen etc."}
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-2 mb-2">
              Details
            </button>
            <button
              onClick={handleAddToCart}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-2 mb-2">
              Add to cart
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-2 mb-2">
              Bookmark
            </button>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #WWE
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Wrastler
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Sports
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singleplayer;
