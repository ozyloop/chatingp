import { useState } from "react";


export default function ListeChoix(props) {
    
    

    return <div>
        <p>{props.text}</p>
        <input type="checkbox" disabled/>
    </div>
}