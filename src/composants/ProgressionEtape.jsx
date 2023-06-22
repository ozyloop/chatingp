import { useState } from "react";
import checkIcon from "../images/design/check.svg"

export default function ProgressionEtape(props) {

const [status, setStatus] = useState(props.status);

let statusContent;

function HandleStatus(){
    if(status==="termine"){
        statusContent =  <div>
            <div className="progression-colored termine">
        <div className="container-img">
        
                <img src={checkIcon}/>
            </div>
            <div className="progression-div">

            </div>
        </div>
        <div className="block-text-etape">
            <h3>Etape{props.index}</h3>
            <h4>{props.text}</h4>
            <div className="champ-termine"><p>terminé</p></div>
        </div>
    </div>
    }else if (status==="cours"){
        statusContent =  <div>
        <div className="progression-colored cours">
            <div className="container-img">
                <img src={props.imgSrc}/>
            </div>
            <div className="progression-div">

            </div>
        </div>
        <div className="block-text-etape">
            <h3>Etape{props.index}</h3>
            <h4>{props.text}</h4>
            <div className="champ-cours"><p>En cours</p></div>
        </div>
    </div>
    }else {
        statusContent =  <div>
        <div className="progression-colored venir">
            <div className="container-img">
                <img src={props.imgSrc}/>
            </div>
            <div className="progression-div">

            </div>
        </div>
        <div className="block-text-etape">
            <h3>Etape{props.index}</h3>
            <h4>{props.text}</h4>
            <div className="champ-venir"><p>A venir</p></div>
        </div>
    </div>
    }
}
HandleStatus();

    return <div className="etape-div">
        {statusContent}
    </div> ;
  }