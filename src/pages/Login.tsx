import { Button, Card, Col, Container, Form, FormControl, Row } from "react-bootstrap"


const Login = () => {



  return (
    <Container className="mt-10">
        <Container className="d-flex justify-content-center align-items-center mt-5">
            <Row>
                <Col md={{span: 6, offset:3}} xl={{span: 4, offset: 4}}>
                    <Card className="shadow">
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1571863533956-01c88e79957e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80" />
                        <Card.Body>
                            <Card.Title>Login</Card.Title>
                            <Form>
                                <div className="mb-3">
                                    <Form.Label>Username</Form.Label>
                                    <FormControl type="text"></FormControl>
                                </div>
                                <div className="mb-3">
                                    <Form.Label>Password</Form.Label>
                                    <FormControl type="password"></FormControl>
                                    <div className="d-grid gap-2">
                                        <Button variant="success" className="mt-3">Login</Button>
                                    </div>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </Container>
  )
}

export default Login