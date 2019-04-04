import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container, Jumbotron, Row, Col } from "react-bootstrap";
import { RadialChart, Hint } from 'react-vis';
import { AppConsumer } from './appProviderComponent';
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
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <AppConsumer>
                    {(context) => (
                        <Navbar bg="light" expand="lg">
                            <Navbar.Brand href="#home">Never Forget</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto">
                                    <NavDropdown title={context.state.summarySelectionState.currentSelection} id="basic-nav-dropdown">
                                        <NavDropdown.Item onClick={() => context.setSummarySelectionState(context.state.summarySelectionState.currentMonthSummary)}
                                            href="#action/3.1">
                                            {context.state.summarySelectionState.currentMonthSummary}
                                        </NavDropdown.Item>
                                        <NavDropdown.Item onClick={() => context.setSummarySelectionState(context.state.summarySelectionState.currentYearSummary)}
                                            href="#action/3.2">
                                            {context.state.summarySelectionState.currentYearSummary}
                                        </NavDropdown.Item>
                                        <NavDropdown.Item onClick={() => context.setSummarySelectionState(context.state.summarySelectionState.totalSummary)}
                                            href="#action/3.3">
                                            {context.state.summarySelectionState.totalSummary}
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                                <Form inline>
                                    <Button variant="outline-warning">SignIn</Button>
                                    <Button variant="outline-success">LogIn</Button>
                                </Form>
                            </Navbar.Collapse>
                            <button onClick={() => console.log(context.state)}>
                                button
                            </button>
                        </Navbar>
                    )}
                </AppConsumer>
            </div>
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
                                <div className="foo blue"></div>
                                <p>Food</p>
                            </Row>
                            <Row>
                                <div className="foo purple"></div>
                                <p>Movies</p>
                            </Row>
                            <Row>
                                <div className="foo wine"></div>
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