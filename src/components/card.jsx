import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../App.css";

function MovieRender({ property }) {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const renderPropertyDetails = () => {
    const ignoredKeys = ["photos", "propertyName", "description"];
    return Object.entries(property) // convert object to array of key-value pairs
      .filter(([key]) => !ignoredKeys.includes(key))
      .slice(0, 15)
      .map(([key, value]) => (
        <div key={key} className="property-detail">
          <strong>
            {key
              .replace(/([A-Z])/g, " $1")
              .replace(/^./, (str) => str.toUpperCase())}
            :
          </strong>{" "}
          {Array.isArray(value) ? value.join(", ") : value}
        </div>
      ));
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={property.photos[0]} />
      <Card.Body>
        <Card.Title>{property.propertyName}</Card.Title>
        <Card.Text>
          {showFullDescription ? (
            <div>
              <p className="property-detail">
                <strong>Description:</strong> {property.description}
              </p>
              {renderPropertyDetails()}
            </div>
          ) : (
            <p className="property-detail">
              {property.description.length > 100
                ? `${property.description.substring(0, 100)}...`
                : property.description}
            </p>
          )}
        </Card.Text>
        <Button
          className="show-btn"
          variant="primary"
          onClick={toggleDescription}
        >
          {showFullDescription ? "Show less" : "Show more"}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default MovieRender;
