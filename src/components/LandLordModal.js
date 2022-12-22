import React from "react";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const LandLord = () => {
    return (
        <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
        >
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Property Owner Information</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p> Name: Mr. Joe Smith</p>
                    <p>Phone Number:123-456-789</p>
                    <p>Service Number: 888-456-789</p>
                    <p> email: dewellinn.management@gmail.com</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary">Close</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    );
}

export default LandLord;