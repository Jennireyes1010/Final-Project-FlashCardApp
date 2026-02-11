import React, { useState } from "react";
import FlashcardList from "./components/FlashcardList";
import AddCardForm from "./components/AddCardForm";
import "./styles.css";

export default function App() {
  const [cards, setCards] = useState([
    { question: "What is React?", answer: "A JavaScript library for building UIs." },
    { question: "What is JSX?", answer: "A syntax extension for JavaScript." }
  ]);

  const addCard = (card) => setCards([...cards, card]);

  return (
    <div className="App">
      <h1>Flashcard Study App</h1>
      <AddCardForm addCard={addCard} />
      <FlashcardList cards={cards} />
    </div>
  );
}
