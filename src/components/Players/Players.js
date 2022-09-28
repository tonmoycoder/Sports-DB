import React from 'react';
import Singleplayer from '../SinglePlayer/Singleplayer';
import './Players.css'

const Players = ({players, setCart, cart}) => {
    return (
        <div>
            <div className="card-container">
                {players.map((pd)=> 
               <Singleplayer player={pd} key={pd?.idPlayer} cart={cart} setCart={setCart}></Singleplayer> )}
            </div>
        </div>
    );
};

export default Players;