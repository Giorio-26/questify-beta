import React, { useState } from "react";

function Game() {
    const [score, setScore] = useState(0);
    const questions = [
        { question: "What is 2 + 2?", answer: "4" },
        { question: "What is the capital of France?", answer: "Paris" },
    ];

    const handleAnswer = (event, correctAnswer) => {
        if (event.target.value === correctAnswer) {
            setScore(score + 1);
        }
    };

    return (
        <div style={{ textAlign: "center", padding: "50px" }}>
            <h1>Game Time!</h1>
            {questions.map((q, index) => (
                <div key={index}>
                    <p>{q.question}</p>
                    <input type="text" onBlur={(e) => handleAnswer(e, q.answer)} />
                </div>
            ))}
            <h2>Score: {score}</h2>
        </div>
    );
}

export default Game;
