import { useState } from "react";


export default function Niveau(props) {
    const [coche, setCoche] = useState("débutant");

    function addButton(event) {
        const selectedOption = event.target.value;
        setCoche(selectedOption);
        
      }
      props.handleCallBack(coche);


    return <select className="niveau-boutton" multiple={false} value={coche} onChange={addButton}>
    <option value="débutant">débutant</option>
        <option value="intermédiaire">intermédiaire</option>
        <option value="expert">expert</option>

    </select>
}