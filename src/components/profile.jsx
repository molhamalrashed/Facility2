import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Profile = () => {
    const userEmail = sessionStorage.getItem('userEmail');
    const usersDataString = localStorage.getItem('usersData');
    const usersData = usersDataString ? JSON.parse(usersDataString) : [];

    const currentUser = usersData.find((user) => user.email === userEmail);

    const handleLogout = () => {
        sessionStorage.removeItem('userEmail');
        window.location.href = '/';
    }

    return (
        <div className="container">
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">Link</Nav.Link>
                        <NavDropdown title="Link" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">
                            Something else here
                        </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
                        <Button variant="outline-success" onClick={handleLogout}>Logout</Button>
                    </Form>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
            {currentUser ? (
                <>
                    <h2>Welcome, {currentUser.firstName} {currentUser.lastName}</h2>
                    <Row>
                        {currentUser.properties? currentUser.properties.map((property) => (
                            <Col key={property.propertyId} xs={12} md={6} lg={4} className="mb-4">
                                <Card style={{ width: '18rem'}}>
                                    <Card.Img variant="top" src={property.photos} />
                                    <Card.Body>
                                        <Card.Title>{property.propertyName}</Card.Title>
                                        <Card.Text>
                                            {property.description}
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )) : (<p>There are no properties yet</p>)}
                    </Row>
                </>
            ) : (
                <p>User not found</p>
            )}
        </div>
    );
}

export default Profile;
