import React, { useState, useRef } from "react";
import "../Pages/Contact/Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";

// Here we import a helper function that will check if the email is valid
import { validateEmail } from "../../utils/helpers";
import emailjs from "@emailjs/browser";

function Form() {
  const form = useRef();
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  // TODO: Create a password variable and a function "setPassword" using useState
  const [message, setMessage] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    // TODO: Add an else statement to the end that will set the password to the value of 'inputValue'

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !name) {
      setErrorMessage("Email or name not entered correctly!");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }

    // If successful, we want to clear out the input after registration.
    setName("");
    // TODO: Set the password back to an empty string after the user clicks submit
    setMessage("");
    setEmail("");
    const messageSent = document.querySelector(".messageSent");
    if (email && name && message) {
      messageSent.classList.remove("none");
      messageSent.classList.add("show");
      messageSent.textContent = "Message Sent!";
    }
    emailjs
      .sendForm(
        "service_3kqt04i",
        "template_xioxfpa",
        form.current,
        "kvMnIIAD_dh1CLzw8"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className="contactPage">
        <form className="form" ref={form}>
          <h2>Reach Out!</h2>
          <input
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="Name"
          />
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="Email"
          />
          <input
            value={message}
            name="message"
            onChange={handleInputChange}
            type="text"
            placeholder="Enter Message"
          />
          <button
            className="submitButton btn-outline-light btn"
            type="button"
            onClick={handleFormSubmit}
          >
            Submit
          </button>
          <p className="messageSent">Message Sent!</p>
          {errorMessage && <p className="error-text">{errorMessage}</p>}
        </form>
        <div className="contactLinks">
          <h2>My pages:</h2>
          <ul>
            <li>
              <a href="https://github.com/dylangriess" target="_blank">
                <AiOutlineGithub /> Github
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/dylangriess/"
                target="_blank"
              >
                <AiOutlineLinkedin /> LinkedIn
              </a>
            </li>
            <li>
              <a href="mailto:dylangriess@gmail.com" target="_blank">
                <MdOutlineEmail /> Email
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Form;
