import React, { useState } from "react";
import "../css/ContactPage.css";

const Contact = () => {
  const initialForm = {
    name: "",
    email: "",
    message: "",
  };

  const [formState, setFormState] = useState(initialForm);
  const { name, email, message } = formState;
  const [buttonMessage, setButtonMessage] = useState("Send");
  const [loading, setIsLoading] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
    setTimeout(() => {
      setIsLoading(false);
      setButtonMessage("Message Sent!");
      setFormState(initialForm);
    }, 1000);
  };

  const onChange = (event) => {
    const { name, value } = event.target;

    setFormState({ ...formState, [name]: value });
  };

  return (
    <div className="service-top">
      <div className="title">Let's Chat!</div>
      <div className="sub">
        Looking for a perfect Landlord or Tenant/s? Say no More!
        <br />
        We are at you service.
      </div>
      <form onSubmit={onSubmit}>
        <div className="input-row">
          <div className="side">
            <label htmlFor="name"></label>
            <input
              type="text"
              placeholder="Enter Your Name"
              name="name"
              required
              value={name}
              onChange={onChange}
            />
          </div>
          <div className="side">
            <label htmlFor="name"></label>
            <input
              type="email"
              placeholder="Enter Email Address"
              name="email"
              required
              value={email}
              onChange={onChange}
            />
          </div>
        </div>
        <div className="textarea">
          <label htmlFor="message"></label>
          <textarea
            type="textarea"
            id="message"
            placeholder="What's on your mind?"
            name="message"
            required
            value={message}
            onChange={onChange}
          />
        </div>
        <button type="submit">{loading ? "" : buttonMessage}</button>
      </form>
    </div>
  );
};

export default Contact;
