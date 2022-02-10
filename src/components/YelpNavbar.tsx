import {Navbar, Container, Nav} from 'react-bootstrap'
import { Link } from "react-router-dom";

type Props = {
    current: string;
}

const YelpNavbar = (props: Props) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand as={Link} to="/campgrounds">YelpCamp</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/home">Home</Nav.Link>
      <Nav.Link as={Link} to="/campgrounds">Campgrounds</Nav.Link>
      <Nav.Link as={Link} to="/newcampground">New Campground</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link as={Link} to="/login">Log In</Nav.Link>
      <Nav.Link as={Link} to="/register">Sign Up</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default YelpNavbar