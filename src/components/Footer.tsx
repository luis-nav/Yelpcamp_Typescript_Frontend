import { Container } from "react-bootstrap"

const Footer = () => {
  return (
    <Container className="footer bg-dark mt-auto py-3" fluid={true}>
        <Container>
            <span className="text-muted">YelpCamp &copy;</span>
        </Container>
    </Container>
  )
}

export default Footer