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
    { question: "What is a prop?", answer: "A way to pass data to components." },
    { question: "What is the virtual DOM?", answer: "A lightweight copy of the real DOM." },
    { question: "What is a hook?", answer: "A function that lets you use state and other React features in functional components." },
    { question: "What is the useEffect hook?", answer: "A hook that lets you perform side effects in functional components." },
    { question: "What is the useState hook?", answer: "A hook that lets you add state to functional components." }
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