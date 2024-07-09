import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Modal from "react-bootstrap/Modal"; // for the pop-up modal
import { categories } from "../DummyData";
import { Grid, GridColumn } from "@progress/kendo-react-grid";
import { filterBy} from '@progress/kendo-data-query';
import DeliveryItemsCell from "./kendo/deliveryItemCell";
import RoomDimensions from "./kendo/roomDimensions";
import PriorityCell from "./kendo/priorityCell";
import "@progress/kendo-theme-material/dist/all.css";
import "../App.css";


const Profile = () => {
  const userEmail = sessionStorage.getItem("userEmail");
  const currentProperty = JSON.parse(
    sessionStorage.getItem("selectedProperty")
  );
  const usersDataString = localStorage.getItem("usersData");
  const usersData = usersDataString ? JSON.parse(usersDataString) : [];
  const currentCategory = JSON.parse(
    sessionStorage.getItem("selectedCategory")
  );

  const [showModal, setShowModal] = useState(false);
  const [actionType, setActionType] = useState("");
  const [filter, setFilter] = useState(null);
  const [skip, setSkip] = useState(0);
  const [pageSize, setPageSize] = useState(2);

  const handleFilterChange = (event) => {
    setFilter(event.filter);
  };

  const handlePageChange = (event) => {
    setSkip(event.page.skip);
    setPageSize(event.page.take);
  };

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

  const handleSelectCategory = (category) => {
    sessionStorage.setItem("selectedCategory", JSON.stringify(category));
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
            <Nav.Item className="selected-property">
              {currentProperty.propertyName}
            </Nav.Item>
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavDropdown
                title={currentCategory ? currentCategory : "Categories"}
                id="navbarScrollingDropdown"
              >
                {categories.map((category) => (
                  <NavDropdown.Item
                    key={category}
                    onClick={() => handleSelectCategory(category)}
                  >
                    {category}
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
      {currentCategory ? (
        <div className="grid">
          {currentCategory === "notifications" ? (
          <Grid data={currentProperty[currentCategory]}>
            <GridColumn field="notificationType" title="Notification Type" />
            <GridColumn field="message" title="Message" />
            <GridColumn field="notificationDate" title="Notification Date" />
            <GridColumn field="status" title="Status" />
            <GridColumn field="assignedTo" title="Assigned to" />
            <GridColumn field="priority" title="Priority" cell={PriorityCell} />
          </Grid>
      ) : currentCategory === "delivery" ? (
        <Grid data={currentProperty[currentCategory]}>
          <GridColumn field="deliveryDate" title="Delivery Date" />
          <GridColumn field="deliveryStatus" title="Delivery Status" />
          <GridColumn field="deliveryItems" title="Delivery Items" cell={DeliveryItemsCell} />
        </Grid>
      ) : currentCategory === "measurements" ? (
        <Grid data={currentProperty[currentCategory]}>
          <GridColumn field="areaSize" title="Area Size" />
          <GridColumn field="roomDimensions" title="Room Dimension" cell={RoomDimensions} />
        </Grid>
      ) : currentCategory === "purchases" ? (
        <Grid
          data={filterBy(currentProperty[currentCategory], filter)}
          filterable
          filter={filter}
          onFilterChange={handleFilterChange}
        >
          <GridColumn field="purchaseDate" title="Purchase Date" filter="date" />
          <GridColumn field="purchaseAmount" title="Purchase Amount" filter="numeric" />
          <GridColumn field="purchaseDescription" title="Purchase Description" />
          <GridColumn field="vendor" title="Vendor" />
        </Grid>
      ) : currentCategory === "tasks" ? (
            <Grid
              data={currentProperty[currentCategory].slice(skip, skip + pageSize)}
              pageable
              total={currentProperty[currentCategory].length}
              skip={skip}
              pageSize={pageSize}
              onPageChange={handlePageChange}
            >
              <GridColumn field="taskName" title="Task Name" />
              <GridColumn field="taskDescription" title="Task Description" />
              <GridColumn field="assignedTo" title="Assigned To" />
              <GridColumn field="dueDate" title="Due Date" />
              <GridColumn field="taskStatus" title="Task Status" />
              <GridColumn field="priority" title="Priority" />
            </Grid>
          ) : (<Grid data={currentProperty[currentCategory]}></Grid>)}
        </div>
      ) : (
        <h1>Choose a category</h1>
      )}
    </div>
  );
};

export default Profile;
