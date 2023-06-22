import { useState } from "react";
import playButton from "../../images/playButton.svg"

export default function CarteBesoin(props) {
const [check, setCheck]=useState(false);
const [styleDot, setStyleDot]=useState("custom-checkbox unchecked")
function handleCheck()
{
  console.log("test")
    setCheck(!check);
    if(check){
      setStyleDot("custom-checkbox checked");
    }
    else{
      setStyleDot("custom-checkbox unchecked");

    }
}
    return <div className="carte-besoin" onClick={handleCheck}>
      <div className="haut-carte">
      <div className="text-carte">
        <h3>Document {props.index}</h3>
        <p>{props.description}</p>
        </div>
        <div className={styleDot} />
      </div>
        
      <button> <img src={playButton}/> <p>Voir la vidéo explicative</p></button>
    </div> ;
    
  }