import React from "react";
import Card from 'react-bootstrap/Card';

const ServiceRequest = () => {
    return (
        <div className="srp">
            <h1 className="service">Service Request</h1>

            <Card className="desc" style={{ width: '30rem' }}>
                <Card.Body>
                    <Card.Title>Description of Problem</Card.Title>
                    <br />
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ServiceRequest;