import React from "react";
import "./style.css";

function Header() {
  return (
    <header className="header">
      <h1>Clicky</h1>
      <h2>The Office memory game!</h2>
      <h2>
       This game is the best way to test your memory! 
      </h2>
    </header>
  );
}

export default Header;
// To begin take a look at the images in the squares.  Then simply click on an image, continue to click on the images until you have clicked every character.  If you click on the same character more than once during a game you will get an alert and you will need to restart your round.  Your points will be displayed at the top of this screen.  