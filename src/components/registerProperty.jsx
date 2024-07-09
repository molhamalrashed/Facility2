import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";

const RegisterProperty = () => {
  const [property, setProperty] = useState({
    propertyName: "",
    address: "",
    city: "",
    state: "",
    country: "",
    postalCode: "",
    propertyType: "",
    size: "",
    numRooms: "",
    numBathrooms: "",
    price: "",
    description: "",
    yearBuilt: "",
    amenities: "",
    photos: "",
    listingDate: "",
    lastRenovationDate: "",
    status: "",
    realEstateDocuments: [],
    notifications: [],
    tasks: [],
    delivery: [],
    hours: [],
    reservations: [],
    lease: [],
    facilities: [],
    policies: [],
    measurements: "",
    purchases: [],
    suppliers: [],
    portfolio: "",
    contractDocuments: [],
    inventories: [],
    lendingPool: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProperty({
      ...property,
      [name]: value,
    });
  };

  const handleAddProperty = (e) => {
    e.preventDefault();
    const usersData = JSON.parse(localStorage.getItem("usersData")) || [];
    const newProperty = {
      ...property,
      propertyId: uuidv4(), // Generate a unique ID for the new property
      amenities: property.amenities.split(","),
      photos: property.photos.split(","),
    };
    usersData[0].properties.push(newProperty); // Add the new property to the first user for simplicity
    localStorage.setItem("usersData", JSON.stringify(usersData));
    alert("Property added successfully!");
    setProperty({
      propertyName: "",
      address: "",
      city: "",
      state: "",
      country: "",
      postalCode: "",
      propertyType: "",
      size: "",
      numRooms: "",
      numBathrooms: "",
      price: "",
      description: "",
      yearBuilt: "",
      amenities: "",
      photos: "",
      listingDate: "",
      lastRenovationDate: "",
      status: "",
      realEstateDocuments: [],
      notifications: [],
      tasks: [],
      delivery: [],
      hours: [],
      reservations: [],
      lease: [],
      facilities: [],
      policies: [],
      measurements: "",
      purchases: [],
      suppliers: [],
      portfolio: "",
      contractDocuments: [],
      inventories: [],
      lendingPool: "",
    });
  };

  const handleCancel = () => {
    window.location.href = "/profile";
  };

  return (
    <div className="container mt-5">
      <h2>Register New Property</h2>
      <form onSubmit={handleAddProperty}>
        <div className="form-group">
          <label>Property Name</label>
          <input
            type="text"
            className="form-control"
            name="propertyName"
            value={property.propertyName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            className="form-control"
            name="address"
            value={property.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>City</label>
          <input
            type="text"
            className="form-control"
            name="city"
            value={property.city}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>State</label>
          <input
            type="text"
            className="form-control"
            name="state"
            value={property.state}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Country</label>
          <input
            type="text"
            className="form-control"
            name="country"
            value={property.country}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Postal Code</label>
          <input
            type="text"
            className="form-control"
            name="postalCode"
            value={property.postalCode}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Property Type</label>
          <input
            type="text"
            className="form-control"
            name="propertyType"
            value={property.propertyType}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Size (sq ft)</label>
          <input
            type="number"
            className="form-control"
            name="size"
            value={property.size}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Number of Rooms</label>
          <input
            type="number"
            className="form-control"
            name="numRooms"
            value={property.numRooms}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Number of Bathrooms</label>
          <input
            type="number"
            className="form-control"
            name="numBathrooms"
            value={property.numBathrooms}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Price ($)</label>
          <input
            type="number"
            className="form-control"
            name="price"
            value={property.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            className="form-control"
            name="description"
            value={property.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label>Year Built</label>
          <input
            type="number"
            className="form-control"
            name="yearBuilt"
            value={property.yearBuilt}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Amenities (comma separated)</label>
          <input
            type="text"
            className="form-control"
            name="amenities"
            value={property.amenities}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Photos (comma separated URLs)</label>
          <input
            type="text"
            className="form-control"
            name="photos"
            value={property.photos}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Listing Date</label>
          <input
            type="date"
            className="form-control"
            name="listingDate"
            value={property.listingDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Last Renovation Date</label>
          <input
            type="date"
            className="form-control"
            name="lastRenovationDate"
            value={property.lastRenovationDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Status</label>
          <input
            type="text"
            className="form-control"
            name="status"
            value={property.status}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Measurements</label>
          <input
            type="text"
            className="form-control"
            name="measurements"
            value={property.measurements}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Portfolio</label>
          <input
            type="text"
            className="form-control"
            name="portfolio"
            value={property.portfolio}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Lending Pool</label>
          <input
            type="text"
            className="form-control"
            name="lendingPool"
            value={property.lendingPool}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Property
        </button>
        <button
          type="button"
          className="btn btn-secondary ml-2"
          onClick={handleCancel}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default RegisterProperty;
