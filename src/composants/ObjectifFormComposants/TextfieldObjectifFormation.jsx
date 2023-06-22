import { useState } from "react";

export default function TextfieldObjectifFormation({ handleCallBack }) {
  const [inputText, setInputText] = useState("");
  const [ajout, setAjout] = useState([]);

  function addChoix() {
    const selectedOption = inputText.trim();
    if (selectedOption !== "") {
      handleCallBack(selectedOption);
    }
    setInputText("");
  }

  function inputHandler(e) {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  }

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      addChoix();
    }
  }

  return (
    <div>
      <input
        className="form-textbox"
        onChange={inputHandler}
        onKeyPress={handleKeyPress} // Call handleKeyPress on key press
        type="text"
        value={inputText}
      />
      <input type="button" value="ajouter à la liste" onClick={addChoix} />
    </div>
  );
}