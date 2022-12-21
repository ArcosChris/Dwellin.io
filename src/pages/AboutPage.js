import React from "react";
import Larry from "../assets/Larry.png";
import Veronica from "../assets/Veronica.png";
import Chris from "../assets/Chris.png";
// import "./App.cs";
import {
  Container,
  Image,
  Button,
  Card,
} from "react-bootstrap";
import "../css/AboutPage.css";
// import "boostrap/dist/css/bootstrap.min.css";

const AboutPage = () => {
  return (
    <Container className="my-3">
      <div className="row px-4 mb-5 my-3">
        <div className="col-12 col-lg-7">
          <Image
            className="foyer"
            src="https://images2.dwell.com/photos/6063391372700811264/6404398576760057856/original.jpg?auto=format&q=35&w=960"
            fluid
            rounded
          />
        </div>

        <div className="col-12 col-lg-5">
          <div style={{ position: 'relative', top: '40%', transform: 'translateY(-50%)' }}>
            <h1 className="font-weight-light my-4 text-center pt-3">Hi! We're Dwellinn.io</h1>
            <p className="mt-4 about-us-text">
              We're a small veteran owned company that continually serves our
              community by creating a customer centric mindset. We guarantee the
              best match for both our tenants and landlords.
            </p>
            <p className="mt-4 about-us-text">
              Our comprehensive services will help you navigate the nuances of
              renting a property. We believe staying competitive while
              prioritizing our clients needs.
            </p>
            <div className="text-center">
              <Button variant="outline-dark" href="contactteam">Email Us</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        <Card className="col-10 col-md-12 text-center bg-dark text-white my-8 py-2 mb-6">
          <Card.Body className="font-weight-bold">
            You will never be on the couch again with Dwellinn.io
          </Card.Body>
        </Card>
      </div>

      <div className="row justify-content-center">
        <div className="col-9 col-md-5 col-lg-4 mb-2">
          <Card
            id="card"
            border="#f7f7f7"
            className="text-center mb-2 h-100"
          >
            <Card.Img className="my-2 rounded-circle shadow-lg  creator-img image mx-auto" alt="larry" src={Larry} />
            <Card.Body className="px-4 d-flex flex-column">
              <Card.Title>Larry Wright</Card.Title>
              <Card.Text>
                After serving in the military, I decide to pursue a career in IT. A bachelor, in Computer science and a software development camp later, I’m now working as an SDE apprentice for Amazon.
              </Card.Text>
              <Button className="mt-auto" variant="outline-dark" href="https://github.com/wrijlarr" target="_blank">Let's have coffee!</Button>
            </Card.Body>
          </Card>
        </div>

        <div className="col-9 col-md-5 col-lg-4 mb-2">
          <Card
            id="card"
            border="#f7f7f7"
            className="text-center mb-2 h-100"
          >
            <Card.Img className="my-2 rounded-circle shadow-lg  creator-img image mx-auto" alt="veronica" src={Veronica} />
            <Card.Body className="px-4 d-flex flex-column">
              <Card.Title>Veronica Pichay</Card.Title>
              <Card.Text>
                I have a Public Policy background and I saw the opportunity to work as an SDE that reaches a global impact on the community, which led to a career transition and ultimate self-fulfillment. My goal is to create a non-profit educational organization that teaches incarcerated juveniles how to code, hoping to reduce recidivism.
              </Card.Text>
              <Button className="mt-auto" variant="outline-dark" href="https://github.com/veronicapichay" target="_blank">Let's have coffee!</Button>
            </Card.Body>
          </Card>
        </div>

        <div className="col-9 col-md-5 col-lg-4 mb-2">
          <Card
            id="card"
            border="#f7f7f7"
            className="text-center mb-2 h-100"
          >
            <Card.Img className="my-2 rounded-circle shadow-lg  creator-img image img-responsive mx-auto" alt="chris" src={Chris} />
            <Card.Body className="px-4 d-flex flex-column">
              <Card.Title>Christopher Arcos</Card.Title>
              <Card.Text>
                While in the Marine Corps, I came across an HTML and CSS course on Youtube since then I have been hooked on learning more about Web Development and all things programming. I am now working as an SDE Apprentice for Amazon.
              </Card.Text>
              <Button className="mt-auto" variant="outline-dark" href="https://github.com/ArcosChris" target="_blank">Let's have coffee!</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Container>
  );
};

export default AboutPage;
