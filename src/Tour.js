import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <Card className="mb-4">
      <Card.Img
        variant="top"
        src={image}
        style={{ height: "25rem", objectFit: "cover" }}
      />
      <Card.Body>
        <div className="d-flex justify-content-between">
          <Card.Title>{name}</Card.Title>
          <Card.Title>${price}</Card.Title>
        </div>
        <Card.Text>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <Button onClick={() => setReadMore(!readMore)} variant="link">
            {readMore ? "Show Less" : "Read More"}
          </Button>
        </Card.Text>
        <div className="text-center">
          <Button onClick={() => removeTour(id)} variant="outline-danger">
            Not Interested
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Tour;
