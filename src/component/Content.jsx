import React from "react";
import memesData from "../assets/memesData";

export default function Content(){

    const [ memeArray, setMemeArray ] = React.useState([]);

    const [ meme , setMeme ] = React.useState({
        topName:"",
        bottomName:"",
        imageUrl: "http://i.imgflip.com/1bij.jpg"
    });

    React.useEffect( () => {
        console.log("effect ran");
        async function getMemeArray( ){
            let memeJson = await fetch("https://api.imgflip.com/get_memes");
            let memeData = await memeJson.json();
            console.log( memeData );
            setMemeArray(memeData.data.memes);
        }
        getMemeArray();
    },[]);

    function getURL (){
        const index = Math.floor( Math.random() * memeArray.length );
        const  url  = memeArray[index].url;
        setMeme({
            ...meme,
            imageUrl: url
        })
    }

    function handleChange( event ){
        const { name , value } = event.target
        setMeme( {
            ...meme,
            [name]:value
        })
    }

    return (
        <main className="content">
            <div className="content__input">
                <input type="text" 
                className="content__input-top" 
                placeholder="Top Text"
                name="topName"
                value={meme.topName}
                onChange={handleChange}
                />

                <input type="text" 
                className="content__input-bottom" 
                placeholder="Bottom Text" 
                name="bottomName"
                value={meme.bottomName}
                onChange={handleChange}
                />
                <button className="content__input-generator"
                    onClick={ getURL }>
                    Get a new meme Image 🖼
                </button>
            </div>
            <div className="content__display">
                <h1 className="content__display-topText">{meme.topName}</h1>
                <h1 className="content__display-bottomText">{meme.bottomName}</h1>
                <img src={meme.imageUrl} alt="Random Meme" className="content__display-img" />               
            </div>
        </main>

    );
}