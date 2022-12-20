import React from "react";
import "../css/ServiceRequest.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const ServiceRequest = () => {
    return (
        <div className="srcontainer">
            <h1 className="service text-center">Service Request
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh2QVklNtRaXvWoiVDCE27akhKfTkhrCk0Mw&usqp=CAU" alt="" /> </h1>


            <Form>
                <InputGroup>
                    <InputGroup.Text>Date of Issue:</InputGroup.Text>
                    <Form.Control type="date" aria-label="With textarea" />
                </InputGroup>
                <br />
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label><h5>Description of Problem</h5></Form.Label>
                    <InputGroup>
                        <InputGroup.Text>Issue</InputGroup.Text>
                        <Form.Control as="textarea" aria-label="With textarea" />
                    </InputGroup>
                    <Form.Text className="text-muted">
                        Give a detiled description of the issue.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label><h5>Area Affected</h5></Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option></option>
                        <option value="1">Appliances</option>
                        <option value="2">Electrical</option>
                        <option value="3">AC</option>
                        <option value="4">Plumbing</option>
                        <option value="3">Structural</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <p>Importance:</p>
                    <Form.Check type="checkbox" label="High Priority" />
                    <Form.Check type="checkbox" label="Med Priority" />
                    <Form.Check type="checkbox" label="Low Priority" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

        </div>
    );
}

export default ServiceRequest;