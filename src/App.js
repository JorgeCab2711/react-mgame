import React from 'react';
import script from './script.js';

// Imports de imagenes
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

function reloadPage() {
  window.location.reload(false);
}

function App() {
  return (
    <div>
      <h1 id="main-title">COD Zombies Memory Game</h1>
      <div id="cardContainer">
        <script src="/script.js" />
        {/* Carta Jugger */}
        <div className="wrapper card">
          <div className="card-back card-face">
            <img className="liquid-divinium top-left" src={liquidD} />
            <img className="liquid-divinium top-right" src={liquidD} />
            <img className="liquid-divinium bottom-left" src={liquidD} />
            <img className="liquid-divinium bottom-right" src={liquidD} />
            <img className="logo" src={logo} />
          </div>

          <div className="card-front card-face">
            <img className="liquid-divinium top-left" src={liquidD} />
            <img className="liquid-divinium top-right" src={liquidD} />
            <img className="liquid-divinium bottom-left" src={liquidD} />
            <img className="liquid-divinium bottom-right" src={liquidD} />
            <img id="jugger" className="perk" src={jugger} />
          </div>
        </div>

        {/* Carta Jugger */}
        <div className="wrapper card ">
          <div className="card-back card-face">
            <img className="liquid-divinium top-left" src={liquidD} />
            <img className="liquid-divinium top-right" src={liquidD} />
            <img className="liquid-divinium bottom-left" src={liquidD} />
            <img className="liquid-divinium bottom-right" src={liquidD} />
            <img className="logo" src={logo} />
          </div>

          <div className="card-front card-face">
            <img className="liquid-divinium top-left" src={liquidD} />
            <img className="liquid-divinium top-right" src={liquidD} />
            <img className="liquid-divinium bottom-left" src={liquidD} />
            <img className="liquid-divinium bottom-right" src={liquidD} />
            <img id="jugger" className="perk" src={jugger} />
          </div>
        </div>

        {/* Carta Double tap */}
        <div className="wrapper card ">
          <div className="card-back card-face">
            <img className="liquid-divinium top-left" src={liquidD} />
            <img className="liquid-divinium top-right" src={liquidD} />
            <img className="liquid-divinium bottom-left" src={liquidD} />
            <img className="liquid-divinium bottom-right" src={liquidD} />
            <img className="logo" src={logo} />
          </div>

          <div className="card-front card-face">
            <img className="liquid-divinium top-left" src={liquidD} />
            <img className="liquid-divinium top-right" src={liquidD} />
            <img className="liquid-divinium bottom-left" src={liquidD} />
            <img className="liquid-divinium bottom-right" src={liquidD} />
            <img id="double-tap" className="perk" src={dt} />
          </div>
        </div>

        {/* Carta Double tap */}
        <div className="wrapper card ">
          <div className="card-back card-face">
            <img className="liquid-divinium top-left" src={liquidD} />
            <img className="liquid-divinium top-right" src={liquidD} />
            <img className="liquid-divinium bottom-left" src={liquidD} />
            <img className="liquid-divinium bottom-right" src={liquidD} />
            <img className="logo" src={logo} />
          </div>

          <div className="card-front card-face">
            <img className="liquid-divinium top-left" src={liquidD} />
            <img className="liquid-divinium top-right" src={liquidD} />
            <img className="liquid-divinium bottom-left" src={liquidD} />
            <img className="liquid-divinium bottom-right" src={liquidD} />
            <img id="double-tap" className="perk" src={dt} />
          </div>
        </div>
        {/* Carta Mule kick */}
        <div className="wrapper card ">
          <div className="card-back card-face">
            <img className="liquid-divinium top-left" src={liquidD} />
            <img className="liquid-divinium top-right" src={liquidD} />
            <img className="liquid-divinium bottom-left" src={liquidD} />
            <img className="liquid-divinium bottom-right" src={liquidD} />
            <img className="logo" src={logo} />
          </div>

          <div className="card-front card-face">
            <img className="liquid-divinium top-left" src={liquidD} />
            <img className="liquid-divinium top-right" src={liquidD} />
            <img className="liquid-divinium bottom-left" src={liquidD} />
            <img className="liquid-divinium bottom-right" src={liquidD} />
            <img id="mule-kick" className="perk" src={mk} />
          </div>
        </div>
        {/* Carta Mule kick */}
        <div className="wrapper card ">
          <div className="card-back card-face">
            <img className="liquid-divinium top-left" src={liquidD} />
            <img className="liquid-divinium top-right" src={liquidD} />
            <img className="liquid-divinium bottom-left" src={liquidD} />
            <img className="liquid-divinium bottom-right" src={liquidD} />
            <img className="logo" src={logo} />
          </div>

          <div className="card-front card-face">
            <img className="liquid-divinium top-left" src={liquidD} />
            <img className="liquid-divinium top-right" src={liquidD} />
            <img className="liquid-divinium bottom-left" src={liquidD} />
            <img className="liquid-divinium bottom-right" src={liquidD} />
            <img id="mule-kick" className="perk" src={mk} />
          </div>
        </div>
        {/* Carta Quick revive */}
        <div className="wrapper card ">
          <div className="card-back card-face">
            <img className="liquid-divinium top-left" src={liquidD} />
            <img className="liquid-divinium top-right" src={liquidD} />
            <img className="liquid-divinium bottom-left" src={liquidD} />
            <img className="liquid-divinium bottom-right" src={liquidD} />
            <img className="logo" src={logo} />
          </div>

          <div className="card-front card-face">
            <img className="liquid-divinium top-left" src={liquidD} />
            <img className="liquid-divinium top-right" src={liquidD} />
            <img className="liquid-divinium bottom-left" src={liquidD} />
            <img className="liquid-divinium bottom-right" src={liquidD} />
            <img id="quick-revive" className="perk" src={qr} />
          </div>
        </div>
        {/* Carta Quick revive */}
        <div className="wrapper card ">
          <div className="card-back card-face">
            <img className="liquid-divinium top-left" src={liquidD} />
            <img className="liquid-divinium top-right" src={liquidD} />
            <img className="liquid-divinium bottom-left" src={liquidD} />
            <img className="liquid-divinium bottom-right" src={liquidD} />
            <img className="logo" src={logo} />
          </div>

          <div className="card-front card-face">
            <img className="liquid-divinium top-left" src={liquidD} />
            <img className="liquid-divinium top-right" src={liquidD} />
            <img className="liquid-divinium bottom-left" src={liquidD} />
            <img className="liquid-divinium bottom-right" src={liquidD} />
            <img id="quick-revive" className="perk" src={qr} />
          </div>
        </div>
        {/* Carta Speed cola */}
        <div className="wrapper card ">
          <div className="card-back card-face">
            <img className="liquid-divinium top-left" src={liquidD} />
            <img className="liquid-divinium top-right" src={liquidD} />
            <img className="liquid-divinium bottom-left" src={liquidD} />
            <img className="liquid-divinium bottom-right" src={liquidD} />
            <img className="logo" src={logo} />
          </div>

          <div className="card-front card-face">
            <img className="liquid-divinium top-left" src={liquidD} />
            <img className="liquid-divinium top-right" src={liquidD} />
            <img className="liquid-divinium bottom-left" src={liquidD} />
            <img className="liquid-divinium bottom-right" src={liquidD} />
            <img id="speed-cola" className="perk" src={spc} />
          </div>
        </div>
        {/* Carta Speed cola */}
        <div className="wrapper card ">
          <div className="card-back card-face">
            <img className="liquid-divinium top-left" src={liquidD} />
            <img className="liquid-divinium top-right" src={liquidD} />
            <img className="liquid-divinium bottom-left" src={liquidD} />
            <img className="liquid-divinium bottom-right" src={liquidD} />
            <img className="logo" src={logo} />
          </div>

          <div className="card-front card-face">
            <img className="liquid-divinium top-left" src={liquidD} />
            <img className="liquid-divinium top-right" src={liquidD} />
            <img className="liquid-divinium bottom-left" src={liquidD} />
            <img className="liquid-divinium bottom-right" src={liquidD} />
            <img id="speed-cola" className="perk" src={spc} />
          </div>
        </div>
        {/* Carta Stamin Up */}
        <div className="wrapper card ">
          <div className="card-back card-face">
            <img className="liquid-divinium top-left" src={liquidD} />
            <img className="liquid-divinium top-right" src={liquidD} />
            <img className="liquid-divinium bottom-left" src={liquidD} />
            <img className="liquid-divinium bottom-right" src={liquidD} />
            <img className="logo" src={logo} />
          </div>

          <div className="card-front card-face">
            <img className="liquid-divinium top-left" src={liquidD} />
            <img className="liquid-divinium top-right" src={liquidD} />
            <img className="liquid-divinium bottom-left" src={liquidD} />
            <img className="liquid-divinium bottom-right" src={liquidD} />
            <img id="stamin-up" className="perk" src={su} />
          </div>
        </div>
        {/* Carta Stamin Up */}
        <div className="wrapper card ">
          <div className="card-back card-face">
            <img className="liquid-divinium top-left" src={liquidD} />
            <img className="liquid-divinium top-right" src={liquidD} />
            <img className="liquid-divinium bottom-left" src={liquidD} />
            <img className="liquid-divinium bottom-right" src={liquidD} />
            <img className="logo" src={logo} />
          </div>

          <div className="card-front card-face">
            <img className="liquid-divinium top-left" src={liquidD} />
            <img className="liquid-divinium top-right" src={liquidD} />
            <img className="liquid-divinium bottom-left" src={liquidD} />
            <img className="liquid-divinium bottom-right" src={liquidD} />
            <img id="stamin-up" className="perk" src={su} />
          </div>
        </div>
        {/* Carta tobstone */}
        <div className="wrapper card ">
          <div className="card-back card-face">
            <img className="liquid-divinium top-left" src={liquidD} />
            <img className="liquid-divinium top-right" src={liquidD} />
            <img className="liquid-divinium bottom-left" src={liquidD} />
            <img className="liquid-divinium bottom-right" src={liquidD} />
            <img className="logo" src={logo} />
          </div>

          <div className="card-front card-face">
            <img className="liquid-divinium top-left" src={liquidD} />
            <img className="liquid-divinium top-right" src={liquidD} />
            <img className="liquid-divinium bottom-left" src={liquidD} />
            <img className="liquid-divinium bottom-right" src={liquidD} />
            <img id="tombstone" className="perk" src={ts} />
          </div>
        </div>
        {/* Carta tombstone */}
        <div className="wrapper card ">
          <div className="card-back card-face">
            <img className="liquid-divinium top-left" src={liquidD} />
            <img className="liquid-divinium top-right" src={liquidD} />
            <img className="liquid-divinium bottom-left" src={liquidD} />
            <img className="liquid-divinium bottom-right" src={liquidD} />
            <img className="logo" src={logo} />
          </div>

          <div className="card-front card-face">
            <img className="liquid-divinium top-left" src={liquidD} />
            <img className="liquid-divinium top-right" src={liquidD} />
            <img className="liquid-divinium bottom-left" src={liquidD} />
            <img className="liquid-divinium bottom-right" src={liquidD} />
            <img id="tombstone" className="perk" src={ts} />
          </div>
        </div>
        {/* Carta widowswhine */}
        <div className="wrapper card ">
          <div className="card-back card-face">
            <img className="liquid-divinium top-left" src={liquidD} />
            <img className="liquid-divinium top-right" src={liquidD} />
            <img className="liquid-divinium bottom-left" src={liquidD} />
            <img className="liquid-divinium bottom-right" src={liquidD} />
            <img className="logo" src={logo} />
          </div>

          <div className="card-front card-face">
            <img className="liquid-divinium top-left" src={liquidD} />
            <img className="liquid-divinium top-right" src={liquidD} />
            <img className="liquid-divinium bottom-left" src={liquidD} />
            <img className="liquid-divinium bottom-right" src={liquidD} />
            <img id="widows-wine" className="perk" src={ww} />
          </div>
        </div>
        {/* Carta widowswhine */}
        <div className="wrapper card ">
          <div className="card-back card-face">
            <img className="liquid-divinium top-left" src={liquidD} />
            <img className="liquid-divinium top-right" src={liquidD} />
            <img className="liquid-divinium bottom-left" src={liquidD} />
            <img className="liquid-divinium bottom-right" src={liquidD} />
            <img className="logo" src={logo} />
          </div>

          <div className="card-front card-face">
            <img className="liquid-divinium top-left" src={liquidD} />
            <img className="liquid-divinium top-right" src={liquidD} />
            <img className="liquid-divinium bottom-left" src={liquidD} />
            <img className="liquid-divinium bottom-right" src={liquidD} />
            <img id="widows-wine" className="perk" src={ww} />
          </div>
        </div>

        {/* end of card container */}
      </div>
      <div>
        <p id="game-info">
          Flips: <span id="flips">0</span>
        </p>
        <button type="button" className="centerDown" onClick={reloadPage}>
          New Game
        </button>
      </div>
    </div>
  );
}
export default App;
