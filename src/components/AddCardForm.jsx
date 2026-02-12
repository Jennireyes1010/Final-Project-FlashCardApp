import React, { useState } from "react";

export default function AddCardForm({ addCard }) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!question.trim() || !answer.trim()) return; 

    addCard({ question, answer }); 
    setQuestion(""); 
    setAnswer("");
  };

  return (
    <form onSubmit={handleSubmit} className="add-card-form">
      <input
        type="text"
        placeholder="Question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <input
        type="text"
        placeholder="Answer"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />
      <button type="submit">Add Card</button>
    </form>
  );
}
