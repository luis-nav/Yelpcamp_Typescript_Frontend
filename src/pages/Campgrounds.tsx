import { Col, Container, Row, Stack } from "react-bootstrap"
import { Link } from "react-router-dom"
import CampgroundCard from "../components/CampgroundCard"

const Campgrounds = () => {
  return (
    <Container className="mt-5">
        <h1>All Campgrounds</h1>
        <Link to="/createcampground">Create a New Campground</Link>
        <CampgroundCard title="First Campground" location="Heredia, Costa Rica" image="https://res.cloudinary.com/dioxmvskz/image/upload/v1619734929/YelpCamp/nucjbssr8px3buustbkj.jpg" description="Hola soy una prueba" />
        <CampgroundCard title="First Campground" location="Heredia, Costa Rica" image="https://res.cloudinary.com/dioxmvskz/image/upload/v1619734929/YelpCamp/nucjbssr8px3buustbkj.jpg" description="Hola soy una prueba" />
    </Container>
  )
}

export default Campgrounds