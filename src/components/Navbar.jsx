import { Nav } from "react-bootstrap";

const MyNavBar = () => {
  return (
    <Nav
      bg="dark"
      variant="light"
      expand="lg"
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">About</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Browse</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default MyNavBar;
