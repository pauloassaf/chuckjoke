import React, {useState} from "react"
import "./Joke.css" 

export default function chuckJoke() {


    const [joke, setJoke] = useState("⇈");
   
    async function getData() {
        const response = await fetch("https://api.chucknorris.io/jokes/random");
        const piada = await response.json();
        setJoke(piada.value);
    }

    return (
        <div className="container">
            <img alt="chuck" src="https://images02.military.com/sites/default/files/2021-04/chucknorris.jpeg"></img>
            <button className="bt" onClick={getData}>Get Joke</button>
            <img alt="chuck" src="https://hips.hearstapps.com/hmg-prod/images/gettyimages-150327735-copy.jpg?resize=1200:*"></img>
            <h1>{joke}</h1>
        </div>
    )
}
