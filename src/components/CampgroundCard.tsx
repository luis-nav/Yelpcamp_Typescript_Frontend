import { Card, Col, Row, Image, Button} from "react-bootstrap"
import { Link } from "react-router-dom"

type Props = {
    image: string;
    title: string;
    description: string;
    location: string;
}

const CampgroundCard = (props: Props) => {
  return (
    <Card className="mb-3">
        <Row>
            <Col md={4}>
                <Image src={props.image} fluid={true} />
            </Col>
            <Col md={8}>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.description}</Card.Text>
                <Card.Text as="small" className="text-muted">{props.location}</Card.Text>
                <br />
                <Button variant="primary mt-3">View {props.title}</Button>
            </Col>
        </Row>
    </Card>
  )
}

export default CampgroundCard