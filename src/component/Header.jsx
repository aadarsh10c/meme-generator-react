import React from 'react';
import trollUrl from '../assets/troll-face.png'

export default function Header (){
    return(
        <header className="header">
            <div className="header__main">
                <img src={trollUrl} alt="" className="header__main-img" />
                <h3 className="header__main-title">
                    Meme Generator
                </h3>
            </div>
            <h5 className="header__sub">
                React Course Project-3
            </h5>
        </header>
    );
}