import React from "react";
import Larry from "../assets/Larry.png";
import Veronica from "../assets/Veronica.png";
import Chris from "../assets/Chris.png";
// import "./App.cs";
import {
  Container,
  Row,
  Col,
  Image,
  Button,
  Card,
  Form,
} from "react-bootstrap";
import "../css/AboutPage.css";
// import "boostrap/dist/css/bootstrap.min.css";

const AboutPage = () => {
  return (
    <main>
      <Container>
        <Row className="px-4 my-5">
          <Col sm={7}>
            <Image
              class="foyer"
              src="https://images2.dwell.com/photos/6063391372700811264/6404398576760057856/original.jpg?auto=format&q=35&w=960"
              fluid
              rounded
              className=""
            />
          </Col>
          <Col sm={5}>
            <h1 class="font-weight-light my-4">Hi! We're Dwellinn.io</h1>
            <p class="mt-4">
              We're a small veteran owned company that continually serves our
              community by creating a customer centric mindset. We guarantee the
              best match for both our tenants and landlords.
            </p>
            <p class="mt-4">
              Our comprehensive services will help you navigate the nuances of
              renting a property. We believe staying competitive while
              prioritizing our clients needs.
            </p>
            <Button variant="outline-dark ">Email Us</Button>
          </Col>
        </Row>
        <Row>
          <Card className="text-center bg-dark text-white my-8 py-2 mb-6">
            <Card.Body className="font-weight-bold">
              You will never be on the couch again with Dwellinn.io
            </Card.Body>
          </Card>
        </Row>
        <Row>
          <Col>
            <Card
              id="card"
              border="#f7f7f7"
              style={{
                width: "18rem",
                height: "18rem",
                whiteSpace: "pre-wrap",
              }}
            >
              <Card.Img class="image" alt="larry" src={Larry} />
              <Card.Body>
                <Card.Title>Larry Wright</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="outline-dark">Let's have coffee!</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              id="card"
              border="#f7f7f7"
              style={{
                width: "18rem",
                height: "18rem",
                whiteSpace: "pre-wrap",
              }}
            >
              <Card.Img class="image" alt="veronica" src={Veronica} />
              <Card.Body>
                <Card.Title>Veronica Pichay</Card.Title>
                <Card.Text>
                  Life is too short! Shoot your shot for a new dwelling! 
                </Card.Text>
                <Button variant="outline-dark">Let's have coffee!</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              id="card"
              border="#f7f7f7"
              style={{
                width: "18rem",
                height: "18rem",
                whiteSpace: "pre-wrap",
              }}
            >
              <Card.Img class="image" alt="chris" src={Chris} />
              <Card.Body>
                <Card.Title>Christopher Arcos</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="outline-dark">Let's have coffee!</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default AboutPage;
