import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';





const TenantDashboard = () => {
    return (
        <div className="dashboard">
            <h1 className="welcome">Welcome back Tenant!</h1>

            <Container className="justify-content-center mx-auto text-center">
                <div className="row text-center">
                    <Card
                        bg='light'
                        key='light'
                        text='dark'
                        className="c-1 col-12 col-md-5 "
                    >
                        <Card.Header>Service Request</Card.Header>
                        <Card.Body>
                            <Card.Title>View Active</Card.Title>
                            <Card.Text>
                                - Submit New Request -
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card
                        bg='light'
                        key='light'
                        text='dark'
                        className="c-1 col-12 col-md-5 "
                    >
                        <Card.Header>Service Request</Card.Header>
                        <Card.Body>
                            <Card.Title>View Active</Card.Title>
                            <Card.Text>
                                - Submit New Request -
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card
                        bg='light'
                        key='light'
                        text='dark'
                        className="c-1 col-12 col-md-5 "
                    >
                        <Card.Header>Service Request</Card.Header>
                        <Card.Body>
                            <Card.Title>View Active</Card.Title>
                            <Card.Text>
                                - Submit New Request -
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card
                        bg='light'
                        key='light'
                        text='dark'
                        className="c-1 col-12 col-md-5 "
                    >
                        <Card.Header>Service Request</Card.Header>
                        <Card.Body>
                            <Card.Title>View Active</Card.Title>
                            <Card.Text>
                                - Submit New Request -
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </Container>
        </div>
    )

}

export default TenantDashboard;