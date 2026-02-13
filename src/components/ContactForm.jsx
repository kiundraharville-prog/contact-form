import { useState } from "react";
import "./ContactForm.css";

function ContactForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    alert(`Thank you, ${name}! Your message: ${message} has been sent.`);

    setName("");
    setMessage("");
  }

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2 className="form-title">Contact Me 💌</h2>

      <input
        className="form-input"
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="form-input"
        type="text"
        placeholder="Your Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button className="form-button" type="submit">
        Send 💖
      </button>
    </form>
  );
}

export default ContactForm;


