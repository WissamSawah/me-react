import React, { Component } from 'react';
import wissam from './images/wissam.jpg';

class Me extends Component {
  render() {
    return (
      <main>
        <h1>Min me-app</h1>
        <img className="me" src={wissam} alt="Me" />
        <p>Hej! mitt namn är Wissam Sawah. Jag är 24 år gammal, född och uppvuxen i Syrien, Damaskus. Jag flyttade till Sverige i slutet av oktober 2015 och har bott i stockholm/Lidingö sedan dess.
        Jag lärde mig språket i ungefär ett år, och jobbade som butikssäljare i en kläddbutik i Stockholm. Om jag skall nämna någon hobby så får det bli att gå på gymmet och kolla på serier.</p>
        <p>När det gäller intresse så har jag ett stort intresse för datorer och programmering. När jag blir klar med utbildningen vill jag jobba som en full-stack eller webbutvecklare.</p>

      </main>
    );
  }
}
export default Me;