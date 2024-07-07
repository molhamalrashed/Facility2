import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Profile = () => {
    const userEmail = sessionStorage.getItem('userEmail');
    const usersDataString = localStorage.getItem('usersData');
    const usersData = usersDataString ? JSON.parse(usersDataString) : [];

    const currentUser = usersData.find((user) => user.email === userEmail);

    return (
        <div className="container">
            <h1>Profile</h1>
            {currentUser ? (
                <>
                    <p>Welcome, {currentUser.firstName} {currentUser.lastName}</p>
                    <Row>
                        {currentUser.properties.map((property) => (
                            <Col key={property.propertyId} xs={12} md={6} lg={4} className="mb-4">
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={property.photos[0]} />
                                    <Card.Body>
                                        <Card.Title>{property.propertyName}</Card.Title>
                                        <Card.Text>
                                            {property.description}
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </>
            ) : (
                <p>User not found</p>
            )}
        </div>
    );
}

export default Profile;
