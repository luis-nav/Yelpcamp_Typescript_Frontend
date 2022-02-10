import { Container } from "react-bootstrap"

const Footer = () => {
  return (
    <Container className="bg-dark mt-auto py-3" fluid={true}>
        <Container className="">
            <span className="text-muted">YelpCamp &copy;</span>
        </Container>
    </Container>
  )
}

export default Footer