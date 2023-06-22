
import imgCroix from "../../images/croix.svg"


export default function Croix(props) {
    
    function delList(){
        props.method(props.list.filter((option) => option !== props.var));
    }

    return <div onClick={delList}>
        <img src={imgCroix} alt="svg d'une croix"/>
    </div>
}