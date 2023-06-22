import CarteBesoin from "../../composants/PageBesoin/CarteBesoin";
import "../../css/etapeForm.css"
export default function PageBesoin(props) {
 

    function NextPage()
    {
        props.handleCallback(1);
    }
  return <div className="page-besoin">
    <div className="titre">
        <h1>
            De Quel(s) documents avez vous besoin ?
        </h1>
        <h2>
            Séléctionnez le ou les documents(s) que vous souhaitez générer.
        </h2>
    </div>
    
    <form>
        <CarteBesoin index="1" description="Description"/>
        <CarteBesoin index="2" description="Description"/>
        <CarteBesoin index="3" description="Description"/>
        <CarteBesoin index="4" description="Description"/>
    </form>

    <button className="next-button" onClick={NextPage}> Suivant </button>
  </div> ;
}