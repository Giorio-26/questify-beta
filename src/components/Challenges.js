import React from "react";
import { Link } from "react-router-dom";

const challenges = ["Tech", "Art", "Business"];

function Challenges() {
    return (
        <div style={{ textAlign: "center", padding: "50px" }}>
            <h1>Choose Your Challenge</h1>
            {challenges.map((challenge, index) => (
                <div key={index}>
                    <Link to="/game">
                        <button>{challenge}</button>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default Challenges;
