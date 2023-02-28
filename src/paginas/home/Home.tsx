import React from "react";
import './Home.css';
import fundoHome from './https://i.imgur.com/eH6rHyh.jpg';

let nome = 'Rafael Souza'

function Home(){
    return(
        <>
            <h1 className="titulo">Home</h1>
            <img src="https://i.imgur.com/eH6rHyh.jpg" alt="imagem tela inicial" className="img" />
        </>
    );

}

export default Home;