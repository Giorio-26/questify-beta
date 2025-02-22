import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addDoc(collection(db, "users"), { name, email });
        alert("Registration successful!");
    };

    return (
        <div style={{ textAlign: "center", padding: "50px" }}>
            <h2>Register to Track Your Progress</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Your Name" onChange={(e) => setName(e.target.value)} required />
                <input type="email" placeholder="Your Email" onChange={(e) => setEmail(e.target.value)} required />
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;
