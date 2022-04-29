import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import { SketchPicker } from "react-color";
import "./input.css";

function Input() {
  const [novotexto, setNovotexto] = useState("");
  const [cor, setCor] = useState();
  const [fontcolor,setFontcolor] = useState();

  function Enviatexto(e) {
    console.log(e.target.value);
    setNovotexto(e.target.value);
  }
  function handleClick(e) {
    console.log(e.target.value);
    setCor(e.target.value);
  }
  function changefont(e) {
    console.log(e.target.value);
     setFontcolor(e.target.value);
  }

  return (
    <div className="container-input">
      <input className="input" value={novotexto} onChange={Enviatexto}></input>
      <div className="background-color">
        <label>Background</label>
        <input type="color" onChange={handleClick}></input>
      </div>
   
      <div className="background-font">
        <label>Font Color</label>
        <input type="color" onChange={changefont}></input>
      </div>

      <div
        className="conteudo-digitado"
        style={{
          backgroundColor: cor,
          color:fontcolor
        }}
      >
        <div className="corMarquee">
        <marquee>{novotexto}</marquee>{" "}
        </div>
 
      </div>
    </div>
  );
}

export default Input;
