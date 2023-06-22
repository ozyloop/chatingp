
import CartePage from "./CartePage"
import imgCarteFormation from "../../images/cartes/imgCarteFormation.jpeg"
export default function ListeCartes(){


   


    return <div className="liste-carte" >
        <CartePage srcImg={imgCarteFormation} titre="Munissez-vous de vos documents existants" text="Ces documents vont nous être utiles pour générer ce dont vous avez besoin." path="/ObjectifFormation"/>
        <CartePage srcImg={imgCarteFormation} titre="Parlez-nous de votre formation " text="Vous serez amené à répondre à quelques questions sur votre formation pour que les documents générés sous les plus pertinents possibles." path="/FormDeDebut"/>
        <CartePage srcImg={imgCarteFormation} titre="Ajustez les documents à votre guise" text="Une fois vos documents générés, vous avez la possibilité de les modifier ou bien de recommencer pour avoir quelque chose qui vous corresponds à 100%." path="/FormDeDebut"/>
    
    </div>
}