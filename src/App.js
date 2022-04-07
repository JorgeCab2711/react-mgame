import React from "react";
//Imports de imagenes
import liquidD from '../img/liquid-divinium.png';
import logo from '../img/logo.png';
import jugger from '../img/jugger.png';


function App(){
    return (
        <div>
            <h1 id = "main-title">COD Zombies Memory Game</h1>
            
            <div id="cardContainer">

                
                <div class="wrapper card ">
                
                    <div class="card-back card-face">
                        <img class="liquid-divinium top-left" src={liquidD}/>
                        <img class="liquid-divinium top-right" src={liquidD}/>
                        <img class="liquid-divinium bottom-left" src={liquidD}/>
                        <img class="liquid-divinium bottom-right" src={liquidD}/>
                        <img class="logo" src={logo}/>

                    </div>                
                    
                    <div class="card-front card-face">
                        <img id="jugger" src={jugger}></img>
                    </div>
                </div>


                <div class="wrapper card">
                    
                </div>
                <div class="wrapper card">

                </div>
                <div class="wrapper card">

                </div>
                <div class="wrapper card">

                </div>
                <div class="wrapper card">

                </div>
                <div class="wrapper card">

                </div>
                <div class="wrapper card">

                </div>
                <div class="wrapper card">

                </div>
                <div class="wrapper card">
                    0</div>
                <div class="wrapper card">
                    1</div>
                <div class="wrapper card">
                    2</div>
                <div class="wrapper card">
                    3</div>
                <div class="wrapper card">
                    4</div>
                <div class="wrapper card">
                    5</div>
                <div class="wrapper card">
                    6</div>
                <div>
                    <p id="game-info" >Intentos: <span class="flips">0</span></p>
                </div>
            </div>
        </div>
    );
}
export default App;

