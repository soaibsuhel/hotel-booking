import React, { useState } from 'react';
import { db } from "../firebase";
import "../App.css";

const Feedbacks = () => {
    const [photoName, setPhotoName] = useState("");
    const [email, setEmail] = useState("");
    const [feedback, setFeedback] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        db.collection('feedbacks').add({
            photoName: photoName,
            email: email,
            feedback: feedback,
        })
            .then(() => {
                alert("Feedback Submited!")
            })
            .catch((error) => {
                alert(error.feedback);
            });
        setPhotoName("");
        setEmail("");
        setFeedback("");
    };

    return (
        <div className="feedbacks">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Leave your Order</h1> <hr /> <br />

                <label>Order Name</label>
                <input type="text" value={photoName} onChange={(e) => setPhotoName(e.target.value)} placeholder="Type the photo name....." /> <br /> <br />

                <label>Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Type your email....." /><br /><br />

                <label>Room Details</label>
                <textarea value={feedback} onChange={(e) => setFeedback(e.target.value)} placeholder="Type your valuable Feedback....."></textarea><br /><br />

                <button type="submit">Order</button>
            </form>
        </div >
    )
}

export default Feedbacks;
