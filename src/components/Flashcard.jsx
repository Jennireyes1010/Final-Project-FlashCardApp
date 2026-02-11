import React, { useState } from "react";

export default function Flashcard({ question, answer }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`flashcard ${flipped ? "flipped" : ""}`}
      onClick={() => setFlipped(!flipped)}
    >
      {flipped ? <p>{answer}</p> : <p>{question}</p>}
    </div>
  );
}
