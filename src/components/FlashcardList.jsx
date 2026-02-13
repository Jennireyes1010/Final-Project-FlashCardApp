import React from "react";
import Flashcard from "./Flashcard";

export default function FlashcardList({ cards }) {

 

  return (
    <div>
      
      <div className="flashcard-container">
        {cards.map((card, index) => (
          <Flashcard
            key={index}
            question={card.question}
            answer={card.answer}
          />
        ))}
      </div>
    </div>
  );
}
