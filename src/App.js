import React from "react";
import script from './script.js';

//Imports de imagenes
import liquidD from '../img/liquid-divinium.png';
import logo from '../img/logo.png';
import jugger from '../img/jugger.png';
import qr from '../img/qr.png';
import dt from '../img/dt.png';
import spc from '../img/SpeedCola.png';
import su from '../img/su.png';
import ts from '../img/tombstone.png';
import ww from '../img/ww.png';
import mk from '../img/mk.png';



function reloadPage(){
    window.location.reload(false);
}



function App(){
    return (
        <div>
            
            
            <h1 id = "main-title">COD Zombies Memory Game</h1>
            <div id="cardContainer">
            <script src="/script.js"></script>
                {/*Carta Jugger*/}
                <div class="wrapper card">
                
                    <div class="card-back card-face">
                        <img class="liquid-divinium top-left" src={liquidD}/>
                        <img class="liquid-divinium top-right" src={liquidD}/>
                        <img class="liquid-divinium bottom-left" src={liquidD}/>
                        <img class="liquid-divinium bottom-right" src={liquidD}/>
                        <img class="logo" src={logo}/>

                    </div>                
                    
                    <div class="card-front card-face">
                        <img class="liquid-divinium top-left" src={liquidD}/>
                        <img class="liquid-divinium top-right" src={liquidD}/>
                        <img class="liquid-divinium bottom-left" src={liquidD}/>
                        <img class="liquid-divinium bottom-right" src={liquidD}/>
                        <img id="jugger" class='perk' src={jugger}></img>
                    </div>
                </div>

                {/*Carta Jugger*/}
                <div class="wrapper card ">
                
                    <div class="card-back card-face">
                        <img class="liquid-divinium top-left" src={liquidD}/>
                        <img class="liquid-divinium top-right" src={liquidD}/>
                        <img class="liquid-divinium bottom-left" src={liquidD}/>
                        <img class="liquid-divinium bottom-right" src={liquidD}/>
                        <img class="logo" src={logo}/>

                    </div>                
                    
                    <div class="card-front card-face">
                        <img class="liquid-divinium top-left" src={liquidD}/>
                        <img class="liquid-divinium top-right" src={liquidD}/>
                        <img class="liquid-divinium bottom-left" src={liquidD}/>
                        <img class="liquid-divinium bottom-right" src={liquidD}/>
                        <img id="jugger" class='perk' src={jugger}></img>
                    </div>
                </div>

                {/*Carta Double tap*/}
                <div class="wrapper card ">
                
                    <div class="card-back card-face">
                        <img class="liquid-divinium top-left" src={liquidD}/>
                        <img class="liquid-divinium top-right" src={liquidD}/>
                        <img class="liquid-divinium bottom-left" src={liquidD}/>
                        <img class="liquid-divinium bottom-right" src={liquidD}/>
                        <img class="logo" src={logo}/>

                    </div>                
                    
                    <div class="card-front card-face">
                        <img class="liquid-divinium top-left" src={liquidD}/>
                        <img class="liquid-divinium top-right" src={liquidD}/>
                        <img class="liquid-divinium bottom-left" src={liquidD}/>
                        <img class="liquid-divinium bottom-right" src={liquidD}/>
                        <img id="double-tap" class='perk' src={dt}></img>
                    </div>
                </div>

                {/*Carta Double tap*/}
                <div class="wrapper card ">
                
                    <div class="card-back card-face">
                        <img class="liquid-divinium top-left" src={liquidD}/>
                        <img class="liquid-divinium top-right" src={liquidD}/>
                        <img class="liquid-divinium bottom-left" src={liquidD}/>
                        <img class="liquid-divinium bottom-right" src={liquidD}/>
                        <img class="logo" src={logo}/>

                    </div>                
                    
                    <div class="card-front card-face">
                        <img class="liquid-divinium top-left" src={liquidD}/>
                        <img class="liquid-divinium top-right" src={liquidD}/>
                        <img class="liquid-divinium bottom-left" src={liquidD}/>
                        <img class="liquid-divinium bottom-right" src={liquidD}/>
                        <img id="double-tap" class='perk' src={dt}></img>
                    </div>
                </div>{/*Carta Mule kick*/}
                <div class="wrapper card ">
                
                    <div class="card-back card-face">
                        <img class="liquid-divinium top-left" src={liquidD}/>
                        <img class="liquid-divinium top-right" src={liquidD}/>
                        <img class="liquid-divinium bottom-left" src={liquidD}/>
                        <img class="liquid-divinium bottom-right" src={liquidD}/>
                        <img class="logo" src={logo}/>

                    </div>                
                    
                    <div class="card-front card-face">
                        <img class="liquid-divinium top-left" src={liquidD}/>
                        <img class="liquid-divinium top-right" src={liquidD}/>
                        <img class="liquid-divinium bottom-left" src={liquidD}/>
                        <img class="liquid-divinium bottom-right" src={liquidD}/>
                        <img id="mule-kick" class='perk' src={mk}></img>
                    </div>
                </div>{/*Carta Mule kick*/}
                <div class="wrapper card ">
                
                    <div class="card-back card-face">
                        <img class="liquid-divinium top-left" src={liquidD}/>
                        <img class="liquid-divinium top-right" src={liquidD}/>
                        <img class="liquid-divinium bottom-left" src={liquidD}/>
                        <img class="liquid-divinium bottom-right" src={liquidD}/>
                        <img class="logo" src={logo}/>

                    </div>                
                    
                    <div class="card-front card-face">
                        <img class="liquid-divinium top-left" src={liquidD}/>
                        <img class="liquid-divinium top-right" src={liquidD}/>
                        <img class="liquid-divinium bottom-left" src={liquidD}/>
                        <img class="liquid-divinium bottom-right" src={liquidD}/>
                        <img id="mule-kick" class='perk' src={mk}></img>
                    </div>
                </div>{/*Carta Quick revive*/}
                <div class="wrapper card ">
                
                    <div class="card-back card-face">
                        <img class="liquid-divinium top-left" src={liquidD}/>
                        <img class="liquid-divinium top-right" src={liquidD}/>
                        <img class="liquid-divinium bottom-left" src={liquidD}/>
                        <img class="liquid-divinium bottom-right" src={liquidD}/>
                        <img class="logo" src={logo}/>

                    </div>                
                    
                    <div class="card-front card-face">
                        <img class="liquid-divinium top-left" src={liquidD}/>
                        <img class="liquid-divinium top-right" src={liquidD}/>
                        <img class="liquid-divinium bottom-left" src={liquidD}/>
                        <img class="liquid-divinium bottom-right" src={liquidD}/>
                        <img id="quick-revive" class='perk' src={qr}></img>
                    </div>
                </div>{/*Carta Quick revive*/}
                <div class="wrapper card ">
                
                    <div class="card-back card-face">
                        <img class="liquid-divinium top-left" src={liquidD}/>
                        <img class="liquid-divinium top-right" src={liquidD}/>
                        <img class="liquid-divinium bottom-left" src={liquidD}/>
                        <img class="liquid-divinium bottom-right" src={liquidD}/>
                        <img class="logo" src={logo}/>

                    </div>                
                    
                    <div class="card-front card-face">
                        <img class="liquid-divinium top-left" src={liquidD}/>
                        <img class="liquid-divinium top-right" src={liquidD}/>
                        <img class="liquid-divinium bottom-left" src={liquidD}/>
                        <img class="liquid-divinium bottom-right" src={liquidD}/>
                        <img id="quick-revive" class='perk' src={qr}></img>
                    </div>
                </div>{/*Carta Speed cola*/}
                <div class="wrapper card ">
                
                    <div class="card-back card-face">
                        <img class="liquid-divinium top-left" src={liquidD}/>
                        <img class="liquid-divinium top-right" src={liquidD}/>
                        <img class="liquid-divinium bottom-left" src={liquidD}/>
                        <img class="liquid-divinium bottom-right" src={liquidD}/>
                        <img class="logo" src={logo}/>

                    </div>                
                    
                    <div class="card-front card-face">
                        <img class="liquid-divinium top-left" src={liquidD}/>
                        <img class="liquid-divinium top-right" src={liquidD}/>
                        <img class="liquid-divinium bottom-left" src={liquidD}/>
                        <img class="liquid-divinium bottom-right" src={liquidD}/>
                        <img id="speed-cola" class='perk' src={spc}></img>
                    </div>
                </div>{/*Carta Speed cola*/}
                <div class="wrapper card ">
                
                    <div class="card-back card-face">
                        <img class="liquid-divinium top-left" src={liquidD}/>
                        <img class="liquid-divinium top-right" src={liquidD}/>
                        <img class="liquid-divinium bottom-left" src={liquidD}/>
                        <img class="liquid-divinium bottom-right" src={liquidD}/>
                        <img class="logo" src={logo}/>

                    </div>                
                    
                    <div class="card-front card-face">
                        <img class="liquid-divinium top-left" src={liquidD}/>
                        <img class="liquid-divinium top-right" src={liquidD}/>
                        <img class="liquid-divinium bottom-left" src={liquidD}/>
                        <img class="liquid-divinium bottom-right" src={liquidD}/>
                        <img id="speed-cola" class='perk' src={spc}></img>
                    </div>
                </div>{/*Carta Stamin Up*/}
                <div class="wrapper card ">
                
                    <div class="card-back card-face">
                        <img class="liquid-divinium top-left" src={liquidD}/>
                        <img class="liquid-divinium top-right" src={liquidD}/>
                        <img class="liquid-divinium bottom-left" src={liquidD}/>
                        <img class="liquid-divinium bottom-right" src={liquidD}/>
                        <img class="logo" src={logo}/>

                    </div>                
                    
                    <div class="card-front card-face">
                        <img class="liquid-divinium top-left" src={liquidD}/>
                        <img class="liquid-divinium top-right" src={liquidD}/>
                        <img class="liquid-divinium bottom-left" src={liquidD}/>
                        <img class="liquid-divinium bottom-right" src={liquidD}/>
                        <img id="stamin-up" class='perk' src={su}></img>
                    </div>
                </div>{/*Carta Stamin Up*/}
                <div class="wrapper card ">
                
                    <div class="card-back card-face">
                        <img class="liquid-divinium top-left" src={liquidD}/>
                        <img class="liquid-divinium top-right" src={liquidD}/>
                        <img class="liquid-divinium bottom-left" src={liquidD}/>
                        <img class="liquid-divinium bottom-right" src={liquidD}/>
                        <img class="logo" src={logo}/>

                    </div>                
                    
                    <div class="card-front card-face">
                        <img class="liquid-divinium top-left" src={liquidD}/>
                        <img class="liquid-divinium top-right" src={liquidD}/>
                        <img class="liquid-divinium bottom-left" src={liquidD}/>
                        <img class="liquid-divinium bottom-right" src={liquidD}/>
                        <img id="stamin-up" class='perk' src={su}></img>
                    </div>
                </div>{/*Carta tobstone*/}
                <div class="wrapper card ">
                
                    <div class="card-back card-face">
                        <img class="liquid-divinium top-left" src={liquidD}/>
                        <img class="liquid-divinium top-right" src={liquidD}/>
                        <img class="liquid-divinium bottom-left" src={liquidD}/>
                        <img class="liquid-divinium bottom-right" src={liquidD}/>
                        <img class="logo" src={logo}/>

                    </div>                
                    
                    <div class="card-front card-face">
                        <img class="liquid-divinium top-left" src={liquidD}/>
                        <img class="liquid-divinium top-right" src={liquidD}/>
                        <img class="liquid-divinium bottom-left" src={liquidD}/>
                        <img class="liquid-divinium bottom-right" src={liquidD}/>
                        <img id="tombstone" class='perk' src={ts}></img>
                    </div>
                </div>{/*Carta tombstone*/}
                <div class="wrapper card ">
                
                    <div class="card-back card-face">
                        <img class="liquid-divinium top-left" src={liquidD}/>
                        <img class="liquid-divinium top-right" src={liquidD}/>
                        <img class="liquid-divinium bottom-left" src={liquidD}/>
                        <img class="liquid-divinium bottom-right" src={liquidD}/>
                        <img class="logo" src={logo}/>

                    </div>                
                    
                    <div class="card-front card-face">
                        <img class="liquid-divinium top-left" src={liquidD}/>
                        <img class="liquid-divinium top-right" src={liquidD}/>
                        <img class="liquid-divinium bottom-left" src={liquidD}/>
                        <img class="liquid-divinium bottom-right" src={liquidD}/>
                        <img id="tombstone" class='perk' src={ts}></img>
                    </div>
                </div>{/*Carta widowswhine*/}
                <div class="wrapper card ">
                
                    <div class="card-back card-face">
                        <img class="liquid-divinium top-left" src={liquidD}/>
                        <img class="liquid-divinium top-right" src={liquidD}/>
                        <img class="liquid-divinium bottom-left" src={liquidD}/>
                        <img class="liquid-divinium bottom-right" src={liquidD}/>
                        <img class="logo" src={logo}/>

                    </div>                
                    
                    <div class="card-front card-face">
                        <img class="liquid-divinium top-left" src={liquidD}/>
                        <img class="liquid-divinium top-right" src={liquidD}/>
                        <img class="liquid-divinium bottom-left" src={liquidD}/>
                        <img class="liquid-divinium bottom-right" src={liquidD}/>
                        <img id="widows-wine" class='perk' src={ww}></img>
                    </div>
                </div>{/*Carta widowswhine*/}
                <div class="wrapper card ">
                
                    <div class="card-back card-face">
                        <img class="liquid-divinium top-left" src={liquidD}/>
                        <img class="liquid-divinium top-right" src={liquidD}/>
                        <img class="liquid-divinium bottom-left" src={liquidD}/>
                        <img class="liquid-divinium bottom-right" src={liquidD}/>
                        <img class="logo" src={logo}/>

                    </div>                
                    
                    <div class="card-front card-face">
                        <img class="liquid-divinium top-left" src={liquidD}/>
                        <img class="liquid-divinium top-right" src={liquidD}/>
                        <img class="liquid-divinium bottom-left" src={liquidD}/>
                        <img class="liquid-divinium bottom-right" src={liquidD}/>
                        <img id="widows-wine" class='perk' src={ww}></img>
                    </div>
                </div>



                
            {/*end of card container */}
            </div>
            <div>
                    <p id="game-info" >Flips: <span id="flips">0</span></p>
                    <button type="button" class='centerDown' onClick={reloadPage}>New Game</button>
                </div>
        </div>
    );
}
export default App;

