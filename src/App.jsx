import React, { useState } from "react";
import FlashcardList from "./components/FlashcardList";
import AddCardForm from "./components/AddCardForm";
import "./styles.css";

export default function App() {
  const [cards, setCards] = useState([
    { question: "What is React?", answer: "A JavaScript library for building UIs." },
    { question: "What is JSX?", answer: "A syntax extension for JavaScript." },
    { question: "What is a component?", answer: "Reusable piece of UI in React." },
    { question: "What is state?", answer: "A way to manage data in a component." },
    { question: "What is a prop?", answer: "A way to pass data to components." }
  ]);

  
  const addCard = (card) => {
    setCards((prevCards) => [...prevCards, card]); 
  };

  return (
  <div className="App">
    <h1 className="app-title">Flashcard Study App</h1>
    <AddCardForm addCard={addCard} />
    <FlashcardList cards={cards} />
  </div>
);
}