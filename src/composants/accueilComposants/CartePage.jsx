
import { Link } from "react-router-dom";
export default function CartePage(props){


   

    
    return <div className="carte-page" >
        
        <Link className="link" to={props.path}>
            <img className="img-carte-page" src={props.srcImg} alt="image définissant la page" /> 
            <div className="text-carte">
                <h3>
                    {props.titre}
                </h3>
                <p>
                    {props.text}
                </p>
            </div>
        </Link> 
    </div>
}