import React from "react";
import Flashcard from "./Flashcard";

export default function FlashcardList({ cards }) {

  const shuffleDeck = () => {
    cards.sort(() => Math.random() - 0.5);
  };

  return (
    <div>
      <button onClick={shuffleDeck}>Shuffle Cards</button>
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
