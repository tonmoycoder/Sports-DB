import React, { useEffect, useState } from 'react';
import Players from '../Players/Players';
import './Home.css';

const Home = () => {
  const [players, setPlayer] = useState([]);
  const [Search, setSearch] = useState('');
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${Search}`)
      .then((res) => res.json())
      .then((data) => setPlayer(data?.player));
  }, [Search]);
  return (
    <div>
      <div className="home-container">
        <div className="left-side">
          <div className=" relative ">
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              id="rounded-email"
              className="w-2/6 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent mb-6"
              placeholder="Type Here"
            />
          </div>

          <Players players={players} setCart={setCart} cart={cart}></Players>
        </div>
        <div className="right-side">
          <h1 className="text-4xl">cart</h1>
          
        </div>
      </div>
    </div>
  );
};

export default Home;
