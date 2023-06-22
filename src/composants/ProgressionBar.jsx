import ProgressionEtape from "./ProgressionEtape"
import ProgressionEtape2 from "./ProgressionEtape2"
import imgEtape1 from "../images/design/etape1.svg"
import imgEtape2 from "../images/design/etape2.svg"
import imgEtape3 from "../images/design/etape3.svg"
import imgEtape4 from "../images/design/etape4.svg"
import { useState } from "react";

export default function ProgressionBar(props) {

  const [listStatus, setListStatus]  = useState(["termine", "cours", "venir", "venir"])


    return <div className="progression-bar">
        <ProgressionEtape status={listStatus[0]} imgSrc={imgEtape1} index={1} text="contenue"/>
        <ProgressionEtape status={listStatus[1]} imgSrc={imgEtape2} index={2} text="contenue"/>
        <ProgressionEtape status={listStatus[2]} imgSrc={imgEtape3} index={3} text="contenue"/>
        <ProgressionEtape2 status={listStatus[3]} imgSrc={imgEtape4} index={4} text="contenue" />
    </div> ;
  }