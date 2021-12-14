import React from "react";
import items from "../jsonData/history.json";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

const Home = () => (
  <div>
    {items.map((item) => (
      <Card style={{ width: "18rem" }}>
        <Container>
          <Row>
            <Col>
              <Card.Img variant="top" src={item.img} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text></Card.Text>
                <Button variant="primary">{item.price}</Button>
              </Card.Body>
            </Col>
          </Row>
        </Container>
      </Card>
    ))}
  </div>
);

export default Home;
