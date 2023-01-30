import React from "react";
import memesData from "../assets/memesData";

export default function Content(){
    const memeArray = memesData.data.memes;
    const [ meme , setMeme ] = React.useState({
        topName:"",
        bottomName:"",
        imageUrl: "http://i.imgflip.com/1bij.jpg"
    })

    function getURL (){
        const index = Math.floor( Math.random() * memeArray.length );
        const  url  = memeArray[index].url;
        setMeme({
            ...meme,
            imageUrl: url
        })
    }
    return (
        <main className="content">
            <div className="content__input">
                <input type="text" className="content__input-top" placeholder="Top Text"/>
                <input type="text" className="content__input-bottom" placeholder="Bottom Text" />
                <button className="content__input-generator"
                    onClick={ getURL }>
                    Get a new meme Image 🖼
                </button>
            </div>
            <div className="content__display">
                <img src={meme.imageUrl} alt="Random Meme" className="content__display-img" />
            </div>
        </main>

    );
}