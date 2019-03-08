import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container, Jumbotron, Row, Col } from "react-bootstrap";
import { RadialChart, Hint } from 'react-vis';
import "../style/style.css";


class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Summary />
            </div>
        )
    }
}

class Header extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Never Forget</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <Button variant="outline-warning">SignIn</Button>
                        <Button variant="outline-success">LogIn</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

class Summary extends Component {
    state = {
        value: false
    };
    render() {
        const { value } = this.state;

        return (
            <Jumbotron>
                <Container>
                    <Row>
                        <Col>
                            <RadialChart
                                className={'donut-chart-example'}
                                innerRadius={100}
                                radius={140}
                                getAngle={d => d.theta}
                                colorType="literal"
                                data={[
                                    { theta: 2, className: 'custom-class', color: "red" },
                                    { theta: 6, className: 'custom-class2', color: 'green' },
                                    { theta: 2, color: "blue" },
                                    { theta: 3, color: "black" },
                                    { theta: 1, color: "purple" }
                                ]}
                                onValueMouseOver={v => this.setState({ value: v })}
                                onSeriesMouseOut={v => this.setState({ value: false })}
                                width={300}
                                height={300}
                                padAngle={0.04}
                            />
                        </Col>
                        <Col>
                            <Row>
                                <div class="foo blue"></div>
                                <p>Food</p>
                            </Row>
                            <Row>
                                <div class="foo purple"></div>
                                <p>Movies</p>
                            </Row>
                            <Row>
                                <div class="foo wine"></div>
                                <p>Rent</p>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        )
    }
}

export default Home;