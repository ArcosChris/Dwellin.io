import React, { useState } from "react";

const Contact = () => {
  const initialForm = {
    name: "",
    email: "",
    message: "",
  };

  const [formState, setFormState] = useState(initialForm);
  const { name, email, message } = formState;
  const onSubmit = (event) => {};

  const onChange = (event) => {};

  return (
    <div className="service-top">
      <div className="title">Let's Chat!</div>
      <div className="sub">
        Interested on our different services? We're here to help you to find
        your perfect match!
        <br />
        Please feel free to reach out.
      </div>
      <form onSubmit={onSubmit}>
        <div className="side">
          <label htmlFor="name">Your Name</label>
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
          <label htmlFor="name">Your Name</label>
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
          <label htmlFor="name">Your Email Address</label>
          <input
            type="email"
            placeholder="Enter Email Address"
            name="email"
            required
            value={email}
            onChange={onChange}
          />
        </div>
        <div className="textarea">
          <label htmlFor="message">Message</label>
          <textarea
            type="textarea"
            id="textarea"
            placeholder="What's on your mind?"
            name="message"
            required
            value={message}
            onChange={onChange}
          />
        </div>
      </form>
    </div>
  );
};

export default Contact;
