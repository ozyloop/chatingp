

import Accueil from "./pages/Accueil";
import ObjectifFormation from "./pages/ObjectiFormation";
import FormDeDebut from "./pages/FormDeDebut";
import EtapeForm from "./pages/EtapesForm";
import NavBar from "./composants/navBar/NavBar"
import { Route, Routes} from "react-router-dom";
import Footer from "./composants/footer/footer"




function App() {




    
    return (
        <div>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Accueil/>} />
                <Route path="/ObjectifFormation" element={<ObjectifFormation/>} />
                <Route path="/FormDeDebut" element={<FormDeDebut/>} />
                <Route path="/EtapeForm" element={<EtapeForm/>} />
                
           
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;


