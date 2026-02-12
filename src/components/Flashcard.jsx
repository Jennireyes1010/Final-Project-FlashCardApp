import React, { useState } from "react";
import "./Flashcard.css";

export default function Flashcard({ question, answer }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="flashcard" onClick={() => setFlipped(!flipped)}>
      <div className={`flashcard-inner ${flipped ? "flipped" : ""}`}>
        <div className="flashcard-front">
          <p>{question}</p>
        </div>
        <div className="flashcard-back">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
}
