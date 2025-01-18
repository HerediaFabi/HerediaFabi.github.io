// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  function clickSound() {
    document.querySelector("#clickSound").play();
  }
  return (
    <div className="container" onClick={clickSound}>
      <audio id="clickSound">
        <source src="./click.mp3" type="audio/mpeg" />
      </audio>
      <h1 className="title">Hola, soy Fabi</h1>
      <p className="text">Ésta página está bajo construcción :(</p>
      <img
        src="https://media.tenor.com/MRCIli40TYoAAAAj/under-construction90s-90s.gif"
        alt=""
        width="150px"
      />
      <p className="text">Pero muy pronto estará disponible :)</p>
      <span className="text">
        Contador de vistas:
        <a href="https://www.freecounterstat.com" title="website counter">
          <img
            className="counter"
            src="https://counter6.optistats.ovh/private/freecounterstat.php?c=a8ju6sgdhk5zcl4eb5kexdccqph7jgsk"
            border="0"
            title="website counter"
            alt="website counter"
          />
        </a>
      </span>
      <div id="sfca8ju6sgdhk5zcl4eb5kexdccqph7jgsk"></div>
    </div>
  );
}

export default App;
