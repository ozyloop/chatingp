import { useState } from "react";

export default function AjoutChoix({ handleCallBack }) {
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
        className="contact-textbox"
        onChange={inputHandler}
        onKeyPress={handleKeyPress} // Call handleKeyPress on key press
        type="text"
        value={inputText}
      />
      <button onClick={addChoix}>ajouter à la liste</button>
    </div>
  );
}