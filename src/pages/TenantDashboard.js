import React from "react";
import Figure from 'react-bootstrap/Figure';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Accordion from 'react-bootstrap/Accordion';



const TenantDashboard = () => {
    return (
        <div className="dashboard">
            <h1 className="welcome">Welcome back Tenant!</h1>
            <Figure className="fig-img">
                <Figure.Image
                    width={171}
                    height={180}
                    alt="171x180"
                    src="data:image/jpeg;base64,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"
                />
                <Figure.Caption className="img-caption">
                    Image for user
                </Figure.Caption>
            </Figure>


            <DropdownButton id="dropdown-item-button" title="Contacts/Edits">
                <Dropdown.ItemText>Lease Payment</Dropdown.ItemText>
                <Dropdown.Item as="button">Profile</Dropdown.Item>
                <Dropdown.Item as="button">Landlord</Dropdown.Item>
                <Dropdown.Item as="button">Maintenance</Dropdown.Item>
            </DropdownButton>

        </div>
    )

}

export default TenantDashboard;