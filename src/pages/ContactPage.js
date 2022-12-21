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
    <div className="service-top container align-self-center">
      <div className="row text-center">
        <div className="title col-12 text-muted">Let's Chat!</div>

        <div className="sub col-12">
          Looking for a perfect Landlord or Tenants?
          <br />
          Say no More!
          <br />
          We are at you service.
        </div>

        <form onSubmit={onSubmit} className="col-12">


          <div className="row justify-content-center">
            <div className="side col-12 col-md-6 col-lg-4">
              <label htmlFor="name"></label>
              <input
                className="contactFormInput"
                type="text"
                placeholder="Enter Your Name"
                name="name"
                required
                value={name}
                onChange={onChange}
              />
            </div>

            <div className="side col-12 col-md-6 col-lg-4">
              <label htmlFor="name"></label>
              <input
                className="contactFormInput"
                type="email"
                placeholder="Enter Email Address"
                name="email"
                required
                value={email}
                onChange={onChange}
              />
            </div>

            <div className="textarea col-12 col-lg-8 mt-2">
              <label htmlFor="message"></label>
              <textarea
                className="contactFormInput"
                type="textarea"
                id="message"
                placeholder="What's on your mind?"
                name="message"
                required
                value={message}
                onChange={onChange}
              />
            </div>
          </div>
          <button className="contactTeamButton" type="submit">{loading ? "" : buttonMessage}</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
