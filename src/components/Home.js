import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div style={{ textAlign: "center", padding: "50px" }}>
            <h1>Welcome to QuestiFy</h1>
            <p>Complete fun challenges and grow your skills!</p>
            <Link to="/challenges">
                <button>Start Now</button>
            </Link>
        </div>
    );
}

export default Home;
