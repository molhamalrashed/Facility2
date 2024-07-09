import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Modal from "react-bootstrap/Modal"; // for the pop-up modal
import CardRender from "./card";
import "../App.css";

const Profile = () => {
  const userEmail = sessionStorage.getItem("userEmail");
  const usersDataString = localStorage.getItem("usersData");
  const usersData = usersDataString ? JSON.parse(usersDataString) : [];
  const currentUser = usersData.find((user) => user.email === userEmail);

  const [showModal, setShowModal] = useState(false);
  const [actionType, setActionType] = useState("");

  const handleLogout = () => {
    sessionStorage.removeItem("userEmail");
    window.location.href = "/";
  };

  const handleDeleteAccount = () => {
    const newUsersData = usersData.filter((user) => user.email !== userEmail);
    localStorage.setItem("usersData", JSON.stringify(newUsersData));
    sessionStorage.removeItem("userEmail");
    window.location.href = "/";
  };

  const handleShowModal = (action) => {
    // action can be 'logout' or 'delete
    setActionType(action);
    setShowModal(true);
  };

  const handleConfirmAction = () => {
    // this function is called when the user clicks the 'Yes' button in the modal
    if (actionType === "logout") {
      handleLogout();
    } else if (actionType === "delete") {
      handleDeleteAccount();
    }
    setShowModal(false);
  };

  const handleSelectProperty = (property) => {
    sessionStorage.setItem("selectedProperty", JSON.stringify(property));
    window.location.href = "/landing";
  };

  const handleHomeButton = () => {
    sessionStorage.removeItem("selectedCategory");
    sessionStorage.removeItem("selectedProperty");
    window.location.href = "/profile";
  };

  return (
    <div className="container">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand
            style={{ cursor: "pointer" }}
            onClick={handleHomeButton}
          >
            Home
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavDropdown title="My properties" id="navbarScrollingDropdown">
                {currentUser.properties.map((property) => (
                  <NavDropdown.Item
                    href="#"
                    key={property.propertyId}
                    onClick={() => handleSelectProperty(property)}
                  >
                    {property.propertyName}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            </Nav>
            <Form className="d-flex me-3">
              <Button
                style={{ margin: "0.2rem 0" }}
                variant="outline-success"
                onClick={() => handleShowModal("logout")}
              >
                Logout
              </Button>
            </Form>
            <Form className="d-flex me-3">
              <Button
                style={{ margin: "0.2rem 0" }}
                variant="outline-success"
                onClick={() => handleShowModal("delete")}
              >
                Delete my account
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Modal to confirm logout and delete account */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Action</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {actionType === "logout"
            ? "Are you sure you want to logout?"
            : "Are you sure you want to delete your account?"}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleConfirmAction}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>

      {currentUser ? (
        <>
          <div className="welcome-container">
            <h2 className="welcome-message">
              Welcome, {currentUser.firstName} {currentUser.lastName}
            </h2>
          </div>
          <Row>
            {currentUser.properties ? (
              currentUser.properties.map((property) => (
                <Col
                  key={property.propertyId}
                  xs={12}
                  md={6}
                  lg={4}
                  className="mb-4"
                >
                  <CardRender property={property} />
                </Col>
              ))
            ) : (
              <p>There are no properties yet</p>
            )}
          </Row>
        </>
      ) : (
        <p>User not found</p>
      )}
    </div>
  );
};

export default Profile;
