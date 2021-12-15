import React from "react";
import items from "../jsonData/history.json";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <Container>
        <Row className="g-4" xs={2} md={4}>
          {items.map((item) => (
            <Col className="col-4">
              <Card className="my-2">
                <Card.Img
                  className="img-fluid"
                  style={{
                    height: 300,
                    objectFit: "cover",
                  }}
                  variant="top"
                  src={item.img}
                />
                <Card.Body>
                  <Card.Title className="text-truncate">
                    {item.title}
                  </Card.Title>
                  <Card.Text></Card.Text>
                  <Button className="btn-sm" variant="success">
                    £{item.price}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
