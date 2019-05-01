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
                        </Navbar>
                    )}
                </AppConsumer>
            </div>
        )
    }
}

class Summary extends Component {

    getTotalSpending() {
        const contextValue = this.context;
        var spendings = contextValue.state.currentMonthData.spendings;
        var total = spendings.food.total + spendings.entertainment.total + spendings.housing.total + spendings.others.total;
        return total;
    }

    getData() {
        const contextValue = this.context;

        var spendings = contextValue.state.currentMonthData.spendings;
        this.list = [];

        console.log(spendings.food);
        console.log(spendings.entertainment);
        console.log(spendings.housing);
        console.log(spendings.others);
    }

    render() {
        return (
            <AppConsumer>
                {(context) => (
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
                                            { theta: context.state.currentMonthData.spendings.food.total, color: "red" },
                                            { theta: context.state.currentMonthData.spendings.entertainment.total, color: 'green' },
                                            { theta: context.state.currentMonthData.spendings.housing.total, color: "blue" },
                                            { theta: context.state.currentMonthData.spendings.others.total, color: "black" }
                                        ]}
                                        onValueMouseOver={v => this.setState({ value: v })}
                                        onSeriesMouseOut={v => this.setState({ value: false })}
                                        width={300}
                                        height={300}
                                        padAngle={0.04}
                                        showLabels={true}
                                    />
                                </Col>
                                <Col>
                                    <Row>
                                        <div className="foo red"></div>
                                        <p>Food, costs: {context.state.currentMonthData.spendings.food.total}</p>
                                    </Row>
                                    <Row>
                                        <div className="foo green"></div>
                                        <p>Entertainment, costs: {context.state.currentMonthData.spendings.entertainment.total}</p>
                                    </Row>
                                    <Row>
                                        <div className="foo blue"></div>
                                        <p>Housing, costs: {context.state.currentMonthData.spendings.housing.total}</p>
                                    </Row>
                                    <Row>
                                        <div className="foo black"></div>
                                        <p>Others, costs: {context.state.currentMonthData.spendings.others.total}</p>
                                    </Row>
                                    <Row>
                                        <div className="foo black"></div>
                                        <p>Total Spending: {this.getTotalSpending()}</p>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </Jumbotron>
                )}
            </AppConsumer>
        )
    }
}
Summary.contextType = AppConsumer; // This part is important to access context values


export default Home;