
import React from 'react';
import { render } from 'redocx';
import MyDocument from './GenerateDoc'; // Import the MyDocument component from the file

function DocumentButton() {
  const handleClick = () => {
    render(<MyDocument />, `${__dirname}/example.docx`);
  };

  return (
    <button onClick={handleClick}>
      Generate Document
    </button>
  );
}

export default DocumentButton;

